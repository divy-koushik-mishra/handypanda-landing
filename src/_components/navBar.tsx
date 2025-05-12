import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navMenuItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Get in touch",
      href: "#contact",
    }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white w-full shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold">
              <span className="text-neutral-content">Handy</span>
              <span className="text-secondary">Panda</span>
            </h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navMenuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-neutral-content hover:text-secondary px-2 py-1 text-lg font-medium transition duration-150 ease-in-out
                    ${item.label === "Get in touch" ? "text-white bg-secondary hover:bg-secondary/90 hover:text-white px-4 py-2 rounded-md" : ""}
                  `}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-content hover:text-secondary focus:outline-none"
              aria-expanded="false"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navMenuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-lg font-medium text-neutral-content hover:text-secondary hover:bg-gray-50
                  ${item.label === "Get in touch" ? "bg-secondary text-white hover:bg-secondary/90 hover:text-white" : ""}
                `}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;