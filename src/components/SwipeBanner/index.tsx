import { BannerContainer } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function SwipeBanner() {
  return (
    <BannerContainer>
      <>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://images.squarespace-cdn.com/content/v1/5c49e9f596d455d7d1f03bbc/1660315525351-C7IBC4UIYL9TEM9T7P91/Vintage+Myrtle+Beach+-+Main+Page+Shop+Banner.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.squarespace-cdn.com/content/v1/5c49e9f596d455d7d1f03bbc/1695842797413-JL77F2XJKNNBIK25Y62K/HS+SHOP+NOW.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.tcdn.com.br/img/img_prod/1080169/1689268727_banner_vero_ok.png" />
          </SwiperSlide>
        </Swiper>
      </>
    </BannerContainer>
  );
}

export default SwipeBanner;
