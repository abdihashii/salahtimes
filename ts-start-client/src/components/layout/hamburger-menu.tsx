import ActiveLink from "@/components/ui/active-link";

const HamburgerMenu = () => {
  return (
    <nav className="absolute top-0 left-0 z-20 mx-auto min-h-screen w-full bg-[#000B03] pt-36 pb-52px font-semibold text-white lg:hidden">
      <ul className="mb-83px flex flex-col gap-16 text-2xl">
        <li className="mx-auto w-fit">
          <ActiveLink to="/" activeClassName="text-[#0a8337]">
            Prayer Times
          </ActiveLink>
        </li>
        <li className="mx-auto w-fit">
          <ActiveLink to="/about" activeClassName="text-[#0a8337]">
            About Us
          </ActiveLink>
        </li>
        <li className="mx-auto w-fit">
          <ActiveLink to="/faqs" activeClassName="text-[#0a8337]">
            FAQs
          </ActiveLink>
        </li>
        <li className="mx-auto w-fit">
          <ActiveLink to="/hijri-date" activeClassName="text-[#0a8337]">
            Hijri Date
          </ActiveLink>
        </li>
        <li className="mx-auto w-fit">
          <ActiveLink to="/contact" activeClassName="text-[#0a8337]">
            Contact Us
          </ActiveLink>
        </li>
      </ul>

      <hr className="mx-auto mb-45px w-7/12" />

      <ActiveLink
        to="/blog"
        className="mx-auto block w-fit rounded-full bg-[#0a8337] py-4 px-50px"
      >
        Our Blog
      </ActiveLink>
    </nav>
  );
};

export default HamburgerMenu;
