import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__conatiner">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          title="The lean startup"
          price={19.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          rating={3}
        />
        <Product
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl
          "
          price={85.47}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          rating={4}
        />
        <Product
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor
          "
          price={49.99}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric
          "
          price={34.99}
          image="https://i.pcmag.com/imagery/reviews/00EU3U5rRoe9swRlkJE2yDa-1.fit_lim.size_1200x630.v1601052236.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        {" "}
        <Product
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl
          "
          price={85.47}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          rating={4}
        />
        <Product
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor
          "
          price={49.99}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
