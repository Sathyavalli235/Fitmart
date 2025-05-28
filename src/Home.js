import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

import c1 from '../src/images/c1.jpg';
import c2 from '../src/images/c2.jpg';
import c3 from '../src/images/c3.jpg';
import card1 from './images/card1.jpg';
import card2 from './images/card2.png';
import card3 from './images/card3.png';
import card4 from './images/card4.jpg';
import card5 from './images/card5.png';
import card6 from './images/card6.png';
import c01 from '../src/images/c01.jpg';
import c02 from '../src/images/c02.jpg';
import C03 from '../src/images/C03.jpg';
import f1 from '../src/images/f1.jpg';
import f2 from '../src/images/f2.jpg';
import f3 from '../src/images/f3.jpg';
import f4 from '../src/images/f4.jpg';
import f5 from '../src/images/f5.jpg';
import f6 from '../src/images/f6.jpg';






const Home = () => (
  <div className="home-content">
    <Carousel className="mt-0">
      <Carousel.Item>
        <img className="d-block w-100" src={c1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={c2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={c3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>

   <div className="container mt-5">
<center><h2 className="section-title text-center mb-4">🏆 Top Categories</h2></center>
        <p className="text-center text-muted mb-5">Explore the best fitness essentials handpicked for you</p>
      <div className="row text-center">
        <div className="col-md-4">
                    <Link to="/products?category=proteins" className="text-decoration-none">

              <div className="category-box p-3 shadow-lg">

          <img src={card1} alt="Proteins" className="img-fluid rounded mb-2" />
          <h5>MASSAGERS</h5>
        </div>
        </Link>
        </div>
        <div className="col-md-4">
                    <Link to="/products?category=proteins" className="text-decoration-none">

                        <div className="category-box p-3 shadow-lg">
                          
          <img src={card2} alt="Equipment" className="img-fluid rounded mb-2" />
          <h5>WEIGHT BARS</h5>
        </div>
        </Link>
        </div>
        <div className="col-md-4">
                    <Link to="/products?category=proteins" className="text-decoration-none">

            <div className="category-box p-3 shadow-lg">

          <img src={card3} alt="Yoga Gear" className="img-fluid rounded mb-2" />
          <h5>MULTI GYMS</h5>
        </div>
        </Link>
        </div>
         <div className="col-md-4">
                    <Link to="/products?category=proteins" className="text-decoration-none">

          <div className="category-box p-3 shadow-lg">

          <img src={card4} alt="Yoga Gear" className="img-fluid rounded mb-2" />
          <h5>STRENGTH</h5>
        </div>
        </Link>
        </div>
        <div className="col-md-4">
                    <Link to="/products?category=proteins" className="text-decoration-none">

                        <div className="category-box p-3 shadow-lg">

          <img src={card5} alt="Yoga Gear" className="img-fluid rounded mb-2" />
          <h5>CROSSFIT 360</h5>
        </div>
        </Link>
        </div>
        <div className="col-md-4">
                    <Link to="/products?category=proteins" className="text-decoration-none">

                        <div className="category-box p-3 shadow-lg">

          <img src={card6} alt="Yoga Gear" className="img-fluid rounded mb-2" />
          <h5>EXERCISE BIKES</h5>
        </div>
        </Link>
        </div>
      </div>
    </div>



   <div className="container mt-5">
<center><h2 className="section-title text-center mb-4">🏋️‍♂️  Popular Fitness Equipments</h2></center>
      <div className="row text-center">
        <div className="col-md-4">
                      <Link to="/products?category=proteins" className="text-decoration-none">

                        <div className="category-box p-3 shadow-lg">
                          
          <img src={c01} alt="Equipment" className="img-fluid rounded mb-2" />
          <h5>SEATED ROW CHINNING BAR</h5>
        </div>
        </Link>
        </div>
        <div className="col-md-4">
                              <Link to="/products?category=proteins" className="text-decoration-none">

                        <div className="category-box p-3 shadow-lg">
                          
          <img src={c02} alt="Equipment" className="img-fluid rounded mb-2" />
          <h5>HEAVY AB SLIMMER</h5>
        </div>
        </Link>
        </div>
        <div className="col-md-4">
                              <Link to="/products?category=proteins" className="text-decoration-none">

                        <div className="category-box p-3 shadow-lg">
                          
          <img src={C03} alt="Equipment" className="img-fluid rounded mb-2" />
          <h5>PUSH UP BAR</h5>
        </div>
        </Link>
        </div>
        
      </div>
    </div>

    <section className="bg-light py-5">
      <div className="container text-center">
        <h2 className="mb-4">🔥 Current Offers</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="offer-box p-4 border rounded">
              <h4>💪 20% OFF on Home Gym Kits</h4>
              <p>Limited time offer on full body workout kits.</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="offer-box p-4 border rounded">
              <h4>🧘‍♀️ Buy 1 Get 1 Free – Yoga Mats</h4>
              <p>Get your zen on with this BOGO deal!</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="offer-box p-4 border rounded">
              <h4>🏃 30% OFF on Running Shoes</h4>
              <p>Step into fitness with comfort and speed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* === Featured On Section === */}
<section className="bg-primary py-5">
  <div className="container text-center">
    <h2 className="text-white mb-4">FEATURED ON</h2>
    <div className="row justify-content-center align-items-center">
      <div className="col-6 col-sm-4 col-md-2 mb-3">
        <img src={f1} alt="BC" className="img-fluid" />
      </div>
      <div className="col-6 col-sm-4 col-md-2 mb-3">
        <img src={f2} alt="Enterprise" className="img-fluid" />
      </div>
      <div className="col-6 col-sm-4 col-md-2 mb-3">
        <img src={f3} alt="Zee" className="img-fluid" />
      </div>
      <div className="col-6 col-sm-4 col-md-2 mb-3">
        <img src={f4} alt="DNA" className="img-fluid" />
      </div>
      <div className="col-6 col-sm-4 col-md-2 mb-3">
        <img src={f5} alt="DH" className="img-fluid" />
      </div>
      <div className="col-6 col-sm-4 col-md-2 mb-3">
        <img src={f6} alt="DH" className="img-fluid" />
      </div>
      
    </div>
  </div>
</section>

    <section className="container py-5">
      <h2 className="text-center mb-4">Why Choose FitMart?</h2>
      <div className="row text-center">
        <div className="col-md-3">
          <h5>✅ Premium Quality</h5>
          <p>Only the best gear for your fitness journey.</p>
        </div>
        <div className="col-md-3">
          <h5>🚚 Fast Delivery</h5>
          <p>3-day nationwide delivery guarantee.</p>
        </div>
        <div className="col-md-3">
          <h5>🔁 Easy Returns</h5>
          <p>No-hassle 7-day return policy.</p>
        </div>
        <div className="col-md-3">
          <h5>🔒 Secure Payments</h5>
          <p>100% safe and secure checkout process.</p>
        </div>
      </div>
    </section>
    
  </div>
  
);

export default Home;
