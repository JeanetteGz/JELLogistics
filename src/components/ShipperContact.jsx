export default function ShipperContact(){
  return (
    <section id="shippers" className="shippers-section">
      <div className="container">
        <h2>For Shippers</h2>
        <p className="sub">Looking for reliable freight brokerage services? We make shipping simple with transparent pricing, vetted carriers, and proactive communication. Experience the difference of working with a freight broker that prioritizes your success.</p>

        <div className="shippers-grid">
          <div className="shippers-main-content">
            <div className="shippers-intro">
              <h3>Why Shippers Choose JEL Logistics</h3>
              <p>As a shipper, you need a freight broker you can trust to handle your shipments with care and professionalism. At JEL Logistics, we understand that your cargo is valuable and your deadlines are critical. That's why we've built our business around reliability, transparency, and exceptional service.</p>
            </div>

            <div className="shippers-benefits-grid">
              <div className="benefit-card">
                <h4>Verified Carriers</h4>
                <p>Every carrier in our network is thoroughly vetted for safety, insurance, and compliance. We verify MC/DOT numbers, insurance certificates, and safety ratings before assigning any load.</p>
              </div>
              <div className="benefit-card">
                <h4>Transparent Pricing</h4>
                <p>No hidden fees or surprises. We provide clear, competitive rates with detailed rate confirmations so you know exactly what you're paying for.</p>
              </div>
              <div className="benefit-card">
                <h4>Proactive Communication</h4>
                <p>Stay informed every step of the way. We provide regular updates during business hours, from pickup confirmation to delivery status.</p>
              </div>
              <div className="benefit-card">
                <h4>Reliable Capacity</h4>
                <p>Our extensive carrier network ensures we can find the right equipment and capacity for your shipments, even during peak seasons or tight deadlines.</p>
              </div>
              <div className="benefit-card">
                <h4>Professional Coordination</h4>
                <p>We handle all the logistics details, from coordinating pickups and deliveries to managing documentation and handling any issues that arise.</p>
              </div>
              <div className="benefit-card">
                <h4>Documentation Management</h4>
                <p>We manage all necessary paperwork including bills of lading, proof of delivery, and compliance documentation to ensure smooth operations.</p>
              </div>
            </div>
          </div>

          <div className="shippers-sidebar">
            <div className="sidebar-image">
              <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80" alt="Shipper loading freight" />
            </div>
            <div className="sidebar-info">
              <h4>What to Include in Your Quote Request</h4>
              <ul className="sidebar-list">
                <li>Pickup and delivery locations</li>
                <li>Preferred dates and times</li>
                <li>Freight details (weight, dimensions, pallets)</li>
                <li>Equipment type needed</li>
                <li>Special requirements</li>
                <li>Additional information</li>
              </ul>
              <p className="sidebar-note">We provide competitive rates and quick turnarounds. Contact us to get started!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
