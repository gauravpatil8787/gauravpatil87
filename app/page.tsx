export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* NAV */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="font-semibold tracking-tight">Gaurav Patil</div>
          <nav className="hidden md:flex gap-4 text-sm text-slate-700">
            <a href="#about" className="hover:underline">About</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#education" className="hover:underline">Education</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Power Systems • Protection & Control • Smart Grids
            </h1>
            <p className="mt-4 text-slate-600">
              M.S. student at Michigan Tech focused on protection, smart grids, and
              distribution reliability. Ex-Executive Engineer at Torrent Power with hands-on 22/11 kV O&amp;M.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/Patil_GauravAmrutrao_Resume.pdf"
                className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm"
                target="_blank"
                rel="noreferrer"
              >
                ⬇ Download Resume
              </a>
              <a
                href="mailto:gpatil3@mtu.edu"
                className="inline-flex items-center rounded-full bg-slate-100 text-slate-900 px-4 py-2 text-sm border"
              >
                ✉ Email
              </a>
              <a
                href="https://www.linkedin.com/in/gaurax-patil/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full px-4 py-2 text-sm border"
              >
                in LinkedIn
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full px-4 py-2 text-sm border"
              >
                ⌂ GitHub
              </a>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
              📍 Houghton, MI, USA
            </div>
          </div>

          <div className="shadow-sm border rounded-2xl p-4 bg-white">
            <h3 className="font-semibold">Highlights</h3>
            <div className="h-px bg-slate-200 my-4" />
            <div className="flex flex-wrap gap-2 text-xs text-slate-700">
              <span className="px-2 py-1 rounded-full border">Protection &amp; Relays (SEL, ASPEN)</span>
              <span className="px-2 py-1 rounded-full border">Distribution O&amp;M • 11/22 kV</span>
              <span className="px-2 py-1 rounded-full border">Modeling &amp; Simulation (MATLAB/PSCAD)</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-8">
        <div className="border rounded-2xl p-4 bg-white">
          <h3 className="font-semibold flex items-center gap-2">About</h3>
          <div className="h-px bg-slate-200 my-4" />
          <p className="text-slate-700 leading-relaxed">
            I design, test, and implement reliable power system solutions—spanning feeder
            protection, relay settings, and DER integration. Recent work includes transformer
            differential protection with inrush/CT saturation effects, and distribution-level
            HIF detection using traveling-wave features.
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-2xl p-4 bg-white">
            <h3 className="font-semibold">Executive Engineer — Distribution O&amp;M</h3>
            <div className="text-sm text-slate-500">Torrent Power Ltd. • Jun 2022 — Jul 2024</div>
            <ul className="list-disc pl-5 mt-2 text-slate-700">
              <li>Managed 22/11 kV feeders, RMUs, and substation O&amp;M with SCADA integration.</li>
              <li>Led safety training and vendor coordination; improved restoration SLAs.</li>
              <li>Promoted within 1 year from Graduate Engineer Trainee.</li>
            </ul>
          </div>

          <div className="border rounded-2xl p-4 bg-white">
            <h3 className="font-semibold">Graduate Teaching/Grading Assistant</h3>
            <div className="text-sm text-slate-500">Michigan Technological University • 2024 — present</div>
            <ul className="list-disc pl-5 mt-2 text-slate-700">
              <li>Supported EE labs (Protection, Power Electronics, Circuits).</li>
              <li>Built test benches and evaluated lab reports &amp; TTY protection settings.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Transformer Differential Protection — SEL-787",
              summary:
                "Modeled differential protection with inrush restraint & CT saturation in ASPEN; validated pickup settings and harmonic blocking.",
              tags: ["Protection", "ASPEN", "SEL"],
            },
            {
              title: "High-Impedance Fault (HIF) Detection via Traveling Waves",
              summary:
                "Explored signal features for HIF detection on distribution feeders; compared windowing and TW-based features in MATLAB.",
              tags: ["Research", "MATLAB", "Distribution"],
            },
            {
              title: "IEEE-13 Node Feeder — DER Hosting Capacity",
              summary:
                "Assessed PV hosting with LinDistFlow approximations; voltage regulation and protection coordination scenarios.",
              tags: ["DER", "Modeling", "MATLAB"],
            },
            {
              title: "Isolation Transformer Modeling",
              summary:
                "Analyzed inrush, core saturation, and protection implications; designed test to distinguish magnetizing inrush vs fault current.",
              tags: ["Power", "Simulation"],
            },
          ].map((p) => (
            <div key={p.title} className="border rounded-2xl p-4 bg-white h-full">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-slate-700 mt-2">{p.summary}</p>
              <div className="flex flex-wrap gap-2 mt-3 text-xs text-slate-600">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-1 rounded-full border">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            "Power System Protection",
            "Distribution Planning",
            "SEL QuickSet / 751 / 787",
            "ASPEN OneLiner",
            "MATLAB / Simulink",
            "PSCAD / ATPDraw",
            "DIgSILENT PowerFactory",
            "Python",
            "SCADA & Networking Basics",
            "Arc Flash & Safety",
          ].map((s) => (
            <div key={s} className="border rounded-2xl p-4 bg-white text-sm">
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-2xl p-4 bg-white">
            <h3 className="font-semibold">M.S. in Electrical Engineering (Power Systems)</h3>
            <div className="text-sm text-slate-500">Michigan Technological University • 2024 — 2026 (expected)</div>
          </div>
          <div className="border rounded-2xl p-4 bg-white">
            <h3 className="font-semibold">B.E. in Electrical Engineering</h3>
            <div className="text-sm text-slate-500">University of Mumbai • 2018 — 2022</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
        <div className="border rounded-2xl p-4 bg-white">
          <h3 className="font-semibold">Contact</h3>
          <div className="h-px bg-slate-200 my-4" />
          <p className="text-slate-700 mb-4">
            Best way to reach me is via email. I’m open to Spring/Summer 2026 internships/co-ops and full-time roles in protection &amp; control.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:gpatil3@mtu.edu" className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm">
              ✉ gpatil3@mtu.edu
            </a>
            <a
              href="https://www.linkedin.com/in/gaurax-patil/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full px-4 py-2 text-sm border"
            >
              in LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-slate-500 py-8">
        © {new Date().getFullYear()} Gaurav Patil. Built with Next.js & Tailwind.
      </footer>
    </div>
  );
}
