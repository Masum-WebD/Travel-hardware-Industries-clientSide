import React,{useState,useEffect} from "react"
import Slider from "react-slick";

const Brand =()=>{
    const [brands,setBrands]=useState([])
    useEffect(()=>{
        fetch('Brand.json')
        .then(res=>res.json())
        .then(data =>setBrands(data))
    },[])
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <div className="mx-12 mt-10">
            <Slider {...settings} >        
        {brands.map((brand) => <div className="card bordered m-1  p-10 hover:p-5  ">
                <img src={brand.img} alt="" />
            </div>)}
      </Slider >
        </div>
    )
}
export default Brand