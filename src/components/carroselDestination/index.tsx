import DestinationCard from '@components/destinationCard';
import { DestinationMock } from 'mock/destination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CarrosselDestinationStyle } from './style';

const CarrosselDestination = () => {
  return (
    <CarrosselDestinationStyle>
      <Swiper
        slidesPerView={1.4}
        breakpoints={
          {
            2000: {
              slidesPerView: 7.5
            },
            1800: {
              slidesPerView: 5.5
            },
            1300: {
              slidesPerView: 4.5
            },
            1024: {
              slidesPerView: 3.5
            },
            768: {
              slidesPerView: 2.5
            },
          }
        }
        spaceBetween={30}
        className="mySwiper"
      >
        {DestinationMock.map(cards => (
          <SwiperSlide key={cards.id}>
            <DestinationCard title={cards.name} localization={cards.localization} ratting={cards.ratting} image={cards.image}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </CarrosselDestinationStyle>
  )
}

export default CarrosselDestination