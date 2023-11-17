import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Sliders() {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <img
      className="mt-0 h-[600px] w-full object-cover"
      src="1.jpg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="mt-0 h-[600px] w-full object-cover"
      src="2.jpg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="mt-0 h-[600px] w-full object-cover"
      src="3.jpg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];
  return (
    <div>
      <AliceCarousel
        mouseTracking
        items={items}
        autoPlay={true}
        autoPlayInterval={2000}
      />
    </div>
  );
}

export default Sliders;
