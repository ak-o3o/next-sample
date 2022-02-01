import Nav from "./Nav.tsx";

export default function Layout({ children}) {
  return (
    <div>
      <Nav/>
      <main>{children}</main>
    </div>
  );
}