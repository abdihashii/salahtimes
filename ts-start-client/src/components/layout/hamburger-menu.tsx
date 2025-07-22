import { Link } from "@tanstack/react-router";

const HamburgerMenu = () => {
  return (
    <nav className="absolute top-0 left-0 z-20 mx-auto min-h-screen w-full bg-green-extra_dark pt-36 pb-52px font-semibold text-white lg:hidden">
      <ul className="mb-83px flex flex-col gap-16 text-2xl">
        <li className="mx-auto w-fit">
          <Link to="/" activeClassName="text-green-secondary">
            Prayer Times
          </Link>
        </li>
        <li className="mx-auto w-fit">
          <Link to="/about-us/" activeClassName="text-green-secondary">
            About Us
          </Link>
        </li>
        <li className="mx-auto w-fit">
          <Link to="/faqs/" activeClassName="text-green-secondary">
            FAQs
          </Link>
        </li>
        <li className="mx-auto w-fit">
          <Link to="/hijri-date/" activeClassName="text-green-secondary">
            Hijri Date
          </Link>
        </li>
        <li className="mx-auto w-fit">
          <Link to="/contact-us/" activeClassName="text-green-secondary">
            Contact Us
          </Link>
        </li>
      </ul>

      <hr className="mx-auto mb-45px w-7/12" />

      <Link
        to="/blog/"
        className="mx-auto block w-fit rounded-full bg-green-secondary py-4 px-50px"
      >
        Our Blog
      </Link>
    </nav>
  );
};

export default HamburgerMenu;
