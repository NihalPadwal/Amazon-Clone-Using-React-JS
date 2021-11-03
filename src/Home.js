import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/91Vb4VLoWLL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
              title="The lean stratup"
              image="https://m.media-amazon.com/images/I/51WIKlio9qL._SY346_.jpg"
              price={2000}
              rating={5}
            />
            <Product
              title="AORUS Gigabyte Nvidia GeForce RTX 3070 AORUS Master 8GB GDDR6 Graphics Card (GV-N3070AORUS M-8GD)"
              image="https://m.media-amazon.com/images/I/71If+Mn0ByL._SL1500_.jpg"
              price={80000}
              rating={5}
            />
            <Product
              title="AMD 5000 Series Ryzen 7 5800X Desktop Processor 8 cores 16 Threads 36 MB Cache 3.8 GHz Upto 4.7 GHz AM4 Socket 500 Series Chipset (100-100000063WOF)"
              image="https://m.media-amazon.com/images/I/61DYLoyNRWL._SL1384_.jpg"
              price={37280.0}
              rating={5}
              />
        </div>

        <div className="home__row">
          <Product
              title="Logitech G512 Mechanical Gaming Keyboard,RGB Lightsync Backlit Keys,GX Brown Tactile Key Switches,Brushed Aluminum Case,Customizable F-Keys,USB Pass Through - Black"
              image="https://m.media-amazon.com/images/I/514VCacbvLL._SL1024_.jpg"
              price={5000}
              rating={5}
            />
            <Product
              title="Logitech G502 Hero High Performance Wired Gaming Mouse, Hero 25K Sensor, 25,000 DPI, RGB, Adjustable Weights, 11 Programmable Buttons, On-Board Memory, PC/Mac - Black"
              image="https://m.media-amazon.com/images/I/61mpMH5TzkL._SL1500_.jpg"
              price={4380.0}
              rating={5}
            />
        </div>
        <div className="home_row">
            <Product
              title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
              image="https://m.media-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg"
              price={158900.0}
              rating={5}
            />
          </div>
      </div>
    </div>
  );
}

export default Home;
