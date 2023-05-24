import Slider, { Settings } from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Movie } from "../interfaces/Movie";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Poster from "./Poster";

// const Poster = ({ cover, title }: Movie, index: number) => (
  
// );

// interface para a tipagem
interface Direction {
  directionType: 'left' | 'rigth';
}

const StickArrow = ({ directionType }: Direction, onClick?: () => void) => (
  <button type='button' className={`absolute w-16 h-full z-10 bg-black bg-opacity-50 top-0 ${
    directionType === 'rigth' ? 'right-0' : 'left-0'
  }`}>
    <FontAwesomeIcon icon={directionType === 'rigth' ? faChevronRight : faChevronLeft} size='3x' color='#fff' />
  </button>
)

interface CarouselProps {
  title: string;
  data?: Movie[]
}

const Carousel = ({ title, data }: CarouselProps) => {
  const settings: Settings = {
    infinite: true,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: <StickArrow directionType='left' />,
    nextArrow: <StickArrow directionType='rigth' />,
  };

  return (
    <section className="carousel">
      <h2 className="relative z-10 font-bold text-2xl ml-8 mb-4">{title}</h2>
     
      <Slider className="relative mb-8" {...settings}>
        {data?.map((movie, key) =>  <Poster title={movie.title} cover={movie.cover} key={key}/>)}
      </Slider>
    </section>
  )
}

export default Carousel;