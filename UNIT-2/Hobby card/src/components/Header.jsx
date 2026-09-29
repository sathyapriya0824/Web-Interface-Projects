import "./Header.css";

function Header({ collegeName }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <h1 className="site-header__college">{collegeName}</h1>
        <p className="site-header__tagline">Student Dashboard</p>
      </div>
    </header>
  );
}

export default Header;
