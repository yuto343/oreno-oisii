import Nav from "../components/nav";
export default function Layout({ children, params }) {
  return (
    <div className="min-h-screen pj-background-color pj-text-color">
      <Nav params={params} />
      <div className="w-full">{children}</div>
    </div>
  );
}
