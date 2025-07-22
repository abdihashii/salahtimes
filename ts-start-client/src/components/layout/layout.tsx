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
    <div className="mx-auto min-h-screen flex flex-col">
      <NavBar transparentNav={transparentNav} />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
}
