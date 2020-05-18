import Nav from "../components/Nav";
export default function Layout({ children }) {
  return (
    <div className="min-h-screen pj-background-color">
      <Nav />
      <div className="w-full">{children}</div>
    </div>
  );
}
