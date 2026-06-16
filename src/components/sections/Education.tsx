import { BorderBeam } from "../ui/border-beam"

const Education = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-16 text-slate-900">
      {/* Section Heading */}
      <div className="flex items-center justify-center mb-16">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-nav tracking-wider text-center">
          EDUCATION
        </h1>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        
        {/* Card 1: MCA */}
        <div className="relative overflow-hidden rounded-2xl  p-6 sm:p-8 flex flex-col justify-between shadow-xs group transition-colors duration-300">
          {/* Animated Border Beam - Vibrant accents optimized for white layers */}
          <BorderBeam size={200} duration={8} borderWidth={1.5} colorFrom="#f97316" colorTo="#3b82f6" />
          
          <div>
            <h2 className="font-nav font-bold text-xl sm:text-2xl tracking-wide mb-2">
              MASTER OF COMPUTER APPLICATION
            </h2>
            <h3 className="text-sm sm:text-base font-semibold  mb-6 leading-relaxed">
              UNIVERSITY OF ALLAHABAD, PRAYAGRAJ, UTTAR PRADESH
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 ">
            <p className="text-xs sm:text-sm font-bold tracking-wide uppercase">
              SESSION: <span className=" font-mono font-semibold ml-1">2024-2026</span>
            </p>
            <h4 className="text-xs sm:text-sm font-bold tracking-wide uppercase flex items-center">
              CGPA: <span className="text-white font-mono text-base font-bold bg-slate-900 px-2 py-1 rounded-md border  ml-1">8.1 / 10</span>
            </h4>
          </div>
        </div>

        {/* Card 2: BSc */}
        <div className="relative overflow-hidden rounded-2xl    p-6 sm:p-8 flex flex-col justify-between shadow-xs group transition-colors duration-300">
          {/* Animated Border Beam - Reverse rotation loop */}
          <BorderBeam size={200} duration={8} borderWidth={1.5} colorFrom="#f97316" colorTo="#3b82f6" reverse />
          
          <div>
            <h2 className="font-nav font-bold text-xl sm:text-2xl tracking-wide mb-2">
              BACHELOR OF SCIENCE
            </h2>
            <h3 className="text-sm sm:text-base font-semibold  mb-6 leading-relaxed">
              PURVANCHAL UNIVERSITY / T. D. COLLEGE, JAUNPUR, UTTAR PRADESH
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4  ">
            <p className="text-xs sm:text-sm font-bold tracking-wide uppercase">
              SESSION: <span className=" font-nav font-semibold ml-1">2021-2024</span>
            </p>
            <h4 className="text-xs sm:text-sm font-bold tracking-wide uppercase  flex items-center">
              CGPA: <span className="font-nav text-base font-bold bg-slate-900 px-2 py-1 rounded-md text-white ml-1">7.71 / 10</span>
            </h4>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Education