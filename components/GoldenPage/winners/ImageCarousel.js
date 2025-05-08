import styles from './ImageCarousel.module.scss';
import classnames from "classnames/bind";
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const cx = classnames.bind(styles);
const appUrl = process.env.NEXT_PUBLIC_APP_URL;
function ImageCarousel(props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        autoplaySpeed:5000,
    };
    const items = Array(2).fill(null);

    const Item = ({ index }) => (
        <div className={cx("box")} key={index}>
            <a href="#">
                <div className={cx("award", "mo")}>得獎</div>
                <img
                    src={`${appUrl}/golden/images/focus-img02.jpg`}
                    alt="img"
                    width={900}
                    height={506}
                />
                <div className={cx("txtBox")}>
                    <div className={cx("award")}>得獎</div>
                    <div className={cx("txt")}>
                        {index !== undefined ? `${index + 1}` : ""}草東沒有派對《瓦合》
                    </div>
                </div>
            </a>
        </div>
    );

    return (
        <div className={cx("imgBox")}>
            {items.length > 1 ? (
                <Slider {...settings}>
                    {items.map((_, index) => (
                        <Item index={index} key={index} />
                    ))}
                </Slider>
            ) : (
                <Item />
            )}
        </div>
    )
}
export default ImageCarousel;