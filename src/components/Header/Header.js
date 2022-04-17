import React from "react";
import { Link } from "react-router-dom";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Header = () => {
  // const navigation = [
  //   { name: "Services", href: "#", current: true },
  //   { name: "Team", href: "#", current: false },
  //   { name: "Projects", href: "#", current: false },
  //   { name: "About", href: "#", current: false },
  // ];

  // function classNames(...classes) {
  //   return classes.filter(Boolean).join(" ");
  // }

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />{" "} */}
                  <span className="text-2xl text-red-600">Pro</span>
                  <span className="text-2xl text-white">Trainer</span>
                  {/* <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  /> */}
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {/* {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))} */}
                    <Link
                      to="/home"
                      className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </Link>
                    <Link
                      to="/home#services"
                      className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Services
                    </Link>
                    <Link
                      to="/about"
                      className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Cart
                    </Link>
                    <Link
                      to="/about"
                      className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      About
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                {/* <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  ></Transition>
                </Menu> */}
                <Link
                  to="/login"
                  className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))} */}
              <Link
                to="/home"
                className="bg-gray-900 text-white px-3 mx-2 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/service"
                className="bg-gray-900 text-white px-3 mx-2 py-2 rounded-md text-sm font-medium"
              >
                Services
              </Link>
              <Link
                to="/about"
                className="bg-gray-900 text-white mx-2 px-3 py-2 rounded-md text-sm font-medium"
              >
                Cart
              </Link>
              <Link
                to="/about"
                className="bg-gray-900 text-white mx-2 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
