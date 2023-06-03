import { NavLink } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import MainIcon from "./assets/doctor-icon-png.png";
import Button from "./Components/Button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Service", href: "/service" },
  { name: "Find Doctor", href: "/findDoctor" },
  { name: "How it Works", href: "/howItWork" },
  { name: "Contact Us", href: "/contact" },
];

function Header({ children }) {
  return (
    <div className="bg-secondaryColor py-12 font-inter">
      <div>
        <Disclosure as="nav" className="shadow-md">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                <div className=" flex max-md:h-16 h-24 items-center justify-between">
                  <div className="absolute inset-y-0 left-5 mt-3  sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>

                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center gap-2">
                      <img className="w-6 h-6" src={MainIcon} alt="" />
                      <h1 className="hidden md:block text-3xl text-black font-bold ">
                        <span className="text-primaryColor">Find</span> Doctor
                      </h1>
                    </div>
                  </div>

                  <div className="absolute mr-5 inset-y-0 right-0 flex gap-3 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {/* Profile dropdown */}
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex ">
                        {navigation.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.href}
                            className={({ isActive }) => {
                              return (
                                "rounded-sm px-4 py-1 text-base" +
                                (!isActive
                                  ? " after:content-[' '] after:bg-gradient-to-l after:to-red-600 from-primaryColor after:m-auto after:block after:w-0 after:h-[2px] after:ease-in after:duration-300 after:hover:w-full cursor-pointe"
                                  : " after:content-[' '] after:bg-gradient-to-l after:to-red-600 from-primaryColor after:m-auto after:block after:h-[2px] after:ease-in after:duration-300 after:w-full cursor-pointe")
                              );
                            }}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* mode settings */}

                  <Button
                    css={
                      " bg-primaryColor px-8 py-[8px] text-textWhite rounded-md"
                    }
                    name={"Login"}
                  />
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden ">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={({ isActive }) => {
                        return (
                          "block rounded-md px-3 py-2 text-base font-medium" +
                          (!isActive
                            ? " no-underline text-gray-300 hover:bg-gray-700 hover:text-white"
                            : " no-underline bg-gray-800 text-white")
                        );
                      }}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>

      <div className="bg-secondaryColor text-white ">{children}</div>
    </div>
  );
}
export default Header;
