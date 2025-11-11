export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img src="/logo.png" alt="JEL Logistics" className="footer-logo" />
            <p><strong>JEL Logistics</strong></p>
            <p>Freight Brokerage • Tampa, FL</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p><a href="tel:+18135749813">(813) 574-9813</a></p>
            <p><a href="mailto:eliergonzalez@jellogistic.com">eliergonzalez@jellogistic.com</a></p>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <p>Full Truckload (FTL)</p>
            <p>Time-Sensitive Freight</p>
            <p>Carrier Network</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="#services">Services</a>
            <a href="#process">How It Works</a>
            <a href="#shippers">For Shippers</a>
            <a href="#carriers">For Carriers</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {year} JEL Logistics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
