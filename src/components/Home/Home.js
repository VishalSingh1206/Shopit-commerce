import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__conatiner">
        <img
          className="home__image"
          src="https://raw.githubusercontent.com/VishalSingh1206/Shopit-commerce/master/public/Banner%20Shopit.png"
        />
      </div>
      <div className="home__row">
        <Product
          key={11}
          id="shopit_1"
          title="The lean startup"
          price={19}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          rating={3}
        />
        <Product
          key={22}
          id="shopit_2"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl
          "
          price={85.47}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          rating={4}
        />
        <Product
          key={33}
          id="shopit_3"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor
          "
          price={49}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          key={44}
          id="shopit_4"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric
          "
          price={34}
          image="https://i.pcmag.com/imagery/reviews/00EU3U5rRoe9swRlkJE2yDa-1.fit_lim.size_1200x630.v1601052236.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        {" "}
        <Product
          key={55}
          id="shopit_5"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl
          "
          price={85.47}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          rating={4}
        />
        <Product
          key={66}
          id="shopit_6"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor
          "
          price={49}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
