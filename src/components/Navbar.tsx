import {useState} from "react";
import {FiMenu, FiX} from "react-icons/fi";
import {NavLink} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navlinks = [
    {title: "Home", href: "/"},
    {title: "Curriculum", href: "/curriculum"},
    {title: "Our Coaches", href: "/Coaches"},
  ];

  return (
    <header className="flex items-center justify-between lg:justify-around py-4 px-4 sm:px-10 bg-(--surface)">
      <div className="logo flex gap-4 items-center justify-center">
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-10 h-10 sm:w-12 sm:h-12 object-cover"
        />
        <h3 className="font-bold text-lg sm:text-xl text-white hidden sm:block">
          Queen's Gambit Chess Academy
        </h3>
      </div>

      {/* Hamburger Menu Button - Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden cursor-pointer text-white text-2xl z-90"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Navigation - Desktop */}
      <nav className="hidden sm:flex justify-end gap-4">
        <ul className="flex items-center justify-center gap-6">
          {navlinks.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                className="capitalize text-gray-400 cursor-pointer hover:text-white transition-colors"
              >
                {link.title}
              </NavLink>
            </li>
          ))}
          <HashLink smooth to="/#classrooms" className="...">
            Classrooms
          </HashLink>
        </ul>
        <HashLink smooth to="/#booktrial" className="border capitalize cursor-pointer px-4 py-2 btn-queen rounded-sm text-sm font-semibold hover:bg-opacity-90 transition-all">
          book trial
        </HashLink>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="w-full absolute top-0 right-0 mx-auto sm:hidden bg-(--surface) border border-gray-700 z-50">
          <ul className="flex flex-col gap-4 p-6">
            {navlinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  className="capitalize text-gray-400 cursor-pointer hover:text-white transition-colors block"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
            <HashLink
              smooth
              to="/#classrooms"
              className="capitalize text-gray-400 cursor-pointer hover:text-white transition-colors block"
            >
              Classrooms
            </HashLink>

            <HashLink
              smooth
              to="/#booktrial"
              className="w-full border capitalize cursor-pointer px-4 py-2 btn-queen rounded-sm text-sm font-semibold hover:bg-opacity-90 transition-all"
            >
              book trial
            </HashLink>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
