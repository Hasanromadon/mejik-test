import React, { useState } from 'react';
import SearchInput from './SearchInput';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, LoginIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import Button from './Button';
import Modal from './Modal';
import Login from './Login';
import Register from './Register';
import { useSelector } from 'react-redux';
import NavMenu from './NavMenu';

const Navbar = () => {
  let [isLoginOpen, setIsLoginOpen] = useState(false);
  let [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const { user, isLoggedIn } = useSelector((state) => state.user);
  console.log(isLoggedIn);

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };
  const openRegisterModal = () => {
    setIsRegisterOpen(true);
  };

  return (
    <>
      <nav className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-semibold">
            MICROBOOK
          </Link>
          <SearchInput placeholder="Search Book" />
          <div>
            {isLoggedIn ? (
              <div>
                <Link className="mr-2 text-cyan-500" to="/profile">
                  Profile
                </Link>{' '}
                | <button className="ml-2">logout</button>
              </div>
            ) : (
              <>
                <Button onClick={openLoginModal} primary className="mr-2">
                  Login
                </Button>
                <Button onClick={openRegisterModal}>Register</Button>
              </>
            )}
          </div>
        </div>
      </nav>
      <Login isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} />
      <Register
        isRegisterOpen={isRegisterOpen}
        setIsRegisterOpen={setIsRegisterOpen}
      />
    </>
  );
};

export default Navbar;
