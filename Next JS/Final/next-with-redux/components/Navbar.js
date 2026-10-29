import Link from "next/link";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <Link className="navbar-brand" href="/">
          <span className="brand-mark">U</span>
          <span>User<span className="brand-accent">Hub</span></span>
        </Link>

        <div className="navbar-links">
          <Link className="navbar-link" href="/">Home</Link>
          <Link className="navbar-link" href="/users">Users</Link>
          <Link className="navbar-link navbar-cta" href="/add-user">
            <span aria-hidden="true">＋</span> Add User
          </Link>
        </div>
      </nav>
    </header>
  );
}
