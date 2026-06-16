import Image from "next/image";
import TypingText from "../layout/RepeatedText";
import {
  CardContainer,
  CardBody,
  CardItem,
} from "@/components/ui/3d-card";

const Hero = () => {
  return (
    <section className="font-nav">
      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          py-8
          flex
          flex-col
          items-center
          gap-6
          text-center

          lg:flex-row
          lg:justify-between
          lg:text-left
        "
      >
        {/* Text Content */}
        <div className="flex flex-col gap-4 max-w-xl">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            I AM A SOFTWARE DEVELOPER
          </h1>
          <TypingText />

          <p className="text-base sm:text-lg md:text-xl">
            I ENJOY EXPLORING IDEAS THAT CONNECT DESIGN, TECHNOLOGY,
            AND INNOVATION TO SOLVE REAL-WORLD PROBLEMS.
          </p>
        </div>

        {/* Image */}
        <CardContainer className="inter-var">
          <CardBody className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
            <CardItem
              translateZ={200}
              className="w-full h-full"
            >
              <Image
                src="/hero.jpeg"
                alt="Vaibhav Srivastava"
                width={500}
                height={500}
                priority
                className="w-full h-full rounded-2xl object-cover shadow-2xl"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
};

export default Hero;