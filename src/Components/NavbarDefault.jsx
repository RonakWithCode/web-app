import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react';

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {/* Use NavLink for navigation links and set activeClassName */}
      <li>
        <NavLink to="/" 
              className={({ isActive }) => {
                return isActive
                  ? "flex text-red items-center gap-x-2 p-1 font-medium"
                  : "flex text-red items-center gap-x-2 p-1 font-medium";
              }}>
            <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"/>
            </svg>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="flex items-center gap-x-2 p-1 font-medium text-blue-gray" activeClassName="text-red-500">
          <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 19H11V17H13V19ZM13 15H11V11H13V15Z"/>
          </svg>
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" className="flex items-center gap-x-2 p-1 font-medium text-blue-gray" activeClassName="text-red-500">
          <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 9L12 2L2 9H7V20H17V9H22Z"/>
          </svg>
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/portfolio" className="flex items-center gap-x-2 p-1 font-medium text-blue-gray" activeClassName="text-red-500">
          <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6H4V18H20V6ZM2 20V4C2 2.9 2.9 2 4 2H20C21.1 2 22 2.9 22 4V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20Z"/>
          </svg>
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog" className="flex items-center gap-x-2 p-1 font-medium text-blue-gray" activeClassName="text-red-500">
          <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 15H16V17H4V15ZM4 11H16V13H4V11ZM4 7H16V9H4V7ZM2 21V3H18C19.1 3 20 3.9 20 5V19C20 20.1 19.1 21 18 21H2Z"/>
          </svg>
          Blog
        </NavLink>
        </li>
      <li>
        <NavLink to="/contact" className="flex items-center gap-x-2 p-1 font-medium text-blue-gray" activeClassName="text-red-500">
          <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 19C10.9 19 10 18.1 10 17C10 15.9 10.9 15 12 15C13.1 15 14 15.9 14 17C14 18.1 13.1 19 12 19ZM14.07 11.25L14.8 10.52C15.79 9.54 15.03 8 13.76 8H10.24C8.97 8 8.21 9.54 9.2 10.52L9.93 11.25C10.62 11.93 11.89 11.93 12.58 11.25H14.07Z"/>
          </svg>
          Contact Us
        </NavLink>
      </li>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 ">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography as={NavLink} to="/" className="mr-4 cursor-pointer py-1.5 font-bold text-xl" activeClassName="text-red-500">
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
        </div>
      </MobileNav>
    </Navbar>
  );
}
