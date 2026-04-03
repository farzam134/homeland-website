import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header';
import Slider from '../components/Slider';
import SearchBox from '../components/SearchBox'
import PropertyCard from "../components/PropertyCard";
import Card from '../components/Card';
import { BsBuildings } from "react-icons/bs";
import { MdSell } from "react-icons/md";
import { MdOutlineVideocam } from "react-icons/md";
import Footer from '../components/Footer';

function Rent() {
  return (
    <>
      <div className='hero-section'>
        <Header />
        <Slider />
        <SearchBox />

      </div>



      <section className='propertycard'>
        <div className="container mt-4">
          <div className="row">
            <PropertyCard image="/img_1.jpg" title="625 S. Berendo St" address="Los Angeles, CA 90005" price="$2,265,500" beds={2} baths={2} area="7,000" tag2="RENT" />
            <PropertyCard image="/img_2.jpg" title="871 Crenshaw Blvd" address="New York Ave, NY 2282" price="$2,265,500" beds={3} baths={2} area="1,620" tag2="RENT" />
            <PropertyCard image="/img_3.jpg" title="853 S Lucerne Blvd" address="Los Angeles, CA 90005" price="$2,265,500" beds={4} baths={3} area="5,500" tag2="RENT" />
            <PropertyCard image="/img_4.jpg" title="625 S. Berendo St" address="Los Angeles, CA 90005" price="$2,265,500" beds={2} baths={2} area="7,000" tag2="RENT" />
            <PropertyCard image="/img_5.jpg" title="871 Crenshaw Blvd" address="New York Ave, NY 2282" price="$2,265,500" beds={3} baths={2} area="1,620" tag2="RENT" />
            <PropertyCard image="/img_6.jpg" title="853 S Lucerne Blvd" address="Los Angeles, CA 90005" price="$2,265,500" beds={4} baths={3} area="5,500" tag2="RENT" />
          </div>
        </div>

        <nav aria-label="Page navigation example" className="d-flex justify-content-center mt-4">
          <ul className="pagination flex-wrap">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">4</a></li>
            <li className="page-item"><a className="page-link" href="#">5</a></li>
            <li className="page-item"><a className="page-link" href="#">6</a></li>
            <li className="page-item"><a className="page-link" href="#">7</a></li>
            <li className="page-item"><a className="page-link" href="#">8</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </section>

      <section className='why-choose-us'>
        <h2>Why Choose Us?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maiores quisquam saepe architecto error corporis aliquam. Cum ipsam a consectetur aut sunt sint animi, pariatur corporis, eaque, deleniti cupiditate officia.</p>

        <div className='row mt-5'>
          <Card icon={<BsBuildings size={40} color="#2d3e8f" />}
            title="Research Suburbs"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis nostrum velit autem error, ex suscipit? Dolorem id libero ea voluptates!"
            linkText="READ MORE" />

          <Card icon={<MdSell size={40} color="#2d3e8f" />}
            title="Sold Houses"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis nostrum velit autem error, ex suscipit? Dolorem id libero ea voluptates!"
            linkText="READ MORE" />

          <Card icon={<MdOutlineVideocam size={40} color="#2d3e8f" />}
            title="Security Priority"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis nostrum velit autem error, ex suscipit? Dolorem id libero ea voluptates!"
            linkText="READ MORE" />
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Rent