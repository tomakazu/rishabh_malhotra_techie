import Image from "next/image";

export default function BeyondCode() {
  const interests = [
    "Fitness & Calisthenics",
    "Chess",
    "Sudoku",
    "Japanese Language",
    "German Language",
    "Finance",
    "Badminton",
    "History",
    "Football (Arsenal Supporter)",
    "Reading Current Affairs & Books",
  ];

  return (
    <section
      id="beyond-code"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-5xl font-bold mb-4">
          Beyond Code
        </h2>

        <p className="text-slate-400 text-lg mb-12 max-w-3xl">
          Technology is a major part of my life, but not the only one.
          Outside software engineering, I enjoy activities that challenge
          my mind, improve discipline, and help me continuously learn.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side */}
          <div>
            <div className="grid sm:grid-cols-2 gap-4">
              {interests.map((interest) => (
                <div
                  key={interest}
                  className="
                    rounded-2xl
                    border
                    border-slate-800
                    bg-slate-900/60
                    backdrop-blur-lg
                    p-5
                    hover:border-cyan-500
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  {interest}
                </div>
              ))}
            </div>

            <div
              className="
                mt-8
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/60
                backdrop-blur-lg
                p-6
              "
            >
              <p className="text-slate-300 leading-relaxed">
                Outside of software engineering, I enjoy solving chess
                positions, tackling Sudoku puzzles, following current
                affairs, learning Japanese and German, staying active
                through fitness and badminton, and keeping up with
                football. As an Arsenal supporter, I have also developed
                a remarkable tolerance for disappointment.
              </p>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center">
            <Image
              src="/images/rishabh_pic_2.jpeg"
              alt="Rishabh Malhotra"
              width={450}
              height={550}
              priority
              className="
                rounded-3xl
                object-cover
                border
                border-slate-800
                shadow-2xl
                hover:scale-105
                transition-transform
                duration-300
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
}