import Header from './components/Header.jsx';
import HeroBanner from './components/HeroBanner.jsx';
import ValueProps from './components/ValueProps.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import ShipperContact from './components/ShipperContact.jsx';
import CarrierContact from './components/CarrierContact.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './App.css';


export default function App(){
return (
<>
<Header />
<HeroBanner />
<ValueProps />
<Services />
<Process />
<ShipperContact />
<CarrierContact />
<Contact />
<Footer />
</>
);
}