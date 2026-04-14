import { UseTheme } from "../provider/ThemeProvider"

const SidebarComponent = () => {
  const { theme, toggleTheme } = UseTheme()

  const networks = [
    { name: 'LinkedIn',   path: "https://www.linkedin.com/in/izzatbek-abdusharipov/", icon: '💼', badge: 'PRO' },
    { name: 'GitHub',     path: 'https://github.com/IncridableAcuman',                 icon: '🐙' },
    { name: 'Instagram',  path: 'https://www.instagram.com/izzatbekdeveloper/',        icon: '📸' },
    { name: 'LeetCode',   path: 'https://leetcode.com/u/abdusharipovizzat03/',          icon: '⚡' },
    { name: 'Kep',        path: 'https://kep.uz/users/abdusharipovizzat03',             icon: '🌐' },
    { name: 'Telegram',   path: 'https://t.me/izzatbekdeveloper',                       icon: '✈️', section: true },
    { name: 'Medium',     path: '#',                                                    icon: '✍️', badge: 'SOON' },
    { name: 'Study',      path: 'https://urdu.uz/uz',                                  icon: '🎓' },
  ]

  const isDark = theme === 'dark'

  return (
    <div className={`relative flex flex-col h-full overflow-hidden transition-all duration-300
      ${isDark
        ? 'bg-[#12122a] border-r border-purple-900/30'
        : 'bg-linear-to-b from-slate-50 to-indigo-50/60 border-r border-indigo-100'}`}>

      {/* Purple glow overlay — dark only */}
      {isDark && (
        <div className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 200px 200px at 50% 0%, rgba(99,102,241,.15) 0%, transparent 70%)' }} />
      )}

      {/* Theme toggle */}
      <div className="relative z-10 flex justify-end p-4 pb-2">
        <button onClick={toggleTheme}
          className={`w-9 h-9 rounded-full flex items-center justify-center text-sm transition-all duration-200
            hover:rotate-12 hover:scale-110
            ${isDark
              ? 'bg-indigo-500/10 border border-purple-500/30 text-purple-300'
              : 'bg-indigo-50 border border-indigo-200 text-indigo-500'}`}>
          {isDark ? '🌙' : '☀️'}
        </button>
      </div>

      {/* Avatar */}
      <div className="relative z-10 flex flex-col items-center px-4 pb-5">
        <div className="p-0.75 rounded-full mb-3"
          style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4)',
                   boxShadow: '0 0 20px rgba(99,102,241,.4)' }}>
          <div className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold
            ${isDark ? 'bg-linear-to-br from-indigo-950 to-blue-950 text-indigo-300'
                     : 'bg-linear-to-br from-indigo-100 to-purple-100 text-indigo-600'}`}>
            IA
          </div>
        </div>

        {/* Status dot */}
        <div className="w-3 h-3 rounded-full bg-green-400 -mt-3 ml-14 mb-2 border-2
          shadow-[0_0_6px_rgba(34,197,94,.6)]"
          style={{ borderColor: isDark ? '#12122a' : '#f8f7ff' }} />

        <p className={`font-semibold text-sm ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
          Izzatbek Abdusharipov
        </p>
        <p className={`text-xs uppercase tracking-widest mt-1 font-medium
          ${isDark ? 'text-purple-400' : 'text-indigo-500'}`}>
          Software Engineer
        </p>
        <span className={`mt-2 px-3 py-1 rounded-full text-xs
          ${isDark ? 'bg-indigo-500/15 border border-indigo-500/25 text-purple-300'
                   : 'bg-indigo-50 border border-indigo-200 text-indigo-600'}`}>
          ✦ Open to work
        </span>
      </div>

      {/* Divider */}
      <div className="h-px mx-4 mb-1"
        style={{ background: isDark
          ? 'linear-gradient(90deg,transparent,rgba(139,92,246,.3),transparent)'
          : 'linear-gradient(90deg,transparent,rgba(99,102,241,.2),transparent)' }} />

      {/* Nav */}
      <nav className="relative z-10 flex-1 overflow-y-auto px-2 py-3 space-y-0.5">
        {networks.map((item, i) => (
          <div key={i}>
            {item.section && (
              <p className={`text-[9px] font-semibold uppercase tracking-[2px] px-2 pt-3 pb-1
                ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                Socials
              </p>
            )}
            <a href={item.path} target="_blank" rel="noreferrer"
              className={`group flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all duration-200
                hover:translate-x-1 text-sm
                ${isDark
                  ? 'text-slate-400 hover:text-slate-200 hover:bg-indigo-500/10'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-indigo-50'}`}>
              <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0 transition-all
                ${isDark
                  ? 'bg-white/3 group-hover:bg-indigo-500/20'
                  : 'bg-slate-100 group-hover:bg-indigo-100'}`}>
                {item.icon}
              </span>
              <span className="flex-1">{item.name}</span>
              {item.badge && (
                <span className={`text-[9px] font-bold tracking-wide px-1.5 py-0.5 rounded
                  ${isDark ? 'bg-indigo-500/20 text-indigo-400' : 'bg-indigo-100 text-indigo-600'}`}>
                  {item.badge}
                </span>
              )}
            </a>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className={`relative z-10 px-4 py-3 text-[10px] leading-relaxed
        border-t ${isDark ? 'border-purple-900/20 text-slate-600' : 'border-indigo-100 text-slate-400'}`}>
        <span className={isDark ? 'text-purple-800' : 'text-indigo-300'}>© 2025</span> Izzatbek Abdusharipov<br />
        Built with <span className={isDark ? 'text-purple-800' : 'text-indigo-300'}>React</span> &{' '}
        <span className={isDark ? 'text-purple-800' : 'text-indigo-300'}>Tailwind CSS</span>
      </div>
    </div>
  )
}

export default SidebarComponent