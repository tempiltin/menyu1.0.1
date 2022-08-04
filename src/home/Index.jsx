
import Card from '../Components/Card/Card'
import ResAbout from '../Components/RestoranAbout/ResAbout'
import './swiper.css';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import ProdView from '../Components/ProdView/ProdView';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Index = () => {

  const [state, setState] = useState(false); // about page scale()
  let {id} = useParams();
  console.log(id);
// console.log(product);



  // const sendCart = {
  //   order_id: null,
  //   table_num: 2,
  //   people_number: 3,
  //   status: 1,
  //   paymant: 1,
  //   product: [
  //     {
  //       product_id: about.product_id,
  //       product_amount_id: 2,
  //       amount: 1
  //     },
  //   ]
  // }
  
  
  //https://github.com/tempiltin/menyu1.0.1.git




  const onSee = (e) => {
    alert('hello world')
    e.preventDefault();
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  };

  const removeButton = (e) => {
    e.preventDefault();
    if (state) {
      setState(false);
    } else {
      setState(true);

    }
  }




  return (
    <>
      <main className='home_page'>
        <ResAbout stolNum={12} resName={'Programmer'} />

       
              <div className="container" >
                <h2 className='category_name'>Categroy name</h2>
                <Swiper  slidesPerView={1.5} spaceBetween={30} pagination={{ clickable: true }} className="mySwiper">


                    <SwiperSlide >
                      <Card  onSee={onSee} />
                    </SwiperSlide>
        


                </Swiper>
              </div>
     

        <ProdView
          state={state}
          removeButton={removeButton}
        />
      </main>
    </>
  )
};

export default Index;