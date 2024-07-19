import { Carousel } from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../App.css'
const SlideBar = () => {
    return (
        <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            interval={2000}
            className="custom-carousel"
             >
            <div>
                <img src="https://cdn-www.angrymiao.com/am_afa_r2/am_afa_r2_04.png" alt="Slide 3" className="carousel-image" />
            </div>
            <div>
                <img src="https://cdn-www.angrymiao.com/am_afa_r2/am_afa_r2_10.png" alt="Slide 3" className="carousel-image" />
            </div>
            <div>
                <img src="https://cdn-www.angrymiao.com/am_afa_r2/am_afa_r2_16.png" alt="Slide 3" className="carousel-image" />
            </div>
        </Carousel>
    )
}

export default SlideBar