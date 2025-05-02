import styles from './ImageCarousel2.module.scss'
import classnames from "classnames/bind"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import React, {useRef, useState, useEffect } from 'react';
const cx = classnames.bind(styles);
const appUrl = process.env.NEXT_PUBLIC_APP_URL;

function ImageCarousel2(props) {
    const [lightBoxShow, setLightBoxShow] = useState(false);
    const lightboxSliderRef = useRef(null);
    const [imageSize, setImageSize] = useState({});

    const [imageWidth, setImageWidth] = useState(0);
    const [imageHeight, setImageHeight] = useState(0);

    function lightBoxShowClick() {
        setLightBoxShow(true);
    }    
    function lightBoxHideClick() {
        setLightBoxShow(false);
    }
    function handleOpenLightbox() {
        lightboxSliderRef.current?.slickGoTo(0); 
    }

    function handleImageLoad(event) {
        console.log(event);
        const img = event.target;
        setImageSize({
            width: img.naturalWidth,
            height: img.naturalHeight,
        });

    };

    useEffect(() => {
        
    }, []);
console.log(imageWidth);
    
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

    const imageLightBoxSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed:5000,
    };

    return (
        <>
            <div className={cx("imageCarousel2")}>
                <div className={cx("frameBox")}>
                    <div className={cx("carousel")}>
                        <div className={cx("title")}>{title}</div>
                        <Slider {...settings}>                    
                            <div 
                                className={cx("box")} 
                                onClick={() => {
                                    lightBoxShowClick();
                                    handleOpenLightbox();
                                }}
                            >
                                <div className={cx("img")}>
                                    <img src={`${appUrl}/golden/images/carousel-img2.jpg`} alt="logo" width={330} height={264}
                                        onLoad={(e) => {
                                            setImageWidth(e.target.naturalWidth);
                                            setImageHeigh(e.target.naturalWidth);
                                        }}
                                    
                                    />
                                    <div className={cx("txtBox")}>
                                        <div className={cx("name")}>圖輯名稱</div>
                                        <div className={cx("txt")}>1.圖輯文字圖輯文字圖輯文字圖輯文字圖輯文字</div> 
                                    </div>
                                </div>
                            </div>
                            <div 
                                className={cx("box")} 
                                onClick={() => {
                                    lightBoxShowClick();
                                    handleOpenLightbox();
                                }}
                            >
                                <div className={cx("img")}>
                                    <img src={`${appUrl}/golden/images/carousel-img2.jpg`} alt="logo" width={330} height={264} />
                                    <div className={cx("txtBox")}>
                                        <div className={cx("name")}>圖輯名稱</div>
                                        <div className={cx("txt")}>2.圖輯文字圖輯文字圖輯文字圖輯文字圖輯文字</div> 
                                    </div>
                                </div>
                            </div>
                            <div 
                                className={cx("box")} 
                                onClick={() => {
                                    lightBoxShowClick();
                                    handleOpenLightbox();
                                }}
                            >
                                <div className={cx("img")}>
                                    <img src={`${appUrl}/golden/images/carousel-img2.jpg`} alt="logo" width={330} height={264} />
                                    <div className={cx("txtBox")}>
                                        <div className={cx("name")}>圖輯名稱</div>
                                        <div className={cx("txt")}>3.圖輯文字圖輯文字圖輯文字圖輯文字圖輯文字</div> 
                                    </div>
                                </div>
                            </div>
                            <div 
                                className={cx("box")} 
                                onClick={() => {
                                    lightBoxShowClick();
                                    handleOpenLightbox();
                                }}
                            >
                                <div className={cx("img")}>
                                    <img src={`${appUrl}/golden/images/carousel-img2.jpg`} alt="logo" width={330} height={264} />
                                    <div className={cx("txtBox")}>
                                        <div className={cx("name")}>圖輯名稱</div>
                                        <div className={cx("txt")}>4.圖輯文字圖輯文字圖輯文字圖輯文字圖輯文字</div> 
                                    </div>
                                </div>
                            </div>
                            <div 
                                className={cx("box")} 
                                onClick={() => {
                                    lightBoxShowClick();
                                    handleOpenLightbox();
                                }}
                            >
                                <div className={cx("img")}>
                                    <img src={`${appUrl}/golden/images/carousel-img2.jpg`} alt="logo" width={330} height={264} />
                                    <div className={cx("txtBox")}>
                                        <div className={cx("name")}>圖輯名稱</div>
                                        <div className={cx("txt")}>5.圖輯文字圖輯文字圖輯文字圖輯文字圖輯文字</div> 
                                    </div>
                                </div>
                            </div>
                            <div 
                                className={cx("box")} 
                                onClick={() => {
                                    lightBoxShowClick();
                                    handleOpenLightbox();
                                }}
                            >
                                <div className={cx("img")}>
                                    <img src={`${appUrl}/golden/images/carousel-img2.jpg`} alt="logo" width={330} height={264} />
                                    <div className={cx("txtBox")}>
                                        <div className={cx("name")}>圖輯名稱</div>
                                        <div className={cx("txt")}>6.圖輯文字圖輯文字圖輯文字圖輯文字圖輯文字</div> 
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>            
                </div>
            </div>

            <div className={cx("imageLightBox" ,true === lightBoxShow ? "show" : '')}>
                <div className={cx("box")}>
                    <div className={cx("titleBox")}>
                        <div className={cx("title")}>金曲圖輯</div>
                        <div className={cx("xx")} onClick={lightBoxHideClick}>
                            <img src={`${appUrl}/golden/images/close-btn.svg`} alt="xx" width={30} height={30} />
                        </div>
                    </div>
                    <div className={cx("picList")}>
                        <Slider 
                            ref={lightboxSliderRef}
                            {...imageLightBoxSettings} 
                        >
                            <div className={cx("picBox")} >
                                <div className={cx("imgBox")}>
                                    <div className={cx("bg")} style={{ 
                                        background: `url(${appUrl}/golden/images/carousel-img2.jpg) no-repeat center center`,
                                        backgroundSize:'100% 100%',
                                    }}></div>
                                    <div className={cx("img")}>
                                        <img src={`${appUrl}/golden/images/carousel-img2.jpg`} alt="img" width={1920} height={1080} />
                                    </div>
                                </div>
                                <div className={cx("txtBox")}>
                                    <div className={cx("nameBox")}>
                                        <div className={cx("name")}>女星紅毯</div>
                                        <div className={cx("page")}>
                                            第 <span>1</span>/<span>3</span> 筆 
                                        </div>
                                    </div>
                                    <div className={cx("txt")}>
                                        入圍本屆本屆最佳華語女歌手獎的孫盛希，一襲黑色削肩禮服搭配Boucheron珠寶性感現身。入圍本屆本屆最佳華語女歌手獎的孫盛希，一襲黑色削肩禮服搭配Boucheron珠寶性感現身。
                                    </div>
                                    <div className={cx("time")}>
                                        2024.06.30
                                    </div>
                                </div>
                            </div>

                            <div className={cx("picBox")}>
                                <div className={cx("imgBox")}>
                                    <div className={cx("bg")} style={{ 
                                        background: `url(${appUrl}/golden/images/esg01.jpg) no-repeat center center`,
                                        backgroundSize:'100% 100%',
                                    }}></div>
                                    <div className={cx("img")}>
                                        <img src={`${appUrl}/golden/images/esg01.jpg`} alt="img" width={1920} height={1080} />
                                    </div>
                                </div>
                                <div className={cx("txtBox")}>
                                    <div className={cx("nameBox")}>
                                        <div className={cx("name")}>女星紅毯</div>
                                        <div className={cx("page")}>
                                            第 <span>2</span>/<span>3</span> 筆 
                                        </div>
                                    </div>
                                    <div className={cx("txt")}>
                                        入圍本屆本屆最佳華語女歌手獎的孫盛希，一襲黑色削肩禮服搭配Boucheron珠寶性感現身。入圍本屆本屆最佳華語女歌手獎的孫盛希，一襲黑色削肩禮服搭配Boucheron珠寶性感現身。
                                    </div>
                                    <div className={cx("time")}>
                                        2024.06.30
                                    </div>
                                </div>
                            </div>

                            <div className={cx("picBox")}>
                                <div className={cx("imgBox")}>
                                    <div className={cx("bg")} style={{ 
                                        background: `url(${appUrl}/golden/images/carousel-img.jpg) no-repeat center center`,
                                        backgroundSize:'100% 100%',
                                    }}></div>
                                    <div className={cx("img")}>
                                        <img src={`${appUrl}/golden/images/carousel-img.jpg`} alt="img" width={1920} height={1080} />
                                    </div>
                                </div>
                                <div className={cx("txtBox")}>
                                    <div className={cx("nameBox")}>
                                        <div className={cx("name")}>女星紅毯</div>
                                        <div className={cx("page")}>
                                            第 <span>3</span>/<span>3</span> 筆 
                                        </div>
                                    </div>
                                    <div className={cx("txt")}>
                                        入圍本屆本屆最佳華語女歌手獎的孫盛希，一襲黑色削肩禮服搭配Boucheron珠寶性感現身。入圍本屆本屆最佳華語女歌手獎的孫盛希，一襲黑色削肩禮服搭配Boucheron珠寶性感現身。
                                        入圍本屆本屆最佳華語女歌手獎的孫盛希，一襲黑色削肩禮服搭配Boucheron珠寶性感現身。入圍本屆本屆最佳華語女歌手獎的孫盛希，一襲黑色削肩禮服搭配Boucheron珠寶性感現身。
                                        入圍本屆本屆最佳華語女歌手獎的孫盛希，一襲黑色削肩禮服搭配Boucheron珠寶性感現身。入圍本屆本屆最佳華語女歌手獎的孫盛希，一襲黑色削肩禮服搭配Boucheron珠寶性感現身。
                                    </div>
                                    <div className={cx("time")}>
                                        2024.06.30
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ImageCarousel2;