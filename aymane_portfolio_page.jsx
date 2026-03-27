export default function PortfolioPage() {
  const skills = {
    Backend: ["NestJS", "Node.js", "Prisma", "PostgreSQL"],
    Systems: ["C", "C++", "HTTP / Networking", "Sockets / Poll"],
    DevOps: ["Docker", "Nginx", "Redis", "ELK Stack", "Prometheus & Grafana"],
    Frontend: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    Workflow: ["Git / GitHub", "AI-assisted development"],
  };

  const projects = [
    {
      title: "TradeHub",
      subtitle: "Virtual Trading Platform",
      description:
        "A full-stack virtual trading platform where users can simulate stock trading, manage portfolios, and track performance through a backend-focused architecture.",
      features: [
        "JWT authentication",
        "Portfolio management and P&L calculation",
        "Buy / sell transaction workflows",
        "REST API design with pagination and filtering",
        "Structured logging and observability thinking",
      ],
      stack: ["NestJS", "Prisma", "PostgreSQL", "Redis", "Docker"],
      highlight: "Shows backend architecture, business logic, and system design.",
      github: "https://github.com/aymane-bit/tradehub-fintech",
    },
    {
      title: "Webserv",
      subtitle: "Custom HTTP Server in C++",
      description:
        "A custom HTTP server built from scratch in C++98, implementing core web protocol behavior and non-blocking I/O handling.",
      features: [
        "GET / POST / DELETE support",
        "Chunked transfer encoding",
        "CGI execution",
        "File upload handling",
        "Poll-based non-blocking server design",
      ],
      stack: ["C++", "Sockets", "Poll", "HTTP"],
      highlight: "Shows deep understanding of how the web works under the hood.",
      github: "https://github.com/aymane-bit/Webserv",
    },
    {
      title: "Inception",
      subtitle: "Docker Infrastructure Project",
      description:
        "A multi-container infrastructure project replicating a production-like environment with secure service orchestration.",
      features: [
        "Nginx reverse proxy with SSL",
        "WordPress + MariaDB setup",
        "Redis integration",
        "Secrets management",
        "Volume persistence and container orchestration",
      ],
      stack: ["Docker", "Nginx", "MariaDB", "WordPress", "Redis"],
      highlight: "Shows infrastructure, deployment, and DevOps fundamentals.",
      github: "https://github.com/aymane-bit/inception",
    },
    {
      title: "MediFlow",
      subtitle: "AI-Assisted Full-Stack Prototype",
      description:
        "A clinical workflow application covering reception, triage, consultation, and reporting, developed with strong AI assistance to accelerate prototyping and feature delivery.",
      features: [
        "Multi-step medical workflow",
        "AI-assisted report generation",
        "PDF reporting",
        "Real-time updates",
        "Authentication and full-stack integration",
      ],
      stack: ["NestJS", "Prisma", "React", "Vite", "Tailwind CSS"],
      highlight: "Shows efficient AI-assisted development while keeping product and technical structure in focus.",
      github: "https://github.com/aymane-bit/mediflow",
    },
  ];

  const experience = [
    {
      title: "1337 Coding School (UM6P) — Common Core",
      text: "Project-based learning at 1337 (UM6P), part of the 42 Network, focused on problem solving, algorithms, system thinking, and building from fundamentals.",
    },
    {
      title: "Competitive Admission — 1337 / UM6P",
      text: "Selected through the 1337 (UM6P) admission process, then trained in an environment centered on autonomy, peer learning, and high standards in software engineering.",
    },
    {
      title: "Hackathon Projects",
      text: "Worked on healthcare-oriented ideas combining product thinking, AI-assisted workflows, and practical feature delivery.",
    },
    {
      title: "Startup Exploration",
      text: "Exploring technical entrepreneurship through a hydroponic monitoring concept involving automation and sensor-based thinking.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-16">
        <header className="rounded-3xl border border-cyan-400/15 bg-gradient-to-br from-white/8 via-white/5 to-cyan-400/5 p-8 shadow-2xl backdrop-blur md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-slate-400">1337 (UM6P) Portfolio</p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Aymane Kajjou
              </h1>
              <p className="mt-4 text-xl text-slate-300 md:text-2xl">
                Backend Developer <span className="text-slate-500">|</span> Systems & DevOps Enthusiast
              </p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                I build scalable systems, from low-level C/C++ servers to modern full-stack applications.
                My focus is clean architecture, performance, and practical problem solving.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="rounded-3xl border border-cyan-400/15 bg-slate-900/80 p-5">
                <p className="text-sm text-slate-400">Focus</p>
                <p className="mt-2 text-lg font-semibold">Backend Engineering</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  APIs, business logic, architecture, and scalable system design.
                </p>
              </div>
              <div className="rounded-3xl border border-cyan-400/15 bg-slate-900/80 p-5">
                <p className="text-sm text-slate-400">Strength</p>
                <p className="mt-2 text-lg font-semibold">Systems Thinking</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  From HTTP internals and sockets to infrastructure and deployment workflows.
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="mt-10 space-y-10">
          <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">About Me</p>
              <h2 className="mt-3 text-2xl font-semibold">Building from fundamentals at 1337 (UM6P)</h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300 md:text-base">
                <p>
                  I am a student at 1337 Coding School (UM6P), part of the 42 Network, passionate about building real systems and understanding how things work under the hood.
                </p>
                <p>
                  My learning style is project-driven: I build applications from scratch, from low-level HTTP servers in C++ to backend systems using NestJS and PostgreSQL.
                </p>
                <p>
                  1337 at UM6P shaped the way I approach engineering: autonomy, peer learning, problem solving, and building strong technical foundations before chasing complexity.
                </p>
                <p>
                  I care about clean architecture, scalability, and practical engineering. I also explore DevOps and production-oriented tooling to better understand how software runs in real environments.
                </p>
                <p>
                  I use AI tools as accelerators when they help me move faster, while still keeping engineering judgment and technical validation at the center of my workflow.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-400/15 bg-gradient-to-br from-white/6 to-cyan-400/5 p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Skills</p>
              <h2 className="mt-3 text-2xl font-semibold">Technical stack</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                    <h3 className="text-base font-semibold">{category}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="rounded-3xl border border-cyan-400/15 bg-gradient-to-br from-white/6 via-white/5 to-cyan-400/5 p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Projects</p>
            <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h2 className="text-2xl font-semibold md:text-3xl">Selected work</h2>
              <p className="max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
                A selection of projects showing backend engineering, low-level systems knowledge, infrastructure work, and AI-assisted rapid product development.
              </p>
            </div>

            <div className="mt-8 grid gap-6 xl:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-3xl border border-cyan-400/10 bg-slate-900/80 p-6 shadow-lg transition hover:-translate-y-1 hover:border-cyan-400/30"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-2xl font-semibold">{project.title}</h3>
                      <p className="mt-1 text-sm text-slate-400">{project.subtitle}</p>
                    </div>
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                      Featured Project
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-300 md:text-base">{project.description}</p>

                  <div className="mt-6">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Key Features</h4>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-slate-300" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Stack</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-cyan-400/10 bg-white/5 p-4">
                    <p className="text-sm font-medium text-white">What it shows</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{project.highlight}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/15"
                    >
                      View on GitHub
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">How I Work</p>
              <h2 className="mt-3 text-2xl font-semibold">My approach</h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300 md:text-base">
                <p>
                  I like to understand problems deeply before building. My best work happens when architecture, logic, and clarity come before speed.
                </p>
                <p>
                  At the same time, I am comfortable using AI tools when they increase iteration speed, especially for prototyping, exploration, and accelerating implementation.
                </p>
                <p>
                  My goal is to combine strong fundamentals with modern workflows: build fast when possible, but stay capable of going deep when needed.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-400/15 bg-gradient-to-br from-white/6 to-cyan-400/5 p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Experience & Journey</p>
              <h2 className="mt-3 text-2xl font-semibold">What shaped me</h2>
              <div className="mt-6 space-y-4">
                {experience.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="rounded-3xl border border-cyan-400/15 bg-gradient-to-br from-white/6 via-white/5 to-cyan-400/5 p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Contact</p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">Let’s build something serious</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              I’m interested in backend engineering, systems-oriented work, and opportunities where I can keep learning by building real products.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <p className="text-sm text-slate-400">GitHub</p>
                <a
                  href="https://github.com/aymane-bit"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block text-base font-semibold text-white underline decoration-white/20 underline-offset-4"
                >
                  github.com/aymane-bit
                </a>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <p className="text-sm text-slate-400">Email</p>
                <a
                  href="mailto:aymanekaj2003@gmail.com"
                  className="mt-2 block text-base font-semibold text-white underline decoration-white/20 underline-offset-4"
                >
                  aymanekaj2003@gmail.com
                </a>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <p className="text-sm text-slate-400">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/aymane-kajjou/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block text-base font-semibold text-white underline decoration-white/20 underline-offset-4"
                >
                  linkedin.com/in/aymane-kajjou
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
