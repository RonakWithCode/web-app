import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react';
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);
  const [openServicesMenu, setOpenServicesMenu] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const servicesMenu = (
    <Menu >
      <MenuHandler>
        <li className="flex text-white hover:text-red-500 hover:text hover:cursor-pointer -red-500 items-center gap-x-2 p-1 font-medium" >
          Services 
          <ChevronDownIcon className="ml-3 h-5 w-5" />
        </li>
      </MenuHandler>
      <MenuList className="bg-black p-2">
        <MenuItem>
          <NavLink to="/services/web-dev" className="text-white hover:text-red-500">Web Development</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/services/marketing" className="text-white hover:text-red-500">Marketing</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/services/seo" className="text-white hover:text-red-500">SEO Services</NavLink>
        </MenuItem>
      </MenuList>
    </Menu>
  );
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {/* Use NavLink for navigation links and set activeClassName */}
      <li>
        <NavLink to="/"
          className={({ isActive }) => {
            return isActive
              ? "flex  text-red-500 items-center gap-x-2 p-1 font-medium"
              : "flex text-white hover:text-red-500 items-center gap-x-2 p-1 font-medium";
          }}>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/about"
          className={({ isActive }) => {
            return isActive
              ? "flex  text-red-500 items-center gap-x-2 p-1 font-medium"
              : "flex text-white hover:text-red-500 items-center gap-x-2 p-1 font-medium";
          }}>
          About Us
        </NavLink>
      </li>

      {/* <li>{servicesMenu}</li> */}

      <li>
        <NavLink to="/portfolio"
          className={({ isActive }) => {
            return isActive
              ? "flex  text-red-500 items-center gap-x-2 p-1 font-medium"
              : "flex text-white hover:text-red-500 items-center gap-x-2 p-1 font-medium";
          }}>
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog"
          className={({ isActive }) => {
            return isActive
              ? "flex  text-red-500 items-center gap-x-2 p-1 font-medium"
              : "flex text-white hover:text-red-500 items-center gap-x-2 p-1 font-medium";
          }}>
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact"
          className={({ isActive }) => {
            return isActive
              ? "flex  text-red-500 items-center gap-x-2 p-1 font-medium"
              : "flex text-white items-center gap-x-2 p-1 font-medium";
          }}>
          Contact Us
        </NavLink>
      </li>
    </ul>
  );

  return (
    <Navbar className="bg-black mx-auto px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography as={NavLink} to="/" className="mr-4 cursor-pointer py-1.5 font-bold text-xl  hover:text-red-500">
          RonoSoft
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6  hover:text-red-500" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-red-500" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto ">
          {navList}
        </div>
      </MobileNav>
    </Navbar>
  );
}
