export default function Home() {
  // ---------- DATA ----------
  const EXPERTISE = [
    "Power Systems",
    "Protection & Relays (SEL-751/787)",
    "Smart Grids",
    "Distribution O&M (22/11 kV)",
    "Fault Analysis & Troubleshooting",
    "SCADA / Control Center Ops",
    "MATLAB, ASPEN OneLiner",
    "AcSELerator QuickSet",
    "AutoCAD, SAP BI, MS Office",
  ];

  const PROJECTS = [
    {
      title: "Radial Feeder Reverse Power Flow Protection - SEL-751",
      summary:
        "Configured and tested reverse power flow protection with SEL-751: logic programming, simulation, field-style testing, and fault analysis for reliable feeder operation.",
    },
    {
      title: "Transformer Differential Protection - Inrush and CT Saturation",
      summary:
        "Modeled differential protection with harmonic restraint, simulated CT saturation, and analyzed waveforms to choose secure/sensitive pickup settings.",
    },
    {
      title: "Prepaid Energy Meter using GSM",
      summary:
        "Built a microcontroller based prepaid meter with GSM for live consumption, SMS alerts, and balance deduction logic; validated hardware behavior.",
    },
    {
      title: "Isolation Transformer - Design and Tests",
      summary:
        "Core selection, winding calculations, assembly, test plan, and performance under load; contrasted magnetizing inrush vs fault current.",
    },
  ];

  const EXPERIENCE = [
    {
      role: "Research Assistant",
      org: "Michigan Technological University",
      time: "Aug 2025 - Present",
      bullets: [
        "Consumers Energy project on distribution fault detection using traveling wave techniques.",
        "Assist PhD research: simulations, data analysis, and validation to improve fault location accuracy.",
      ],
    },
    {
      role: "Teaching Assistant",
      org: "Michigan Technological University",
      time: "Jan 2025 - Present",
      bullets: [
        "EE4228 Power Electronics lab instruction and support.",
        "Graded EE2112 Electrical Circuits II and EE2190 Introduction to Photonics (Spring 2025).",
      ],
    },
    {
      role: "Executive Engineer",
      org: "Torrent Power Ltd., Bhiwandi",
      time: "Jun 2023 - Jul 2024",
      bullets: [
        "Supervised 22 kV and 11 kV feeders, substations, RMUs, and switchgear O&M; led control center operations.",
        "Zero accident record; coordinated SCADA integration and HV protection testing.",
      ],
    },
    {
      role: "Graduate Engineer Trainee",
      org: "Torrent Power Ltd., Bhiwandi",
      time: "Jun 2022 - Jul 2023",
      bullets: [
        "Restoration and material tracking, reconciliation, vendor billing.",
        "Led earthing system improvement project implemented in operations.",
      ],
    },
    {
      role: "Electrical Engineering Intern",
      org: "TATA Power Ltd., Kalyan",
      time: "Dec 2021 - Jan 2022",
      bullets: [
        "Hands on exposure at a 110/22 kV receiving station: transformers, SCADA, AIS/GIS bays.",
        "HV testing and troubleshooting of substation assets.",
      ],
    },
    {
      role: "Project Intern",
      org: "Ravi Enterprises, Thane",
      time: "Dec 2018 - Jan 2019",
      bullets: [
        "Project management and research on transformer design and manufacturing practices.",
        "Worked on the Isolation Transformer project execution and documentation.",
      ],
    },
    {
      role: "Distribution Intern",
      org: "Maharashtra State Electricity Distribution Co. Ltd. (MSEDCL), Kalyan",
      time: "May 2018 - Jun 2018",
      bullets: [
        "Overview of distribution network operations and consumer service processes.",
        "Observed field and office workflows for outage restoration and safety.",
      ],
    },
  ];

  const SKILLS_TOOLS = [
    "Power Systems",
    "System Design and Optimization",
    "Control Center Operations",
    "Project Management",
    "Substation Management",
    "Fault Analysis and Troubleshooting",
    "Switchgear Protection and Testing",
  ];

  const SKILLS_SOFTWARE = [
    "MATLAB",
    "ASPEN OneLiner",
    "AcSELerator QuickSet",
    "AutoCAD",
    "SAP BI",
    "MS Office",
  ];

  const EDUCATION = [
    {
      degree:
        "M.S. in Electrical and Computer Engineering (Concentration: Power System Protection), GPA 3.85",
      school: "Michigan Technological University, Michigan, USA",
      time: "Expected Fall 2026",
    },
    {
      degree: "B.E. in Electrical Engineering, CGPA 8.71/10",
      school: "Smt. Indira Gandhi College of Engineering, Navi Mumbai, India",
      time: "2019 - 2022",
    },
    {
      degree: "Diploma in Electrical Power System, 75.33%",
      school: "Vidya Prasarak Mandal's Polytechnic, Thane, India",
      time: "2016 - 2019",
    },
  ];

  const CERTS = [
    {
      name: "CPR/AED, First Aid and Bloodborne Pathogens Combo",
      org: "American Red Cross",
      time: "Issued May 2025 - Expires May 2027",
    },
    {
      name: "Wilderness/Remote Location First Aid",
      org: "American Red Cross",
      time: "Issued May 2025 - Expired May 2025",
    },
    {
      name: "Solar Energy Basics",
      org: "The State University of New York",
      time: "Issued Mar 2022",
    },
  ];

  // ---------- UI ----------
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* TOP NAV (no duplicate name) */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-center">
          <nav className="flex gap-4 text-sm text-slate-700">
            <a href="#about" className="hover:underline">About</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#education" className="hover:underline">Education</a>
            <a href="#certs" className="hover:underline">Certifications</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-6">
        <div>
          {/* Big single name */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Gaurav Patil
          </h1>

          {/* Tagline */}
          <p className="mt-2 text-xl md:text-2xl text-slate-700">
            Power Systems • Protection & Control • Smart Grids
          </p>

          {/* Expertise chips */}
          <div className="mt-4 flex flex-wrap gap-2">
            {EXPERTISE.map((e) => (
              <span
                key={e}
                className="px-3 py-1 rounded-full border text-xs text-slate-700 bg-white"
              >
                {e}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/Patil_GauravAmrutrao_Resume.pdf"
              className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm"
              target="_blank"
              rel="noreferrer"
            >
              ⬇ Download Resume
            </a>

            {/* Email fixed - plain mailto link */}
            <a
              href="mailto:gpatil3@mtu.edu"
              className="inline-flex items-center rounded-full bg-slate-100 text-slate-900 px-4 py-2 text-sm border"
            >
              ✉ Email
            </a>

            <a
              href="https://www.linkedin.com/in/gauravpatil87/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full px-4 py-2 text-sm border"
            >
              in LinkedIn
            </a>
          </div>

          <div className="mt-3 text-sm text-slate-500">📍 Houghton, MI, USA</div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-6">
        <div className="border rounded-2xl p-5 bg-white">
          <h3 className="font-semibold text-lg">About</h3>
          <div className="h-px bg-slate-200 my-3" />
          <p className="text-slate-700 leading-relaxed">
            Master's student in Electrical Engineering at Michigan Technological University with
            expertise in power systems, smart grids, and renewable energy. I aim to apply academic and
            hands on experience in high tension networks to deliver innovative solutions in the energy
            sector, leveraging technical and leadership skills while continuously expanding my potential
            in professional environments.
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-6xl px-4 py-6">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {EXPERIENCE.map((job) => (
            <div key={job.role + job.time} className="border rounded-2xl p-5 bg-white">
              <h3 className="font-semibold">{job.role}</h3>
              <div className="text-sm text-slate-500">
                {job.org} • {job.time}
              </div>
              <ul className="list-disc pl-5 mt-2 text-slate-700">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-6">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((p) => (
            <div key={p.title} className="border rounded-2xl p-5 bg-white">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-slate-700 mt-2">{p.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-6">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-2xl p-5 bg-white">
            <h4 className="font-semibold mb-2">Tools</h4>
            <ul className="list-disc pl-5 text-slate-700">
              {SKILLS_TOOLS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="border rounded-2xl p-5 bg-white">
            <h4 className="font-semibold mb-2">Software</h4>
            <ul className="list-disc pl-5 text-slate-700">
              {SKILLS_SOFTWARE.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="mx-auto max-w-6xl px-4 py-6">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {EDUCATION.map((ed) => (
            <div key={ed.degree} className="border rounded-2xl p-5 bg-white">
              <h3 className="font-semibold">{ed.degree}</h3>
              <div className="text-sm text-slate-500">
                {ed.school} • {ed.time}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certs" className="mx-auto max-w-6xl px-4 py-6">
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {CERTS.map((c) => (
            <div key={c.name} className="border rounded-2xl p-5 bg-white">
              <h3 className="font-semibold">{c.name}</h3>
              <div className="text-sm text-slate-500">{c.org}</div>
              <div className="text-sm text-slate-500">{c.time}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-10">
        <div className="border rounded-2xl p-5 bg-white">
          <h3 className="font-semibold">Contact</h3>
          <div className="h-px bg-slate-200 my-3" />
          <p className="text-slate-700 mb-4">
            Best way to reach me is via email. I am open to internships/co-ops and full time roles in protection and control.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:gpatil3@mtu.edu?subject=Hello%20Gaurav&body=Hi%20Gaurav,"
  target="_self"
  rel="noopener noreferrer"
  className="inline-flex items-center rounded-full bg-slate-100 text-slate-900 px-4 py-2 text-sm border hover:bg-slate-200 transition-colors"
>
  ✉ Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/gauravpatil87/"
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
        © {new Date().getFullYear()} Gaurav Patil. Built with Next.js and Tailwind.
      </footer>
    </div>
  );
}
