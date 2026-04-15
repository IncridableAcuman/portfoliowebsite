import { motion } from 'framer-motion'
import { UseTheme } from '../provider/ThemeProvider'
import { cardVariants, containersVariants } from '../constants/motion'

const skillsData = [
  { icon: '⚡', title: 'Algorithms & Problem Solving', tags: ['Dynamic Programming','Graph Theory','Greedy','Sorting','Substring'] },
  { icon: '🗄️', title: 'Databases', tags: ['PostgreSQL','MySQL','MongoDB','Redis','SQLite','GCP'] },
  { icon: '🚀', title: 'DevOps & Infrastructure', tags: ['Docker','Nginx','Linux','Gunicorn','Uvicorn'] },
  { icon: '🔧', title: 'Frameworks & Libraries', tags: ['Node.js','Express','NestJS','Spring Boot','React','Next.js'] },
  { icon: '💻', title: 'Programming Languages', tags: ['JavaScript','Java','Python','C++'] },
  { icon: '🛠️', title: 'Tools & Technologies', tags: ['Git','Postman','VS Code','IntelliJ','PgAdmin4'] },
]

const experienceData = [
  {
    title: 'Freelance Frontend Developer',
    date: 'Oct 2025 — Present',
    desc: 'Built and deployed RESTful APIs for scalable web platforms using Go REST Framework and React, integrating third-party services for advanced functionality.',
    achievements: [
      'Go + React full-stack project with Google Maps API integration',
      'Integrated Materials UI into Django projects',
      'Version control and CI/CD pipelines via GitHub',
      'Improved backend performance through query optimization',
      'Designed modular project architectures',
    ]
  },
  {
    title: 'Frontend Developer',
    date: 'Oct 2025 — Present',
    desc: 'Built and deployed RESTful APIs using MERN Stack and Java Spring Boot, integrating third-party services for advanced web functionality.',
    achievements: [
      'Full-stack Java Spring Boot + React with API integration',
      'Integrated Shadcn UI into Java projects',
      'Containerization with Docker',
      'Database query optimization for improved performance',
      'Designed modular project architectures',
    ]
  }
]

const projectsData = [
  {
    title: 'Full Stack Web App — Spring Boot + React',
    desc: 'Secure authentication, scalable REST APIs, role-based access control, and clean responsive UI.',
    tech: ['Java','Spring Boot','Spring Security','JWT','PostgreSQL','React','Docker'],
  },
  {
    title: 'MERN Platform with Google Integrations',
    desc: 'Full-stack MERN app with secure auth, Google Maps location services, CKEditor rich text, and modern UI.',
    tech: ['MongoDB','Express.js','React','Node.js','JWT','Google Maps','CKEditor 5'],
  }
]

const Section = ({ children, theme }) => (
  <motion.div
    variants={containersVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    className={`rounded-2xl p-7 mb-6 border transition-all duration-300
      ${theme === 'light'
        ? 'bg-white border-indigo-100 hover:border-indigo-300 shadow-sm hover:shadow-md'
        : 'bg-white/3 border-white/6 hover:border-indigo-500/30'}`}>
    {children}
  </motion.div>
)

const SectionTitle = ({ children, theme }) => (
  <h2 className={`text-2xl font-bold mb-5
    ${theme === 'light'
      ? 'bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent'
      : 'bg-linear-to-r from-indigo-300 to-violet-400 bg-clip-text text-transparent'}`}>
    {children}
  </h2>
)

const Dashboard = () => {
  const { theme } = UseTheme()
  const isDark = theme === 'dark' // your inverted logic

  return (
    <div className={`min-h-screen p-8 transition-colors duration-300
      ${isDark ? 'bg-[#0d0d1f] text-slate-200' : 'bg-slate-50 text-slate-800'}`}>

      {/* Professional Summary */}
      <Section theme={theme}>
        <SectionTitle theme={theme}>Professional Summary</SectionTitle>
        <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          Backend developer with a strong focus on software engineering. Specializes in MERN stack and
          Java (Spring Boot), with hands-on experience in databases, authentication, API integrations,
          and real-time systems. Currently exploring Docker, microservices, and scalable architectures
          to build efficient, secure, and production-ready backends.
        </p>
      </Section>

      {/* Technical Skills */}
      <Section theme={theme}>
        <SectionTitle theme={theme}>Technical Skills</SectionTitle>
        <motion.div
          variants={containersVariants}
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skillsData.map((skill, i) => (
            <motion.div key={i} variants={cardVariants}
              whileHover={{ y: -3, scale: 1.01 }}
              className={`rounded-xl p-4 border transition-all duration-200
                ${isDark
                  ? 'bg-indigo-500/6 border-indigo-500/20 hover:bg-indigo-500/10 hover:border-indigo-500/35'
                  : 'bg-indigo-50/60 border-indigo-100 hover:bg-indigo-50 hover:border-indigo-300'}`}>
              <div className="text-xl mb-2">{skill.icon}</div>
              <h3 className={`text-xs font-600 mb-2 ${isDark ? 'text-indigo-300' : 'text-indigo-600'}`}>{skill.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {skill.tags.map((t, j) => (
                  <span key={j} className={`text-[10px] px-2 py-0.5 rounded-full font-medium border
                    ${isDark
                      ? 'bg-violet-500/10 text-violet-300 border-violet-500/20'
                      : 'bg-indigo-100/80 text-indigo-700 border-indigo-200'}`}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Experience */}
      <Section theme={theme}>
        <SectionTitle theme={theme}>Professional Experience</SectionTitle>
        <div className="space-y-4">
          {experienceData.map((exp, i) => (
            <motion.div key={i} variants={cardVariants}
              className={`rounded-xl p-5 border transition-all duration-200
                ${isDark
                  ? 'bg-white/2 border-white/5 hover:bg-indigo-500/[.07] hover:border-indigo-500/25'
                  : 'bg-slate-50 border-slate-200 hover:bg-indigo-50/40 hover:border-indigo-200'}`}>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <h3 className={`text-base font-semibold ${isDark ? 'text-indigo-300' : 'text-indigo-600'}`}>{exp.title}</h3>
                <span className={`text-[11px] px-3 py-1 rounded-full font-medium
                  ${isDark ? 'bg-indigo-500/15 text-indigo-400' : 'bg-indigo-100 text-indigo-700'}`}>
                  {exp.date}
                </span>
              </div>
              <p className={`text-xs leading-relaxed mb-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{exp.desc}</p>
              <p className={`text-[10px] font-semibold uppercase tracking-widest mb-2 ${isDark ? 'text-indigo-500' : 'text-indigo-400'}`}>Key Achievements</p>
              <ul className={`text-xs space-y-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {exp.achievements.map((a, j) => (
                  <li key={j} className="flex items-start gap-1.5">
                    <span className="text-indigo-500 font-bold mt-0.5">›</span>{a}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section theme={theme}>
        <SectionTitle theme={theme}>Key Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectsData.map((proj, i) => (
            <motion.div key={i} variants={cardVariants}
              whileHover={{ y: -3 }}
              className={`rounded-xl p-5 border transition-all duration-200
                ${isDark
                  ? 'bg-indigo-500/4 border-indigo-500/15 hover:bg-indigo-500/10 hover:border-indigo-500/30'
                  : 'bg-slate-50 border-slate-200 hover:bg-indigo-50/40 hover:border-indigo-200'}`}>
              <h3 className={`text-sm font-semibold mb-2 leading-snug ${isDark ? 'text-indigo-300' : 'text-indigo-600'}`}>{proj.title}</h3>
              <p className={`text-xs leading-relaxed mb-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{proj.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {proj.tech.map((t, j) => (
                  <span key={j} className={`text-[10px] px-2 py-0.5 rounded font-medium border
                    ${isDark ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20' : 'bg-cyan-50 text-cyan-700 border-cyan-200'}`}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section theme={theme}>
        <SectionTitle theme={theme}>Education</SectionTitle>
        <motion.div variants={cardVariants}
          className={`rounded-xl p-5 border transition-all duration-200
            ${isDark
              ? 'bg-indigo-500/4 border-indigo-500/15 hover:bg-indigo-500/09 hover:border-indigo-500/25'
              : 'bg-slate-50 border-slate-200 hover:bg-indigo-50/40 hover:border-indigo-200'}`}>
          <div className="flex flex-wrap justify-between gap-3 mb-2">
            <div>
              <h3 className={`text-base font-semibold ${isDark ? 'text-indigo-300' : 'text-indigo-600'}`}>
                Bachelor's in Software Engineering
              </h3>
              <p className={`text-xs mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                TUIT — Urgench Branch, Uzbekistan
              </p>
            </div>
            <span className={`text-[11px] px-3 py-1 rounded-full font-medium h-fit
              ${isDark ? 'bg-indigo-500/15 text-indigo-400' : 'bg-indigo-100 text-indigo-700'}`}>
              Sep 2022 — Present
            </span>
          </div>
          <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            3rd-year student focused on software engineering, algorithms, and system design. Actively participates in programming contests and hackathons.
          </p>
        </motion.div>
      </Section>

      {/* Additional Achievements */}
      <Section theme={theme}>
        <SectionTitle theme={theme}>Additional Achievements</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { num: '1K', label: 'Req/s Performance', desc: 'Scaled a Django server to handle 1,000 requests/second via database caching, Nginx load balancing, and Gunicorn optimization.' },
            { num: '60+', label: 'LeetCode Problems', desc: 'Proficient in dynamic programming, graph theory, and greedy algorithms with optimal time and space complexities.' }
          ].map((a, i) => (
            <motion.div key={i} variants={cardVariants}
              whileHover={{ y: -2 }}
              className={`rounded-xl p-5 border transition-all duration-200
                ${isDark
                  ? 'bg-linear-to-br from-indigo-500/8 to-violet-500/5 border-violet-500/20 hover:border-violet-500/35'
                  : 'bg-linear-to-br from-indigo-50 to-violet-50 border-indigo-200 hover:border-indigo-300'}`}>
              <div className={`text-3xl font-bold leading-none ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>{a.num}</div>
              <div className={`text-sm font-semibold my-2 ${isDark ? 'text-indigo-300' : 'text-indigo-700'}`}>{a.label}</div>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  )
}

export default Dashboard