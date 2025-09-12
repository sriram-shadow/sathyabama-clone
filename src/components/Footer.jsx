import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Logo & About */}
        <div className="footer-col">
          <img
            src="/images/logoblue.svg"
            alt="Sathyabama Logo"
            className="footer-logo"
          />
          <p>
            Sathyabama Institute of Science and Technology (Deemed to be
            University), established under section (3) of the UGC Act, 1956.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Academics</a></li>
            <li><a href="#">Admissions</a></li>
            <li><a href="#">Research</a></li>
            <li><a href="#">Placements</a></li>
          </ul>
        </div>

        {/* Column 3: Useful Links */}
        <div className="footer-col">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">NAAC</a></li>
            <li><a href="#">NIRF</a></li>
            <li><a href="#">AICTE</a></li>
            <li><a href="#">NBA</a></li>
            <li><a href="#">IQAC</a></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-col">
          <h3>Contact</h3>
          <p>
            Jeppiaar Nagar, Rajiv Gandhi Salai,
            <br />
            Chennai – 600119
          </p>
          <p>+91-44-2450 3150 / 51 / 52 / 54 / 55</p>
          <p>
            ✉️{" "}
            <a href="mailto:registrar@sathyabama.ac.in">
              registrar@sathyabama.ac.in
            </a>
          </p>
          <div className="social-icons">
            <a href="#"><img src="/images/facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="/images/twitter.png" alt="Twitter" /></a>
            <a href="#"><img src="/images/instagram.png" alt="Instagram" /></a>
            <a href="#"><img src="/images/youtube.png" alt="YouTube" /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>
          &copy; 2025 Sathyabama Institute of Science and Technology. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
