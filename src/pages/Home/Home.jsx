import React from 'react';
import Header from './Components/Header';
import Offers from './Components/Offers';
import Populars from './Components/Populars';
import News from './Components/News';
import axios from "axios";

function Home() {
  const [products, setProducts] = React.useState([]);

  const getProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    setProducts(response.data);
  };

  React.useEffect(() => {
    getProducts(); // Call getProducts only once
  }, []);

  return (
    <div className='pb-[10vh]'>
      <Header />
      <Offers products={products} />
      <Populars products={products} />
      <News products={products} />
    </div>
  );
}

export default Home;
