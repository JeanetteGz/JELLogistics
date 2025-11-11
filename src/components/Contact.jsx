export default function Contact(){
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact Us</h2>
        <p className="sub">Ready to get started? Reach out to us using the information below. We respond to all inquiries during normal business hours.</p>

        <div className="contact-card">
          <div className="contact-info-main">
            <div className="contact-item">
              <strong>Contact Person:</strong> Elier Gonzalez
            </div>
            <div className="contact-item">
              <strong>Phone:</strong> <a href="tel:+18135749813">(813) 574-9813</a>
            </div>
            <div className="contact-item">
              <strong>Email:</strong> <a href="mailto:eliergonzalez@jellogistic.com">eliergonzalez@jellogistic.com</a>
            </div>
            <div className="contact-item contact-item-divider">
              <strong>Business Hours:</strong> Monday - Friday, 8:00 AM - 5:00 PM EST
            </div>
            <div className="contact-item">
              <strong>Location:</strong> Tampa, FL
            </div>
            <p className="contact-note">
              We respond to all inquiries during normal business hours. For urgent shipments or immediate assistance, please call directly.
            </p>
          </div>
          <div className="contact-benefits">
            <h3>Get Started Today</h3>
            <p>Whether you're a shipper looking for reliable freight solutions or a carrier interested in joining our network, we're here to help. Reach out to discuss your needs and discover how JEL Logistics can support your business.</p>
            <div className="contact-cta-buttons">
              <a href="#shippers" className="btn btn-primary">For Shippers</a>
              <a href="#carriers" className="btn btn-outline">For Carriers</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

