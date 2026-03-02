import React, { useState } from "react";
import heroBg from "../assets/Images/JuneCAFE.jpg";
import menu1 from "../assets/Images/MENU1.jpg";
import menu2 from "../assets/Images/MENU2.jpg";
import menu3 from "../assets/Images/MENU3.jpg";
import menu4 from "../assets/Images/MENU4.jpg";
import menu5 from "../assets/Images/MENU5.jpg";
import zomatoLogo from "../assets/Images/zomato.png";
import swiggyLogo from "../assets/Images/swiggy.png";

const Hero = () => {
  const [showFoodModal, setShowFoodModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showHallModal, setShowHallModal] = useState(false);

  return (
    <section className="hero-section" id="home">
      <img src={heroBg} alt="Cafe Interior" className="background-img" />

      <div className="hero-overlay">
        <h1 data-aos="fade-down">Welcome to Dialogue Café</h1>

        <p
          className="cuisine-links subtitle"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <a href={menu1} target="_blank" rel="noopener noreferrer" className="menu-link">Continental</a> ·
          <a href={menu3} target="_blank" rel="noopener noreferrer" className="menu-link">Mexican</a> ·
          <a href={menu4} target="_blank" rel="noopener noreferrer" className="menu-link">Chinese</a> ·
          <a href={menu5} target="_blank" rel="noopener noreferrer" className="menu-link">North Indian</a> ·
          <a href={menu2} target="_blank" rel="noopener noreferrer" className="menu-link">American</a>
        </p>

        <div className="hero-buttons" data-aos="fade-up" data-aos-delay="500">
         
          <button className="btn hall-btn" onClick={() => setShowBookingModal(true)}>
            Book a Table
          </button>

          {/* ✅ Updated Purple Button */}
          <button className="btn " onClick={() => setShowHallModal(true)}>  
            Book Conference & Party Halls
          </button>
        </div>

      
        {/* Book a Table Modal */}
        {showBookingModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="modal-close-circle" onClick={() => setShowBookingModal(false)}>×</button>
             
              <h3 className="modal-heading">Dine-In Booking Via :</h3>

              <div className="modal-buttons">
                <a
                  href="https://www.zomato.com/chandigarh/dialogue-cafe-sector-35/book"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-option"
                >
                  <img src={zomatoLogo} alt="Zomato" className="modal-logo" />
                </a>

                <a
                  href="https://www.swiggy.com/restaurants/115204/dineout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-option"
                >
                  <img src={swiggyLogo} alt="Swiggy" className="modal-logo" />
                </a>
              </div>

              <h3 className="modal-heading">Book a Table</h3>

              <p><strong>📞 Phone:</strong> 0172 5003333, +91 9216073888</p>
              <p><strong>📧 Email:</strong> dialoguecafe@gmail.com</p>
              <p><strong>📍 Address:</strong> SCO: 301-302, Sector 35-B, Chandigarh, India</p>

              <a href="tel:7740037264" className="btn highlight">
                Call Now
              </a>
            </div>
          </div>
        )}

        {/* Conference & Party Hall Modal */}
        {showHallModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="modal-close-circle" onClick={() => setShowHallModal(false)}>×</button>

              <h3 className="modal-heading">Book Conference & Party Halls</h3>

              <p><strong>📞 Manager Contact:</strong>  0172 5003333, +91 9216073888</p>
              <p><strong>📧 Email:</strong> dialoguecafe@gmail.com</p>
              <p><strong>📍 Location:</strong> SCO: 301-302, Sector 35-B, Chandigarh, India</p>
              <p><strong>🏢 Facilities:</strong> AC Hall, Smart TV , Catering Available</p>

              <a href="tel:7740037264" className="btn highlight">
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;