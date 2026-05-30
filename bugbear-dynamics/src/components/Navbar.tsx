import Link from "next/link";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <Link href="/" className="brand">
          Bugbear Dynamics
        </Link>

        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/catalog">Catalog</Link></li>
          <li><Link href="/#mission">Mission</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}