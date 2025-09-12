import { Link, NavLink } from "react-router";
import { Menu, Search, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import logoIcon from "@/assets/icons/logo.svg";
import { useState } from "react";

const navLinks: { name: string; link: string }[] = [
  { name: "Home", link: "/" },
  { name: "Favorite", link: "favorite" },
  { name: "Compare", link: "compare" },
  { name: "Maps", link: "maps" },
];

const NavBar = () => {
  const isLoggedIn: boolean = false;
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleMenuHandler() {
    setIsNavOpen((prev) => !prev);
  }

  return (
    <header className="flex py-2 lg:my-6 mb-12 px-4 justify-between m-auto items-center w-full max-w-[1272px] ">
      <Link className="flex flex-col gap-2 justify-center" to="/">
        <img className="w-11 m-auto" src={logoIcon} alt="Safarni logo" />
        <span className="text-blue-700 text-lg font-semibold">Safarni</span>
      </Link>

      <nav
        className={
          isNavOpen
            ? "absolute right-0 top-28 translate-x-0 lg:translate-0 transition duration-300 ease-in-out lg:static lg:bg-white bg-gray-50  px-12 py-6 m-auto z-10 rounded-lg lg:p-0"
            : "translate-x-full right-0 top-28 lg:p-0 transition lg:translate-0 rounded-lg duration-300 ease-in-out absolute lg:static lg:bg-white bg-gray-50 px-12 py-6 z-10"
        }
      >
        <ul className="flex flex-col gap-12 lg:flex-row lg:gap-14 lg:mt-0">
          {navLinks.map((linkObj) => (
            <li key={linkObj.name} className="font-medium text-lg lg:text-2xl">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-700" : "text-gray-900"
                }
                to={linkObj.link}
              >
                {linkObj.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex gap-10 items-center">
        <Link to="/search">
          <Search className="h-[30px] w-[30px]" />
        </Link>
        <Link to="/filter">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.4375 15.9375L25.3125 15.9375C25.8303 15.9375 26.25 15.5178 26.25 15C26.25 14.4822 25.8303 14.0625 25.3125 14.0625L23.4375 14.0625C22.9197 14.0625 22.5 14.4823 22.5 15C22.5 15.5178 22.9197 15.9375 23.4375 15.9375Z"
              fill="#4B5563"
            />
            <path
              d="M15 7.5C15 6.98223 15.4197 6.5625 15.9375 6.5625L25.3125 6.56252C25.8303 6.56252 26.25 6.98225 26.25 7.50002C26.25 8.01779 25.8303 8.43752 25.3125 8.43752L15.9375 8.4375C15.4197 8.4375 15 8.01777 15 7.5Z"
              fill="#4B5563"
            />
            <path
              d="M15 22.5C15 21.9822 15.4197 21.5625 15.9375 21.5625L25.3125 21.5625C25.8303 21.5625 26.25 21.9823 26.25 22.5C26.25 23.0178 25.8303 23.4375 25.3125 23.4375L15.9375 23.4375C15.4197 23.4375 15 23.0178 15 22.5Z"
              fill="#4B5563"
            />
            <path
              d="M4.68751 8.43752L6.56251 8.4375C7.08028 8.43749 7.50001 8.01776 7.5 7.49999C7.49999 6.98222 7.08026 6.56249 6.56249 6.5625L4.68749 6.56252C4.16973 6.56252 3.75 6.98226 3.75 7.50003C3.75001 8.01779 4.16974 8.43752 4.68751 8.43752Z"
              fill="#4B5563"
            />
            <path
              d="M6.56251 23.4375L4.68751 23.4375C4.16974 23.4375 3.75001 23.0178 3.75 22.5C3.74999 21.9823 4.16972 21.5625 4.68749 21.5625L6.56249 21.5625C7.08026 21.5625 7.49999 21.9822 7.5 22.5C7.50001 23.0178 7.08028 23.4375 6.56251 23.4375Z"
              fill="#4B5563"
            />
            <path
              d="M3.75 15C3.75 14.4822 4.16973 14.0625 4.6875 14.0625H14.0625C14.5803 14.0625 15 14.4822 15 15C15 15.5178 14.5803 15.9375 14.0625 15.9375H4.6875C4.16973 15.9375 3.75 15.5178 3.75 15Z"
              fill="#4B5563"
            />
            <path
              d="M11.25 4.6875C9.6967 4.6875 8.4375 5.9467 8.4375 7.5C8.4375 9.0533 9.6967 10.3125 11.25 10.3125C12.8033 10.3125 14.0625 9.0533 14.0625 7.5C14.0625 5.9467 12.8033 4.6875 11.25 4.6875Z"
              fill="#4B5563"
            />
            <path
              d="M15.9375 15C15.9375 13.4467 17.1967 12.1875 18.75 12.1875C20.3033 12.1875 21.5625 13.4467 21.5625 15C21.5625 16.5533 20.3033 17.8125 18.75 17.8125C17.1967 17.8125 15.9375 16.5533 15.9375 15Z"
              fill="#4B5563"
            />
            <path
              d="M11.25 19.6875C9.6967 19.6875 8.4375 20.9467 8.4375 22.5C8.4375 24.0533 9.6967 25.3125 11.25 25.3125C12.8033 25.3125 14.0625 24.0533 14.0625 22.5C14.0625 20.9467 12.8033 19.6875 11.25 19.6875Z"
              fill="#4B5563"
            />
          </svg>
        </Link>
        <Link to={isLoggedIn ? "/profile" : "/welcome"}>
          {isLoggedIn ? (
            "/profile"
          ) : (
            <Avatar className="size-10">
              <AvatarImage
                src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png"
                alt="Avatar"
              />
              <AvatarFallback className="text-xs">U</AvatarFallback>
            </Avatar>
          )}
        </Link>
      </div>

      <button className="lg:hidden p-2" onClick={toggleMenuHandler}>
        {isNavOpen ? (
          <X className="w-10 h-10" />
        ) : (
          <Menu className="w-10 h-10" />
        )}
      </button>
    </header>
  );
};

export default NavBar;
