import NavBar from "./nav-bar";
import Footer from "./footer";

export default function Layout({
  children,
  transparentNav,
}: {
  children: React.ReactNode;
  transparentNav: boolean;
}) {
  return (
    <div className="mx-auto">
      <NavBar transparentNav={transparentNav} />
      {children}
      <Footer />
    </div>
  );
}
