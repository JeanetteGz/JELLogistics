import './hero.css';

export default function HeroBanner(){
return (
<section id="home" className="hero">
  <div className="hero__image-container">
    <img 
      src="https://wallpapercave.com/wp/wp10071841.jpg" 
      alt="Freight truck on highway" 
      className="hero__background-image"
    />
    <div className="hero__overlay"></div>
  </div>
  <div className="hero__content">
    <div className="wrap">
      <span className="eyebrow">Freight Brokerage • Tampa, FL</span>
      <h2>Reliable Freight Solutions with JEL Logistics</h2>
      <p className="sub">Connecting shippers and carriers through efficient, transparent freight brokerage services. We specialize in full truckload (FTL) shipments, time sensitive freight, and building trusted relationships with both shippers and carriers. Our team responds during normal business hours to ensure your shipments move smoothly from pickup to delivery.</p>
      <div className="hero__cta">
        <a className="btn btn-primary" href="#shippers">For Shippers</a>
        <a className="btn btn-outline" href="#carriers">For Carriers</a>
      </div>
    </div>
  </div>
</section>
);
}