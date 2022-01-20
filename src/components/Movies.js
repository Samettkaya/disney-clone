import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color:"black",fontSize:"25px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"  }}
      onClick={onClick}
    />
  );
}

const movies =[
  {
    id:1,
    image:"https://lumiere-a.akamaihd.net/v1/images/image_659514fa.jpeg?region=0,0,540,810&width=320",
    title:"Doctor Strange Çoklu Evren Çılgınlığında"
  },
  {
    id:2,
    image:"https://lumiere-a.akamaihd.net/v1/images/image_dc3ddde3.jpeg?region=0,0,540,810&width=320",
    title:"Işıkyılı"
  },
  {
    id:3,
    image:" https://lumiere-a.akamaihd.net/v1/images/image_e2c28997.jpeg?region=0,0,540,810&width=320",
    title:"Robot Ron: Bir Sorun Var"
  },
  {
    id:4,
    image:" https://lumiere-a.akamaihd.net/v1/images/image_7a8f2ae5.jpeg?region=0,0,540,810&width=320",
    title:"Kırmızı"
  },
  {
    id:5,
    image:" https://lumiere-a.akamaihd.net/v1/images/image_6235003b.jpeg?region=0,0,540,810&width=320",
    title:"Shang-Chi ve 10 Halka Efsanesi"
  },
  {
    id:6,
    image:"https://lumiere-a.akamaihd.net/v1/images/image_a9ff50df.jpeg?region=0,0,540,810&width=320",
    title:"Jungle Cruise"
  },
  {
    id:7,
    image:"",
    title:""
  },
  {
    id:8,
    image:"",
    title:""
  },
  {
    id:9,
    image:"",
    title:""
  },
  {
    id:10,
    image:"",
    title:""
  }
 
]

function Movies() {

  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    speed: 200,
    nextArrow: < SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
  return (
    <div className="px-[60px] py-10 bg-[#F1F2F3]">
      <h2 className="text-center text-3xl mb-5"> Filmler </h2>
      <Slider className="" {...settings}>
      {movies.map((movie) => (
         <div className="  px-3">
               <figure className="overflow-hidden rounded-md">
                  <img src={movie.image} className="  rounded-md cursor-pointer  hover:scale-105 transition delay-150 duration-300 ease-in  "/>
               </figure>
         <h3 className="mt-3 font-semibold text-lg hover:text-[#0077DA] cursor-pointer">{movie.title}</h3>
       </div>
      ))}
      </Slider>
    </div>
  );
}

export default Movies;
