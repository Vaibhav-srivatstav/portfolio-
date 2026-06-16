import Skill from '../ui/Skill';

const Skills = () => {
  return (
    <section id='skills' className=" font-nav px-4 sm:px-6 lg:px-12 py-10  min-h-screen">
      {/* Heading */}
      <div className="flex bg-black w-full justify-center mb-16">
        <h1 className="font-logo text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-wider">
          SKILLS
        </h1>
      </div>

      <div className="space-y-12 max-w-6xl mx-auto">
        
        {/* PROGRAMMING SKILLS */}
        <div className="border-b border-zinc-800 pb-8">
          <h2 className="text-orange-500 font-bold text-xl mb-6 tracking-wide">PROGRAMMING SKILLS</h2>
          <div className="flex flex-wrap gap-x-8 gap-y-6">
            <Skill name="JAVA" image="/skills/java.png"/>
            <Skill name="C" image="/skills/c.png" />
            <Skill name="PYTHON" image="/skills/python.png"/>
            <Skill name="JAVASCRIPT" image="/skills/javascript.png" />
            <Skill name="TYPESCRIPT" image="/skills/typescript.png" />
            <Skill name="SQL" image="/skills/sql.png"/>
            <Skill name="C#" image="/skills/csharp.png"/>
          </div>
        </div>

        {/* FRAMEWORKS & LIBRARIES */}
        <div className="border-b border-zinc-800 pb-8">
          <h2 className="text-orange-500 font-bold text-xl mb-6 tracking-wide">FRAMEWORKS & LIBRARIES</h2>
          <div className="flex flex-wrap gap-x-8 gap-y-6">
            <Skill name="REACT.JS" image="/framework/react.png" />
            <Skill name="NEXT.JS" image="/framework/next.png" />
            <Skill name="NODE.JS" image="/framework/node.png" />
            <Skill name="EXPRESS.JS" image="/framework/express.png" />
            <Skill name="SPRING BOOT" image="/framework/springboot.png" />
            <Skill name="DJANGO" image="/framework/django.png" />
            <Skill name="FASTAPI" image="/framework/fastapi.png" />
            <Skill name=".NET" image="/framework/dotnet.png" />
          </div>
        </div>

        {/* DATABASE */}
        <div className="border-b border-zinc-800 pb-8">
          <h2 className="text-orange-500 font-bold text-xl mb-6 tracking-wide">DATABASE</h2>
          <div className="flex flex-wrap gap-x-8 gap-y-6">
            <Skill name="MYSQL" image="/database/mysql.png" />
            <Skill name="POSTGRESQL" image="/database/postgresql.png" />
            <Skill name="MONGODB" image="/database/mogodb.png" />
          </div>
        </div>

        {/* CLOUD & DEVOPS */}
        <div className="border-b border-zinc-800 pb-8">
          <h2 className="text-orange-500 font-bold text-xl mb-6 tracking-wide">CLOUD & DEVOPS</h2>
          <div className="flex flex-wrap gap-x-8 gap-y-6">
            <Skill name="DOCKER" image="/cloude/docker.png" />
            <Skill name="KUBERNETES" image="/cloude/kuberetes.png" />
            <Skill name="CI/CD" image="/cloude/cicd.png" />
          </div>
        </div>

        {/* TOOLS & PLATFORMS */}
        <div className="border-b border-zinc-800 pb-8">
          <h2 className="text-orange-500 font-bold text-xl mb-6 tracking-wide">TOOLS & PLATFORMS</h2>
          <div className="flex flex-wrap gap-x-8 gap-y-6">
            <Skill name="GIT" image="/tools/git.png" />
            <Skill name="GITHUB" image="/tools/github.png" />
            <Skill name="POSTMAN" image="/tools/postman.png" />
            <Skill name="LINUX" image="/tools/linux.png" />
            <Skill name="VS CODE" image="/tools/vscode.png" />
            <Skill name="INTELLIJ" image="/tools/intellijidea.png" />
          </div>
        </div>

        {/* CONCEPTS */}
        <div>
          <h2 className="text-orange-500 font-bold text-xl mb-6 tracking-wide">CONCEPTS</h2>
          <div className="flex flex-wrap gap-x-8 gap-y-6">
            <Skill name="DSA" image="/concept/dsa.jpg" />
            <Skill name="OOP" image="/concept/oop.png" />
            <Skill name="REST API" image="/concept/restapi.png" />
            <Skill name="MICROSERVICES" image="/concept/microservice.png" />
          </div>
        </div>

      </div>
      <div className='border-20  border-zinc-950'></div>
    </section>
  );
};

export default Skills;