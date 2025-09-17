import "./Header.css";


 function Header() {
  return (
    <div className="top-header">
      <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/twitter.png" alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram.png" alt="Instagram" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"> 
            <img src="/images/youtube.png" alt="YouTube" />
            </a>

          </div>
      <div className="right-links">
        <a href="#">Campus Life</a>
        <a href="#">Alumni</a>
        <a href="#">Careers</a>
        <a href="#">Campuses</a>
        <a href="#">Search</a>
      </div>
    </div>
  );
}
export default Header;