"use client";

import { useEffect, useState } from "react";

const texts = [
  "<body>Vaibhav</body>",
  "class public Vaibhav{}",
  "def Vaibhav():",
  "String name = 'Vaibhav'",
  "public static void Vaibhav(int a){}",
  "CREATE OR REPLACE FUNCTION get_vaibhav_id() RETURNS void AS...",
];

export default function TypingText() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    
    // Determine speed: normal typing, deleting speed, or a pause when a word is fully typed
    let speed = isDeleting ? 50 : 100; 

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Add one character
        const nextText = currentText.slice(0, text.length + 1);
        setText(nextText);

        // If the word is fully typed, pause for 2 seconds, then start deleting
        if (nextText === currentText) {
          setIsDeleting(true);
          return; // Prevents triggering the next loop immediately
        }
      } else {
        // Remove one character
        const nextText = currentText.slice(0, text.length - 1);
        setText(nextText);

        // If the word is completely deleted, switch index smoothly
        if (nextText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting && text === currentText ? 2000 : speed); // Pause happens here when fully typed

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <h1 className="text-4xl font-mono font-bold">
      {text}
      <span className="animate-ping ml-1">|</span>
    </h1>
  );
}