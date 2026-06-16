import Image from 'next/image'
import React from 'react'
import { CardBody, CardContainer, CardItem } from '../ui/3d-card'
import Link from 'next/link'

const Projects = () => {
    return (
        <section id='projects' className='font-nav'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='font-logo text-9xl font-bold flex'>PROJECTS</h1>
            </div>

            <div className='border-b border-gray-800'>
                <div className='flex text-xl font-bold  flex-row items-center justify-between'>
                    <h1 className='flex font-boldtext '>INTERVIEW MATRIX:-  </h1>
                    <h2 className='flex'> INTERVIEW PREPARATION & EVALUATION SYSTEM</h2>
                    <Link href="https://interview-matrix-ashen.vercel.app" className='flex ' ><span>[ TO GO WEBSITE ]</span><svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 flex transform group-hover:translate-x-1 transition-transform"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg></Link>
                </div>
                <div className="flex font-bold  flex-wrap justify-center gap-3 mt-4">
                    <span className="px-3 py-1 rounded-full border">Next.js</span>
                    <span className="px-3 py-1 rounded-full border">flask Api</span>
                    <span className="px-3 py-1 rounded-full border">MongoDB</span>
                    <span className="px-3 py-1 rounded-full border">Node.js</span>
                    <span className="px-3 py-1 rounded-full border">Express.js</span>
                </div>
                <div className="grid md:grid-cols-2 gap-8 overflow-visible">

                    {/* Left Card */}
                    <CardContainer className="inter-var">
                        <CardBody className="inter-var relative hover:z-50">
                            <CardItem translateZ={300} className="relative hover:z-50">
                                <div className="overflow-hidden rounded-2xl shadow-2xl">
                                    <div className="flex flex-col">
                                        <Image
                                            src="/project/interview1.png"
                                            width={600}
                                            height={400}
                                            alt="Interview 1"
                                            className="w-full h-auto"
                                        />
                                        <Image
                                            src="/project/interview2.png"
                                            width={600}
                                            height={400}
                                            alt="Interview 2"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </CardItem>
                        </CardBody>
                    </CardContainer>

                    {/* Right Card */}
                    <CardContainer className="inter-var">
                        <CardBody className="w-full max-w-md h-auto">
                            <CardItem translateZ={150}>
                                <div className="overflow-hidden rounded-2xl shadow-2xl">
                                    <div className="flex flex-col">
                                        <Image
                                            src="/project/interview3.png"
                                            width={600}
                                            height={400}
                                            alt="Interview 3"
                                            className="w-full h-auto"
                                        />
                                        <Image
                                            src="/project/interview4.png"
                                            width={600}
                                            height={400}
                                            alt="Interview 4"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                </div>
                <div className='bg-darklw text-white text-center'>
                    <p className=''>
                        Developed an AI-powered interview preparation platform using React.js, Node.js, and MongoDB, supporting <span className='text-amber-400 font-bold'>500+ </span>
                        curated questions across <span className='text-sky-400 font-bold'>10+</span> domains <span className='text-pink-400 font-bold'>(DSA, System Design, HR, etc.)</span>.
                    </p>
                    <br />
                    <p>
                        Built a <span className='text-emerald-300 font-bold
                            '>structured evaluation</span> engine that scores candidate responses on accuracy, depth, and communication,
                        providing actionable feedback in real time.
                    </p>
                    <br />
                    <p>
                        Integrated <span className='text-purple-400 font-bold'>performance analytics</span> dashboard tracking topic-wise progress, mock interview scores, and improvement trends over time.
                    </p>
                    <br />
                    <p>
                        Implemented spaced-repetition algorithm for question scheduling, improving candidate retention rates by
                        <span className='text-blue-400 font-bold'> 35%</span> in user testing.
                    </p>

                </div>
            </div>
            <br />
            <div>
                <div className='border-b border-gray-800'>
                    <div className='flex text-xl font-bold  flex-row items-center justify-between'>
                        <h1 className='flex font-boldtext '>RENTFLEET:-  </h1>
                        <h2 className='flex'> VEHICLE RENTAL MANAGEMENT SYSTEM </h2>
                        <Link href="https://rent-fleet.vercel.app" className='flex ' ><span>[ TO GO WEBSITE ]</span><svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-4 h-4 flex transform group-hover:translate-x-1 transition-transform"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg></Link>
                    </div>
                    <div className="flex font-bold  flex-wrap justify-center gap-3 mt-4">
                        <span className="px-3 py-1 rounded-full border">React.js</span>
                        <span className="px-3 py-1 rounded-full border">strip </span>
                        <span className="px-3 py-1 rounded-full border">MongoDB</span>
                        <span className="px-3 py-1 rounded-full border">Node.js</span>
                        <span className="px-3 py-1 rounded-full border">Express.js</span>
                    </div>

                    <div className="flex justify-center items-center w-full">
                        <CardContainer
                            className="inter-var w-full flex justify-center"
                            containerClassName="py-10">
                            <CardBody
                                className="
                                hover:z-50
                                w-full
                                max-w-sm
                                sm:max-w-md
                                md:max-w-2xl
                                lg:max-w-4xl
                                xl:max-w-5xl
                                h-auto
                                relative
                                ">
                                <CardItem
                                    translateZ={300}
                                    className="relative hover:z-50 w-full"
                                >
                                    <div className="overflow-hidden rounded-2xl shadow-2xl">
                                        <div className="flex flex-col">
                                            <Image
                                                src="/project/rentfleet1.png"
                                                width={1200}
                                                height={800}
                                                alt="rentfleet 1"
                                                className="w-full h-auto object-cover"
                                            />
                                            <Image
                                                src="/project/rentfleet2.png"
                                                width={1200}
                                                height={800}
                                                alt="rentfleet 2"
                                                className="w-full h-auto object-cover"
                                            />
                                        </div>
                                    </div>
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                    <div className='bg-darklw text-white text-center'>
                        <p>
                            Built a <span className='text-amber-400 font-bold'>full-stack vehicle rental management platform</span> using React.js, Node.js, and MongoDB, enabling
                            end-to-end booking, fleet tracking, and billing workflows.
                        </p>
                        <br />
                        <p>
                            Implemented real-time vehicle availability engine with Redis caching, reducing booking conflicts by <span className='font-bold text-pink-400'>90% </span> and
                            query response time by <span className='font-bold text-blue-300'>40%</span>.
                        </p>
                        <br />
                        <p>
                            Designed role-based access control (RBAC) for Admin, Agent, and Customer roles with JWT authentication,
                            securing <span className='font-blod text-red-400'>100%</span> of API endpoints.
                        </p>
                        <br />
                        <p>
                            Integrated automated invoice generation and payment processing, cutting manual billing effort by <span className='font-bold text-cyan-400'>70% </span>across
                            the rental lifecycle.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
