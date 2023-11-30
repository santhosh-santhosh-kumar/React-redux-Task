import React from 'react'
import ProductCard from './ProductCard';
import Header from './Header';
import { useSelector } from 'react-redux';
const Home = () => {

    
    const {products} = useSelector(state => state.products)



  return (
    <div className='contianer-fluid'>
        <Header />
        <article className="py-5">
        <section className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols row-cols-md-2 row-cols-xl-4 justify-content-center">
            {
                
                products.map((item, index) => {
                    return <ProductCard product={item} key={index} />;
                  })
            }
          </div>
        </section>
      </article>

    </div>
  )
}

export default Home