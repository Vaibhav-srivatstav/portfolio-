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
      <div className="mx-auto max-w-7xl px-4 py-12 flex flex-col items-center gap-12 lg:flex-row lg:justify-between lg:text-left">
        
        {/* Text Content */}
        <div className="flex flex-col gap-6 max-w-2xl w-full text-center lg:text-left items-center lg:items-start">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl tracking-tight">
            I AM A SOFTWARE DEVELOPER
          </h1>
          
          {/* Min-height prevents layout jump */}
          <div className="min-h-[80px] flex items-center justify-center lg:justify-start">
            <TypingText />
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-lg">
            I ENJOY EXPLORING IDEAS THAT CONNECT DESIGN, TECHNOLOGY,
            AND INNOVATION TO SOLVE REAL-WORLD PROBLEMS.
          </p>
        </div>

        {/* Image Container */}
        <CardContainer className="inter-var w-full max-w-md lg:max-w-lg">
          <CardBody className="w-full aspect-square relative">
            <CardItem translateZ={200} className="w-full h-full">
              <Image
                src="/hero.jpeg"
                alt="Vaibhav Srivastava"
                fill
                priority
                className="rounded-2xl object-cover shadow-2xl"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
};

export default Hero;