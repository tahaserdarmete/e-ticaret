import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="flex! items-center bg-gray-200 px-6 gap-5">
          <div className="">
            <div className="text-5xl font-bold">Popüler Ayakkabılar</div>
            <div className="text-lg my-4 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              quod, voluptates, corrupti .
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[100px] h-8 flex items-center justify-center bg-gray-300">
              incele
            </div>
          </div>
          <img
            className="w-100 h-100"
            src="https://img.pikbest.com/png-images/20251004/stylish-red-shoe-for-trendy-athletic-lifestyle_11916611.jpg!sw800"
            alt="slider-1"
          />
        </div>

        <div className="flex! items-center bg-gray-200 px-6 gap-5">
          <div className="">
            <div className="text-5xl font-bold">Popüler Ayakkabılar</div>
            <div className="text-lg my-4 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              quod, voluptates, corrupti .
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[100px] h-8 flex items-center justify-center bg-gray-300">
              incele
            </div>
          </div>
          <img
            className="w-100 h-100"
            src="https://shop.porsche.com.tr/images/thumbs/0000231_spor-ayakkabi_800.png"
            alt="slider-2"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
