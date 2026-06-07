export default function Skills() {
  const skillGroups = [
    {
      title: "Backend",
      skills: [
        "Ruby",
        "Ruby on Rails",
        "MongoDB",
        "PostgreSQL",
        "Sidekiq",
        "REST APIs",
        "C++",
        "Redis",
        "Java"
      ],
    },
    {
      title: "Frontend",
      skills: [
        "JavaScript",
        "Tailwind CSS",
        "StimulusJS",
        "Flutter",
        "HTML",
        "CSS",
        "jQuery"
      ],
    },
    {
      title: "Computer Science & Problem Solving",
      skills: [
        "Data Structures",
        "Algorithms",
        "System Design",
        "OOP",
        "Database Design",
        "Computer Networks",
        "Competetive Programming",
        "Operating System"
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        "Git",
        "GitHub",
        "Linux",
        "Docker",
        "VS Code",
        "DigitalOcean"
      ],
    },
  ];

  return (
    <section id="skills" className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-4">
          Skills
        </h2>

        <p className="text-slate-400 mb-12 text-lg">
          Technologies and concepts I use to build
          scalable software.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="
                rounded-3xl
                border border-slate-800
                bg-slate-900/60
                backdrop-blur-lg
                p-8
                hover:border-cyan-500
                transition-all
                duration-300
              "
            >
              <h3 className="text-2xl font-semibold mb-6">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4 py-2
                      rounded-full
                      bg-slate-800
                      text-slate-200
                      border border-slate-700
                      hover:border-cyan-400
                      hover:text-cyan-300
                      transition-all
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}