import "./Footer.css";

function Footer({ collegeName }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <span>
          © {year} {collegeName}
        </span>
        <span className="site-footer__tag">Student Dashboard</span>
      </div>
    </footer>
  );
}

export default Footer;
