export default function Services(){
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2>Our Freight Brokerage Services</h2>
        <p className="sub">Comprehensive logistics solutions designed to make shipping simpler, more predictable, and cost-effective. We connect shippers with reliable carriers to ensure your freight reaches its destination on time and in perfect condition.</p>

        <div className="grid-3">
          <div className="card">
            <div className="service-image">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" alt="Full truckload freight" />
            </div>
            <h3>Full Truckload (FTL)</h3>
            <p>We specialize in full truckload shipments across the continental United States. Our services include dry van, flatbed, step deck, and hotshot transportation options. Whether you're shipping palletized goods, machinery, building materials, or general freight, we match you with the right carrier and equipment type for your specific needs. FTL shipping offers dedicated service, faster transit times, and reduced handling of your cargo.</p>
          </div>
          <div className="card">
            <div className="service-image">
              <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80" alt="Time-sensitive freight delivery" />
            </div>
            <h3>Time-Sensitive Freight</h3>
            <p>When timing is critical, we prioritize your shipments and provide proactive communication throughout the transit. Our team coordinates closely with carriers to ensure on-time pickups and deliveries. We provide regular updates during business hours, so you're always informed about your shipment's status. For urgent or expedited freight, we leverage our carrier network to find available capacity quickly and efficiently.</p>
          </div>
          <div className="card">
            <div className="service-image">
              <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80" alt="Reliable carrier network" />
            </div>
            <h3>Reliable Carrier Network</h3>
            <p>We work exclusively with vetted, insured carriers who meet strict safety and compliance standards. Every carrier in our network is properly licensed, insured, and maintains good safety ratings. We verify certificates of insurance (COI) and W-9 forms to ensure compliance. Additionally, we support fast payouts through factoring partnerships, making it easier for carriers to access funds quickly after delivery.</p>
          </div>
        </div>

        <div className="services-additional">
          <div className="services-grid-2">
            <div>
              <h3>Additional Freight Brokerage Services</h3>
              <ul className="services-list">
                <li><strong>Lane Optimization:</strong> We help optimize your shipping lanes by matching your freight with carriers who specialize in specific routes, reducing empty miles and improving efficiency.</li>
                <li><strong>Rate Negotiation:</strong> Our team negotiates competitive rates with carriers while maintaining service quality. We provide transparent pricing and rate confirmations for all shipments.</li>
                <li><strong>Load Tracking:</strong> Stay informed with real-time tracking updates. We monitor your shipments and provide status updates during normal business hours.</li>
                <li><strong>Documentation Management:</strong> We handle bills of lading (BOL), proof of delivery (POD), and other necessary documentation to ensure smooth operations.</li>
                <li><strong>Detention & Accessorials:</strong> We manage detention time, layover, and other accessorial charges, ensuring fair compensation for carriers and transparent billing for shippers.</li>
              </ul>
            </div>
            <div className="service-features-image">
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" alt="Freight logistics coordination" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
