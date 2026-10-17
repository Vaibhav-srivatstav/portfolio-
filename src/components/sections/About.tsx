import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-10 mx-auto">
      {/* Heading */}
      <div className="flex justify-center mb-10">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-nav font-bold">
          ABOUT
        </h1>
      </div>

      {/* Main Content Container */}
      <div className="flex bg-darklw flex-col lg:flex-row items-center gap-10">
        
        {/* Left Text Block */}
        <div className="flex-1 text-white text-sm sm:text-base md:text-lg leading-7 text-center lg:text-left order-2 lg:order-1">
          <p>
            HI, I'M <span className="font-logo text-orange-500 font-bold">VAIBHAV SRIVASTAVA</span>, 
            AN <span className="font-logo font-bold text-yellow-300">MCA GRADUATE</span> FROM THE 
            <span className="font-logo font-bold text-sky-300"> UNIVERSITY OF ALLAHABAD</span> 
            AND A PASSIONATE SOFTWARE DEVELOPER WITH A STRONG INTEREST IN 
            BUILDING SCALABLE WEB APPLICATIONS AND SOLVING REAL-WORLD PROBLEMS.
          </p>
          <br />
          <p>
            MY TECHNICAL EXPERTISE SPANS JAVA, SPRING BOOT, HIBERNATE/JPA, SQL, 
            JAVASCRIPT, REACT.JS, NEXT.JS, NODE.JS, EXPRESS.JS, MONGODB, AND 
            RESTFUL APIS. I ALSO HAVE A SOLID FOUNDATION IN DSA, OOP, DBMS, 
            OPERATING SYSTEMS, AND COMPUTER NETWORKS.
          </p>
        </div>

        {/* Center Image */}
        <div className="order-1 lg:order-2 flex-shrink-0">
          <CardContainer className="inter-var">
            <CardBody className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]">
              <CardItem translateZ={50} className="w-full h-full">
                <Image
                  src="/about.jpeg"
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

        {/* Right Text Block */}
        <div className="flex-1 text-white text-sm sm:text-base md:text-lg leading-7 text-center lg:text-left order-3">
          <p>
            I ENJOY WORKING ACROSS THE FULL DEVELOPMENT LIFECYCLE—FROM 
            DESIGNING RESPONSIVE USER INTERFACES TO DEVELOPING ROBUST BACKEND 
            SERVICES AND MANAGING DATABASES.
          </p>
          <br />
          <p>
            WHETHER IT'S BUILDING MODERN MERN STACK APPLICATIONS OR 
            ENTERPRISE-GRADE JAVA SYSTEMS, I AM ALWAYS EAGER TO LEARN 
            AND TAKE ON NEW CHALLENGES.
          </p>
          <br />
          <p>
            I BELIEVE IN CONTINUOUS LEARNING, CLEAN CODE, AND CREATING 
            USER-FOCUSED SOLUTIONS. CURRENTLY SEEKING OPPORTUNITIES TO 
            CONTRIBUTE, COLLABORATE, AND GROW AS A SOFTWARE ENGINEER.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;