import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { XIcon, MenuIcon } from "lucide-react";

import HamburgerMenu from "@/components/layout/hamburger-menu";
import DesktopNav from "@/components/layout/desktop-nav";

export default function NavBar({
  transparentNav,
}: {
  transparentNav: boolean;
}) {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] =
    useState<boolean>(false);

  return (
    <>
      <header
        className={`pt-6 pb-[10px] lg:pt-8 lg:pb-8 ${
          transparentNav || isHamburgerMenuOpen
            ? "absolute top-0 left-0 z-30 w-full"
            : "static border-b border-header_border_color"
        }`}
      >
        <div className="mx-auto flex w-10/12 flex-row items-center lg:w-8/12 lg:justify-between xl:w-7/12">
          {/* Logo */}
          <Link className="flex flex-row items-center gap-[10px]" to="/">
            <img
              src="images/favicon-cropped-600px.png"
              alt="My Prayer Times Logo"
              className="w-12"
            />
            <p
              className={`uppercase ${
                transparentNav ? "text-white" : "text-[#0a8337]"
              } font-bold`}
            >
              My Prayer Times
            </p>
          </Link>

          {/* Navigation - Desktop */}
          <DesktopNav {...{ transparentNav }} />

          {/* Our Blog button - Desktop */}
          <Link
            className="!hidden rounded-full bg-[#006307] py-4 px-12 font-semibold text-white hover:bg-[#0a8337] lg:!block"
            activeProps={{ style: { opacity: "0.2" } }}
            to="/blog"
          >
            Our Blog
          </Link>

          {/* Hamburger icon */}
          {isHamburgerMenuOpen ? (
            <XIcon
              className={`ml-auto text-2xl lg:hidden ${
                transparentNav || isHamburgerMenuOpen ? "text-white" : ""
              }`}
              onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
            />
          ) : (
            <MenuIcon
              className={`ml-auto text-2xl lg:hidden ${
                transparentNav ? "text-white" : ""
              }`}
              onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
            />
          )}
        </div>
      </header>

      {/* Hamburger menu */}
      {isHamburgerMenuOpen && <HamburgerMenu />}
    </>
  );
}
