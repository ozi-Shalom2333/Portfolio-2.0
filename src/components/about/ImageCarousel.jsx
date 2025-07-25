import { Carousel } from 'antd';

const images = [
  {
    src: "/assets/photo_1_2025-07-22_14-06-38.jpg",
    caption: "All night coding with my fellow devs, #noSleepForTheWicked",
  },
  {
    src: "/assets/photo_2_2025-07-22_14-06-38.jpg",
    caption: "Group Picture with my fellow devs",
  },
  {
    src: "/assets/photo_3_2025-07-22_14-06-38.jpg",
    caption: "Posing with my certificate",
  },
  {
    src: "/assets/photo_4_2025-07-22_14-06-38.jpg",
    caption: "Me and my teammates for ArtisanAid",
  },
  {
    src: "/assets/photo_6_2025-07-22_14-06-38.jpg",
    caption: "Happy moments after the ceremony",
  },
  {
    src: "/assets/photo_11_2025-07-22_14-06-38.jpg",
    caption: "Me and my teammates after pitching our project ArtisanAid",
  }
];

const ImageCarousel = () => (
  <div data-aos="zoom-in" data-aos-delay="1000" style={{ width: '100%', maxWidth: '700px', margin: '0 auto' }}>
    <Carousel autoplay>
      {images.map((img, index) => (
        <div key={index}>
          <img 
            src={img.src} 
            alt={`slide-${index}`} 
            style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px' }}
          />
          <p style={{fontWeight:'700', width:'100%', textAlign:'center', margin:'1rem', fontStyle:'"Syne", sans-serif'}}>{img.caption}</p>
        </div>
      ))}
    </Carousel>
  </div>
);

export default ImageCarousel;
