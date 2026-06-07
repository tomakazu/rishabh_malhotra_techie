export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-slate-800
        bg-slate-950
        text-slate-400
        py-10
        px-6
      "
    >
      <div className="max-w-6xl mx-auto">
        <div
          className="
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
          "
        >
          <div>
            <p className="font-semibold text-slate-300">
              Rishabh Malhotra
            </p>

            <p className="text-sm">
              Software Engineer • Ruby on Rails Developer
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/tomakazu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rishabh-malhotra-665362170/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:rishabhmalhotra0311@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              Email
            </a>
          </div>
        </div>

        <div
          className="
            border-t
            border-slate-800
            mt-8
            pt-8
            text-center
          "
        >
          <p>
            © {new Date().getFullYear()} Rishabh Malhotra
          </p>

          <p className="mt-2 text-sm">
            Building systems. Solving problems. Learning continuously.
          </p>
        </div>
      </div>
    </footer>
  );
}