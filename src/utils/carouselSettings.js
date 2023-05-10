const carouselSettings = {
  // dots: true,
  // centerMode: true,
  // centerPadding: true,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        infinite: true,
        dots: true,
      },
    },
  ],
};

export default carouselSettings;