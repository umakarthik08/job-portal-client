import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FiAlignJustify } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (!isAuthenticated) {
      loginWithRedirect();
    } else {
      navigate(path);
    }
  };

  const navItems = [
    { path: "/", title: "Start a Search" },
    { path: isAuthenticated ? `/my-job?email=${user.email}` : "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary Estimated" },
    { path: isAuthenticated ? `/post-job?email=${user.email}` : "/post-job", title: "Post a Job" }
  ];

  return (
    <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <nav className='flex justify-between items-center py-6'>
        <a href="/" className='flex items-center gap-2 text-2xl text-black'>
          <span className="text-2xl font-medium text-blue-900 uppercase tracking-widest">Job Horizon</span>
        </a>

        <ul className='hidden md:flex gap-12'>
          {navItems.map(({ path, title }) => (
            <li key={path} className='text-base'>
              {(path.includes("my-job") || path.includes("post-job")) ? (
                <span
                  onClick={() => handleNavigation(path)}
                  className='cursor-pointer text-base'
                >
                  {title}
                </span>
              ) : (
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "text-blue-500 font-bold" : "")}
                >
                  {title}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
          {!isAuthenticated ? (
            <Link onClick={() => loginWithRedirect()} className='py-2 px-5 border rounded hover:bg-blue-500 hover:text-white'>
              Log in
            </Link>
          ) : (
            <div className='flex'>
              <img className='w-10 h-10 rounded-full mr-3' src={user.picture} alt={user.name} />
              <Link onClick={() => logout()} className='py-2 px-5 border rounded hover:bg-blue-500 hover:text-white'>
                Logout
              </Link>
            </div>
          )}
        </div>

        <div className='md:hidden block'>
          <button onClick={handleMenuToggler}>
            {!isMenuOpen && <FiAlignJustify className='w-7 h-7 text-primary' />}
          </button>
          <button onClick={handleMenuToggler}>
            {isMenuOpen && <ImCross className='w-5 h-5 text-primary' />}
          </button>
        </div>
      </nav>

      <div className={isMenuOpen ? "px-4 py-5 rounded-sm text-white bg-blue-900 md:hidden" : "hidden"}>
        <ul>
          {navItems.map(({ path, title }) => (
            <li key={path} className='text-base'>
              {(path.includes("my-job") || path.includes("post-job")) ? (
                <span
                  onClick={() => handleNavigation(path)}
                  className='cursor-pointer text-base text-white/80 font-bold py-1'
                >
                  {title}
                </span>
              ) : (
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "text-white font-bold py-1" : "text-white/80 font-bold py-1")}
                >
                  {title}
                </NavLink>
              )}
            </li>
          ))}
          <li>
            <Link className='text-white/80 font-bold py-1' to="/login">
              Log in
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
