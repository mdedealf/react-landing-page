import "./styles.css";

const Header = () => {
  return (
    <>
      <header>
        <nav className="header-navigation">
          <span className="header-author">@Ayush Barnwal</span>
          <div className="header-menu">
            <a href="#">About</a>
            <a href="#">Work</a>
            <a href="#">Contact</a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
