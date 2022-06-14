import React from 'react'
import CardCategory from '../../components/CardCategory';
import CardRecommend from '../../components/CardRecommend';
import CarouselComponent from "../../components/Carousel";
import SearchBar from '../../components/SearchBar/searchBar';


function Home() {
  return (
    <div>
      <SearchBar/>
      <CarouselComponent/>
      <CardCategory/>
      <CardRecommend />
    </div>
  )
}

export default Home;
