import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div
          className="flex cursor-pointer mt-5 mb-5 text-3xl "
          onClick={() => navigate('/')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mt-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
            />
          </svg>
          <p>
            <span className="font-bold text-red-800">Gr8</span>Deals
          </p>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={` cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute('/') && '!text-black !border-b-red-500'
              }`}
              onClick={() => navigate('/')}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute('/offers') && '!text-black !border-b-red-500'
              }`}
              onClick={() => navigate('/offers')}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute('/sign-in') && '!text-black !border-b-red-500'
              }`}
              onClick={() => navigate('sign-in')}
            >
              SignIn
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
