export default function EngineeringInterests() {
    const interests = [
        {
        title: "System Design",
        topics: [
        "Distributed Systems",
        "Caching",
        "Load Balancers",
        "Database Scaling",
        "CAP Theorem",
        ],
        },
        {
        title: "Competitive Programming",
        topics: [
        "Binary Search",
        "Dynamic Programming",
        "Greedy",
        "Prefix Sums",
        "Problem Solving",
        ],
        },
        {
        title: "Computer Networks",
        topics: [
        "HTTP / HTTPS",
        "TCP/IP",
        "DNS",
        "Load Balancing",
        "Reverse Proxies",
        ],
        },
        {
        title: "Databases",
        topics: [
        "Query Optimization",
        "Indexing",
        "Data Modeling",
        "Transactions",
        "Replication",
        ],
        },
    ];

    const profiles = [
        {
        name: "GitHub",
        description: "Code repositories and experiments",
        link: "https://github.com/tomakazu",
        },
        {
        name: "LinkedIn",
        description: "Professional experience and networking",
        link: "https://www.linkedin.com/in/rishabh-malhotra-665362170/",
        },
        {
        name: "CodeChef",
        description: "Competitive programming practice",
        link: "https://www.codechef.com/users/mamas_boy",
        },
        {
        name: "Hackerrank",
        description: "Practicing DSA, Python and SQL",
        link: "https://www.hackerrank.com/profile/matcortnermat",
        },
        {
        name: "Naukri Code360",
        description:
        "DSA practice, currently focused on Dynamic Programming",
        link: "https://www.naukri.com/code360/profile/52a0c357-ef0a-45ad-a9f1-d82b83a04ea8",
        },
    ];

    return (
        <section id="engineering" className="bg-slate-950 text-white py-24 px-6"> 
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold mb-4"> Engineering Interests </h2>

                <p className="text-slate-400 text-lg mb-12"> Areas I actively study and explore beyond day-to-day development. </p>

                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {interests.map((interest) => (
                        <div
                        key={interest.title}
                        className="
                            rounded-3xl
                            border border-slate-800
                            bg-slate-900/60
                            backdrop-blur-lg
                            p-8
                            hover:border-cyan-500
                            transition-all
                        "
                        >
                        <h3 className="text-2xl font-semibold mb-5">
                            {interest.title}
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {interest.topics.map((topic) => (
                            <span
                                key={topic}
                                className="
                                px-4 py-2
                                rounded-full
                                bg-slate-800
                                border border-slate-700
                                text-slate-300
                                "
                            >
                                {topic}
                            </span>
                            ))}
                        </div>
                        </div>
                    ))}
                </div>

                <h2 className="text-5xl font-bold mb-4"> Public Profiles </h2>

                <p className="text-slate-400 text-lg mb-12"> Platforms where I build, learn and practice. </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {profiles.map((profile) => (
                        <a
                        key={profile.name}
                        href={profile.link}
                        target="_blank"
                        rel="noreferrer"
                        className="
                            block
                            rounded-3xl
                            border border-slate-800
                            bg-slate-900/60
                            backdrop-blur-lg
                            p-6
                            hover:border-cyan-500
                            hover:-translate-y-1
                            transition-all
                        "
                        >
                        <h3 className="text-xl font-semibold mb-2">
                            {profile.name}
                        </h3>

                        <p className="text-slate-400">
                            {profile.description}
                        </p>
                        </a>
                    ))}
                </div>

                <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
                    <h3 className="text-2xl font-semibold mb-4"> Current Focus </h3>
                    <div className="flex flex-wrap gap-3">
                        {[
                        "GATE 2027",
                        "System Design",
                        "Dynamic Programming",
                        "Competitive Programming",
                        "Japanese",
                        "German",
                        ].map((item) => (
                        <span
                            key={item}
                            className="
                            px-4 py-2
                            rounded-full
                            bg-cyan-500/10
                            border border-cyan-500/30
                            text-cyan-300
                            "
                        >
                            {item}
                        </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}