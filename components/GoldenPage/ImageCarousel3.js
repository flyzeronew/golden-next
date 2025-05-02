import React, { Component } from "react"
import styles from './ImageCarousel3.module.scss';
import classnames from "classnames/bind";
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const cx = classnames.bind(styles);
const appUrl = process.env.NEXT_PUBLIC_APP_URL;
function ImageCarousel(props) {
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
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className={cx("imageCarousel3")}>
            <div className={cx("frameBox")}>
                <div className={cx("carousel")}>
                    <div className={cx("title")}>{title}</div>
                    <Slider {...settings}>
                    
                        <div className={cx("box")}>
                            <a href="#">
                                <div className={cx("img")}>
                                    <img src={`${appUrl}/golden/images/carousel-img.jpg`} alt="logo" width={330} height={264} />
                                </div>
                                <div className={cx("txt")}>2024金曲獎頒獎典禮亮點 ！ 線上看「表演嘉賓、頒獎陣容」精彩看點立刻懂！</div>
                            </a>
                        </div>
                        <div className={cx("box")}>
                            <a href="#">
                                <div className={cx("img")}>
                                    <img src={`${appUrl}/golden/images/carousel-img.jpg`} alt="logo" width={330} height={264} />
                                </div>
                                <div className={cx("txt")}>2024金曲獎頒獎典禮亮點 ！ 線上看「表演嘉賓、頒獎陣容」精彩看點立刻懂！</div>
                            </a>
                        </div>
                        <div className={cx("box")}>
                            <a href="#">
                                <div className={cx("img")}>
                                    <img src={`${appUrl}/golden/images/carousel-img.jpg`} alt="logo" width={330} height={264} />
                                </div>
                                <div className={cx("txt")}>2024金曲獎頒獎典禮亮點 ！ 線上看「表演嘉賓、頒獎陣容」精彩看點立刻懂！</div>
                            </a>
                        </div>
                        <div className={cx("box")}>
                            <a href="#">
                                <div className={cx("img")}>
                                    <img src={`${appUrl}/golden/images/carousel-img.jpg`} alt="logo" width={330} height={264} />
                                </div>
                                <div className={cx("txt")}>2024金曲獎頒獎典禮亮點 ！ 線上看「表演嘉賓、頒獎陣容」精彩看點立刻懂！</div>
                            </a>
                        </div>
                        <div className={cx("box")}>
                            <a href="#">
                                <div className={cx("img")}>
                                    <img src={`${appUrl}/golden/images/carousel-img.jpg`} alt="logo" width={330} height={264} />
                                </div>
                                <div className={cx("txt")}>2024金曲獎頒獎典禮亮點 ！ 線上看「表演嘉賓、頒獎陣容」精彩看點立刻懂！</div>
                            </a>
                        </div>
                        <div className={cx("box")}>
                            <a href="#">
                                <div className={cx("img")}>
                                    <img src={`${appUrl}/golden/images/carousel-img.jpg`} alt="logo" width={330} height={264} />
                                </div>
                                <div className={cx("txt")}>2024金曲獎頒獎典禮亮點 ！ 線上看「表演嘉賓、頒獎陣容」精彩看點立刻懂！</div>
                            </a>
                        </div>
                    </Slider>
                </div>
                <div className={cx("moreBox")}>
                    <a href='#'>
                        <span>看更多</span>
                        <img src={`${appUrl}/golden/images/arrow_upward.svg`} alt="logo" width={16} height={16} />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default ImageCarousel;