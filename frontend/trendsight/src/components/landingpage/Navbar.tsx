// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/TrendSight_logo.png'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-5">
        <Link className="navbar-brand" to="/">
          <img
            src={Logo}
            alt="Stock Track Logo"
            className="w-24 h-auto"
          />
        </Link>
        <button
          className="text-gray-500 hover:text-gray-600 focus:outline-none md:hidden"
          aria-label="Toggle menu"
          onClick={() => document.getElementById('navbarNav')?.classList.toggle('hidden')}
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              d="M4 5h16M4 12h16m-7 7h7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="hidden w-full md:flex md:items-center md:w-auto" id="navbarNav">
          <ul className="flex flex-col mt-3 space-y-2 md:flex-row md:space-x-6 md:space-y-0">
            <li className="nav-item">
              <a className="nav-link text-gray-700 hover:text-gray-900" href="#features">
                <h6>Features</h6>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-gray-700 hover:text-gray-900" href="#pricing">
                <h6>Pricing</h6>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-gray-700 hover:text-gray-900" href="#contact">
                <h6>Contact</h6>
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-gray-700 hover:text-gray-900" to="/login">
                <h6>Login/SignUp</h6>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
