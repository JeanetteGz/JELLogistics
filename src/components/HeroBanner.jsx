import './hero.css';

export default function HeroBanner(){
return (
<section id="home" className="hero">
  <div className="hero__image-container">
    <img 
      src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1400&q=80" 
      alt="Freight truck on highway" 
      className="hero__background-image"
    />
    <div className="hero__overlay"></div>
  </div>
  <div className="hero__content">
    <div className="wrap">
      <span className="eyebrow">Freight Brokerage • Tampa, FL</span>
      <h1>Reliable Freight Solutions with <span className="brand-accent">JEL Logistics</span></h1>
      <p className="sub">Connecting shippers and carriers through efficient, transparent freight brokerage services. We specialize in full truckload (FTL) shipments, time-sensitive freight, and building trusted relationships with both shippers and carriers. Our team responds during normal business hours to ensure your shipments move smoothly from pickup to delivery.</p>
      <div className="hero__cta">
        <a className="btn btn-primary" href="#shippers">For Shippers</a>
        <a className="btn btn-outline" href="#carriers">For Carriers</a>
      </div>
    </div>
  </div>
</section>
);
}