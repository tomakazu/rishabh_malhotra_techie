export default function Contact() {
    return ( 
        <section id="contact" className="py-24 px-6 bg-slate-950 text-white" >
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left Side */} 
                    <div> 
                        <h2 className="text-5xl font-bold mb-6"> Let's Build Something Interesting Together </h2> <p className="text-slate-400 text-lg leading-relaxed mb-8"> Whether it's backend engineering, Ruby on Rails, system design discussions, or simply connecting with fellow developers, feel free to reach out. </p> 
                        <div className="space-y-6">
                            <div> <h3 className="text-cyan-400 font-semibold"> Email </h3> <a href="mailto:rishabhmalhotra0311@gmail.com" className="text-slate-300 hover:text-white transition" > rishabhmalhotra0311@gmail.com </a> </div>
                            <div> <h3 className="text-cyan-400 font-semibold"> Location </h3> <p className="text-slate-300"> New Delhi, India </p> </div>
                            <div> <h3 className="text-cyan-400 font-semibold"> Open To </h3> <p className="text-slate-300"> Backend Engineering · Ruby on Rails · Remote · Hybrid Opportunities </p> </div> 
                        </div>
                        <div className="flex flex-wrap gap-4 mt-10">
                            <a href="https://github.com/tomakazu" target="_blank" rel="noopener noreferrer" className=" px-6 py-3 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all " > GitHub </a>
                            <a href="https://www.linkedin.com/in/rishabh-malhotra-665362170/" target="_blank" rel="noopener noreferrer" className=" px-6 py-3 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all " > LinkedIn </a>
                            <a href="/resume/Rishabh_Malhotra_Resume.pdf" download className=" px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-all " > Download Resume </a>
                        </div> 
                    </div>
                    {/* Right Side */} 
                    <div className="flex justify-center"> 
                        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 w-full max-w-md " > 
                            <div className="font-mono">
                                <p className="text-green-400 mb-4"> $ contact --info </p> 
                                <div className="space-y-4 text-slate-300">
                                    <div> <span className="text-cyan-400"> Name: </span>{" "} Rishabh Malhotra </div>
                                    <div> <span className="text-cyan-400"> Role: </span>{" "} Senior Software Engineer </div>
                                    <div> <span className="text-cyan-400"> Primary Stack: </span>{" "} Ruby on Rails </div>
                                    <div> <span className="text-cyan-400"> Interests: </span>{" "} System Design, DSA, Languages, Fitness </div>
                                    <div> <span className="text-cyan-400"> Football: </span>{" "} Arsenal supporter ⚽ </div>
                                    <div> <span className="text-cyan-400"> Status: </span>{" "} Available for opportunities & collaborations </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}