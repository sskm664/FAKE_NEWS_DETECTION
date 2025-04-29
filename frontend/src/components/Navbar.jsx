import React from "react";

const themes = [
  'light', 'dark', 'cupcake', 'forest', 'luxury', 'synthwave'
];

const Navbar = () => {
  const handleThemeChange = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">Fake News Detection</a>
      </div>

      <div className="navbar-end">
        <details className="dropdown">
          <summary className="btn m-1">Themes</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            {themes.map((theme) => (
              <li key={theme}>
                <a onClick={() => handleThemeChange(theme)}>{theme}</a>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </div>
  );
};

export default Navbar;
