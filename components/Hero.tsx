import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="max-w-4xl w-full px-6">

        <div className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800">

          {/* Terminal Header */}
          <div className="flex gap-2 p-4 border-b border-slate-800">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          {/* Main content */}
          <div className="flex flex-col lg:flex-row items-center">
            {/* Terminal Content */}
            <div className="p-8 font-mono flex-1">
              <p className="text-green-400">
                $ whoami
              </p>

              <h1 className="text-5xl font-bold mt-4">
                Rishabh Malhotra
              </h1>

              <p className="text-xl text-slate-300 mt-4">
                Software Engineer, Ruby on Rails Developer,
                and Computer Science Enthusiast
              </p>

              <p className="text-slate-400 mt-6 leading-relaxed">
                Building scalable backend systems with Ruby on Rails,
                PostgreSQL, MongoDB, Redis and Sidekiq.
              </p>

              <div className="mt-8">
                <p className="text-green-400">
                  $ current_focus
                </p>

                <ul className="mt-3 space-y-2 text-slate-300">
                  <li>• System Design</li>
                  <li>• Data Structures & Algorithms</li>
                  <li>• Japanese Language</li>
                  <li>• Artificial Intelligence / Machine Learning</li>
                </ul>
              </div>
            </div>

            {/* Profile Image */}
            <div className="p-8 flex justify-center">
              <Image
                src="/images/rishabh_pic_1.jpeg"
                alt="Rishabh Malhotra"
                width={200}
                height={200}
                priority
                className="
                  rounded-3xl
                  object-cover
                  border
                  border-slate-700
                  shadow-2xl
                  hover:scale-105
                  transition-transform
                  duration-300
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}