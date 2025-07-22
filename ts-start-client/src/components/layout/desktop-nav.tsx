import ActiveLink from "@/components/ui/active-link";

export default function DesktopNav({
  transparentNav,
}: {
  transparentNav: boolean;
}) {
  return (
    <nav
      className={`!hidden text-base font-medium leading-6 lg:!block ${
        transparentNav ? "text-white" : "text-text-nav_grey"
      }`}
    >
      <ul className="flex flex-row gap-10">
        <li>
          <ActiveLink to="/about">About Us</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/faqs">FAQs</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/hijri-date">Hijri Date</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/contact">Contact Us</ActiveLink>
        </li>
      </ul>
    </nav>
  );
}
