import React, { Component } from "react"
import styles from './ImageCarousel2.module.scss';
import classnames from "classnames/bind";
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const cx = classnames.bind(styles);
const appUrl = process.env.NEXT_PUBLIC_APP_URL;
function ImageCarousel2(props) {
    const title = props.title || '';
    const data = props.data || '';
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        autoplaySpeed:5000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],       
    };
    return (
        <div className={cx("imageCarousel2")}>
            <div className={cx("frameBox")}>
                <div className={cx("carousel")}>
                    <div className={cx("title")}>{title}</div>
                    <Slider {...settings}>                    
                        <div className={cx("box")}>
                            <a href="#">
                                <div className={cx("img")}>
                                    <img src={`${appUrl}/golden/images/carousel-img2.jpg`} alt="logo" width={330} height={264} />
                                </div>
                                <div className={cx("txtBox")}>
                                    <div className={cx("name")}>圖輯名稱</div>
                                    <div className={cx("txt")}>圖輯文字圖輯文字圖輯文字圖輯文字圖輯文字</div> 
                                </div>
                            </a>
                        </div>
                        <div className={cx("box")}>
                            <a href="#">
                                <div className={cx("img")}>
                                    <img src={`${appUrl}/golden/images/carousel-img2.jpg`} alt="logo" width={330} height={264} />
                                </div>
                                <div className={cx("txtBox")}>
                                    <div className={cx("name")}>圖輯名稱</div>
                                    <div className={cx("txt")}>圖輯文字圖輯文字圖輯文字圖輯文字圖輯文字</div> 
                                </div>                         
                            </a>
                        </div>
                        <div className={cx("box")}>
                            <a href="#">
                                <div className={cx("img")}>
                                    <img src={`${appUrl}/golden/images/carousel-img2.jpg`} alt="logo" width={330} height={264} />
                                </div>
                                <div className={cx("txtBox")}>
                                    <div className={cx("name")}>圖輯名稱</div>
                                    <div className={cx("txt")}>圖輯文字圖輯文字圖輯文字圖輯文字圖輯文字</div> 
                                </div>                          
                            </a>
                        </div>
                        <div className={cx("box")}>
                            <a href="#">
                                <div className={cx("img")}>
                                    <img src={`${appUrl}/golden/images/carousel-img2.jpg`} alt="logo" width={330} height={264} />
                                </div>
                                <div className={cx("txtBox")}>
                                    <div className={cx("name")}>圖輯名稱</div>
                                    <div className={cx("txt")}>圖輯文字圖輯文字圖輯文字圖輯文字圖輯文字</div> 
                                </div>                          
                            </a>
                        </div>
                        <div className={cx("box")}>
                            <a href="#">
                                <div className={cx("img")}>
                                    <img src={`${appUrl}/golden/images/carousel-img2.jpg`} alt="logo" width={330} height={264} />
                                </div>
                                <div className={cx("txtBox")}>
                                    <div className={cx("name")}>圖輯名稱</div>
                                    <div className={cx("txt")}>圖輯文字圖輯文字圖輯文字圖輯文字圖輯文字</div> 
                                </div>                         
                            </a>
                        </div>
                        <div className={cx("box")}>
                            <a href="#">
                                <div className={cx("img")}>
                                    <img src={`${appUrl}/golden/images/carousel-img2.jpg`} alt="logo" width={330} height={264} />
                                </div>
                                <div className={cx("txtBox")}>
                                    <div className={cx("name")}>圖輯名稱</div>
                                    <div className={cx("txt")}>圖輯文字圖輯文字圖輯文字圖輯文字圖輯文字</div> 
                                </div>
                            </a>
                        </div>
                    </Slider>
                </div>            
            </div>
        </div>
    )
}
export default ImageCarousel2;