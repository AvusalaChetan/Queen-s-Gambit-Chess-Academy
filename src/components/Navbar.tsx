import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navlinks = [
    { title: "Home", href: "/" },
    { title: "Classrooms", href: "" },
    { title: "Curriculum", href: "/curriculum" },
    { title: "Employs", href: "/employs" },
    { title: "Contact", href: "/contact" },
  ];
  return (
    <header className="flex items-center justify-around  py-4 px-10 bg-[var(--surface)]  ">
      <div className="logo flex gap-6 items-center justify-center">
        <img src="./images/logo.png" alt="logo" className="w-12 h-12 object-cover" />
        <h3 className="font-bold text-xl text-white">Queen's Gambit Chess Academy</h3>
      </div>
     
         <nav className="flex justify-end gap-4"  >
        <ul className="flex items-center justify-center gap-4">
        {
            navlinks.map((link) => (
                <li key={link.href}>
                    <NavLink to={link.href} className="text-gray-400 cursor-pointer hover:text-white hover:underline">{link.title}</NavLink>
                </li>
            ))
        }
        </ul>
        <div className="">
          <button className="border capitalize cursor-pointer px-4 py-2 btn-queen rounded-sm text-sm  font-semibold">
            book trial
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
