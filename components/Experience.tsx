const experiences = [
    {
        company: "Onendf",
        duration: "December 2025 - Present",
        role: "Founding Backend Engineer",
        tech: [
        "Ruby on Rails",
        "PostgreSQL",
        "REST APIs",
        "Sidekiq",
        ],
        achievements: [
            "Building and architecting the whole backend structure of Onendf. Onendf is a tech enabled platform which bridges the gap between people needing loans with the rightful lender",
            "Leading Devops & Backend",
            "Leading the optimization of database schema and refactoring the existing code to make application run smoother and faster",
            "Leading the integration of third party APIs from the bureau & various banks on to our platform",
            "Currently building OCR integrated with AI"
        ],
    },

    {
        company: "Healthgraph India Pvt Ltd",
        duration: "May 2022 - December 2025",
        role: "Software Engineer",
        tech: [
        "Ruby on Rails",
        "MongoDB",
        "Sidekiq",
        "Redis",
        "Elasticsearch",
        "Tailwind CSS",
        "StimulusJS",
        ],
        achievements: [
            "Built role-based access control (RBAC) features to enforce secure authorization across healthcare workflows and multiple user roles.",
            "Developed an automated comparison system that analyzed optometrist readings against doctor assessments, reducing manual review effort and improving operational efficiency.",
            "Implemented asynchronous processing pipelines using Sidekiq and Redis for computationally intensive healthcare workflows and background jobs.",
            "Integrated QR code and barcode-based tracking systems for medical investigations, improving traceability and workflow management.",
            "Designed and optimized Elasticsearch-powered search functionality to enable fast and accurate retrieval of healthcare records.",
            "Contributed to multi-tenant healthcare platform features, ensuring secure data isolation and tenant-specific workflows.",
            "Played a significant role in migrating the frontend from Bootstrap to Tailwind CSS, improving maintainability and UI consistency.",
            "Contributed to modernization efforts by migrating legacy jQuery-based functionality to StimulusJS.",
            "Worked extensively with MongoDB data modeling, query optimization, and production-scale healthcare applications.",
        ],
    },
];


export default function Experience() {
return (
    <section id="experience" className="bg-slate-950 text-white py-24 px-6"> 
        <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-4"> Experience </h2>

            <p className="text-slate-400 text-lg mb-16">
                Building production software across fintech and healthcare domains.
            </p>

            <div className="relative border-l border-slate-800 ml-4">
                {experiences.map((exp, index) => (
                    <div key={index} className="mb-16 ml-10 relative">
                    <div className="absolute -left-[52px] top-2 w-4 h-4 rounded-full bg-cyan-400" />

                    <div
                        className="
                        bg-slate-900/60
                        backdrop-blur-lg
                        border border-slate-800
                        rounded-3xl
                        p-8
                        hover:border-cyan-500
                        transition-all
                        duration-300
                    "
                    >
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-4">
                        <div>
                            <h3 className="text-2xl font-bold">
                            {exp.company}
                            </h3>

                            <p className="text-cyan-400">
                            {exp.role}
                            </p>
                        </div>

                        <span className="text-slate-400">
                            {exp.duration}
                        </span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                        {exp.tech.map((tech) => (
                            <span
                            key={tech}
                            className="
                                px-3 py-1
                                rounded-full
                                bg-slate-800
                                border border-slate-700
                                text-sm
                            "
                            >
                            {tech}
                            </span>
                        ))}
                        </div>

                        <ul className="space-y-3 text-slate-300">
                        {exp.achievements.map((item) => (
                            <li
                            key={item}
                            className="flex gap-3"
                            >
                            <span className="text-cyan-400">
                                ▹
                            </span>
                            <span>{item}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
}