export default function Navbar() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Engineering", href: "#engineering" },
    { name: "Beyond Code", href: "#beyond-code" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="
        fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
          flex
          items-center
          gap-6
          px-6
          py-3
          rounded-full
          border
          border-slate-800
          bg-slate-900/70
          backdrop-blur-xl
          shadow-xl
        "
      >
        <span className="font-semibold text-cyan-400">
          RM
        </span>

        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="
              text-slate-300
              hover:text-cyan-400
              transition-colors
              text-sm
            "
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}