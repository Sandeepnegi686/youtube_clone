"use client";
import Image from "next/image";

import { useCallback, useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

import NavbarItem from "./NavbarItem";
import MobileMenu from "./MobileMenu";
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import AccountMenu from "./AccountMenu";

const offsetTop = 66;

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);
  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  useEffect(function () {
    function handleScroll() {
      if (window.scrollY > offsetTop) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? "bg-zinc-900" : ""}`}
      >
        <Image src="/logo.png" alt="Logo" width={130} height={50} />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by languages" />
        </div>
        <div
          className="lg:hidden flex items-center gap-2 ml-8 cursor-pointer relative"
          onClick={toggleMobileMenu}
        >
          <p className="text-white text-sm">Browse</p>
          <FaChevronDown
            className={`text-white w-4 transition ${showMobileMenu ? "rotate-180" : "rotate-0"}`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsBell />
          </div>
          <div
            className="flex items-center gap-2 cursor-pointer relative"
            onClick={toggleAccountMenu}
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 overflow-hidden rounded-md relative">
              <Image
                src="/blue_logo.jpg"
                alt="profile logo"
                fill
                objectFit="cover"
              />
            </div>
            <BsChevronDown
              className={`text-white transition ${showAccountMenu ? "rotate-180" : "rotate-0"}`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
}
