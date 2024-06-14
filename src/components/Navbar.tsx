import { Navbar, NavbarContent, NavbarMenuToggle, NavbarBrand, NavbarItem, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Link, Button } from "@nextui-org/react";
// import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import React from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  const menuItems = [
    "About",
    "Blog",
    "Craft",
    "Community",
    "Gear",
  ];

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <img src="/path/to/logo.png" alt="Logo" className="h-8 w-8" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <img src="/path/to/logo.png" alt="Logo" className="h-8 w-8" />
        </NavbarBrand>
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link color="foreground" href="#">
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <p>Logo</p>
          {/* <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <SunIcon className="h-6 w-6 text-white" /> : <MoonIcon className="h-6 w-6 text-white" />}
          </button> */}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
