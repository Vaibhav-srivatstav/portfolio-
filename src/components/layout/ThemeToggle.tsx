import { ToggleTheme } from "../lightswind/toggle-theme"

export function AnimatedThemeTogglerStarDemo() {
  return (
    <div className="flex justify-start">
       <ToggleTheme animationType="swipe-down"/>
    </div>
  );
}