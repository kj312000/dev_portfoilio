import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ` +
    (isActive ? "text-white bg-purple-600" : "text-gray-400 hover:text-white hover:bg-purple-500/40");

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-3 rounded-md text-base font-medium transition-colors duration-150 ` +
    (isActive ? "text-white bg-purple-600" : "text-gray-400 hover:text-white hover:bg-purple-500/30");

  const handleClose = () => setOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-lg border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo / Brand */}
          <div className="flex items-center gap-4">
            <Link to="/" className="text-xl font-bold text-purple-400">
              Kaustubh.dev
            </Link>
          </div>

          {/* Desktop nav (hidden on small screens) */}
          <div className="hidden md:flex md:items-center md:gap-2">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/projects" className={linkClass}>
              Projects
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            {/* <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink> */}
          </div>

          {/* Resume + Socials (collapses on small screens) */}
          <div className="hidden md:flex md:items-center md:gap-4">
                          <a
                href="https://teal-otter-9f5df1.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white text-1xl"
                aria-label="Github"
              >
                Resume
              </a>
            <a
              href="https://github.com/kj312000"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white text-xl"
              aria-label="Github"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/kaustubh-jadhav-07a430175/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-[#0A66C2] text-xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="p-2 rounded-md text-gray-200 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {open ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (full width dropdown) */}
      <div
        className={`md:hidden transition-max-height duration-300 ease-in-out overflow-hidden ${open ? "max-h-screen" : "max-h-0"
          }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-black/90 backdrop-blur-sm border-t border-white/5">
          <NavLink to="/" className={mobileLinkClass} onClick={handleClose}>
            Home
          </NavLink>
          <NavLink to="/projects" className={mobileLinkClass} onClick={handleClose}>
            Projects
          </NavLink>
          <NavLink to="/about" className={mobileLinkClass} onClick={handleClose}>
            About
          </NavLink>
          {/* <NavLink to="/contact" className={mobileLinkClass} onClick={handleClose}>
            Contact
          </NavLink> */}

          <div className="pt-2 border-t border-white/5">
            <div className="flex items-center justify-center gap-6 mt-3">
              <a
                href="https://teal-otter-9f5df1.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white text-2xl"
                aria-label="Github"
              >
                Resume
              </a>
              <a
                href="https://github.com/kj312000"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white text-2xl"
                aria-label="Github"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/kaustubh-jadhav-07a430175/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-[#0A66C2] text-2xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}