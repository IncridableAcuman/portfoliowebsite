import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/SidebarComponent'
import { UseTheme } from '../provider/ThemeProvider'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const Layout = () => {
  const { theme, toggleTheme } = UseTheme()
  const [open, setOpen] = useState(false)
  const isDark = theme === 'dark' // sizning mavjud logikangiz

  return (
    <div className={`flex h-screen overflow-hidden transition-colors duration-300
      ${isDark ? 'bg-[#0d0d1f]' : 'bg-slate-100'}`}>

      {/* ── Mobile topbar ── */}
      <header className={`md:hidden fixed top-0 left-0 right-0 h-14 z-50 flex items-center justify-between px-4
        border-b transition-all duration-300
        ${isDark
          ? 'bg-[#12122a]/95 backdrop-blur-md border-purple-900/30'
          : 'bg-white/95 backdrop-blur-md border-indigo-100'}`}>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(true)}
            className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all
              ${isDark
                ? 'bg-indigo-500/10 border-indigo-500/25 text-indigo-300 hover:bg-indigo-500/20'
                : 'bg-indigo-50 border-indigo-200 text-indigo-500 hover:bg-indigo-100'}`}>
            <Menu size={16} />
          </button>
          <h1 className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
            Izzatbek Abdusharipov
          </h1>
        </div>
        <button
          onClick={toggleTheme}
          className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all
            ${isDark
              ? 'bg-indigo-500/10 border-indigo-500/25 text-indigo-300 hover:bg-indigo-500/20'
              : 'bg-indigo-50 border-indigo-200 text-indigo-500 hover:bg-indigo-100'}`}>
          {isDark ? <Moon size={15} /> : <Sun size={15} />}
        </button>
      </header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.aside
              key="drawer"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={`fixed top-0 left-0 z-50 w-72 h-screen md:hidden
                border-r shadow-2xl
                ${isDark
                  ? 'bg-linear-to-b from-[#12122a] to-[#1a1535] border-purple-900/30 shadow-purple-900/30'
                  : 'bg-linear-to-b from-white to-slate-50 border-indigo-100 shadow-indigo-100'}`}>
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setOpen(false)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all
                    ${isDark
                      ? 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-slate-200'
                      : 'bg-slate-100 border-slate-200 text-slate-400 hover:bg-slate-200 hover:text-slate-600'}`}>
                  <X size={14} />
                </button>
              </div>
              <Sidebar />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ── Desktop sidebar ── */}
      <aside className={`hidden md:flex flex-col w-72 shrink-0 h-screen overflow-y-auto
        border-r transition-colors duration-300
        ${isDark
          ? 'bg-linear-to-b from-[#12122a] to-[#1a1535] border-purple-900/25'
          : 'bg-linear-to-b from-white to-slate-50 border-indigo-100'}`}>
        <Sidebar />
      </aside>

      {/* ── Main content ── */}
      <main className={`flex-1 h-screen overflow-y-auto pt-14 md:pt-0 transition-colors duration-300
        ${isDark ? 'bg-[#0d0d1f]' : 'bg-slate-50'}`}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout