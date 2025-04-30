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
                            <div className={cx("box")}>
                                <a href="#">
                                    <div className={cx("img")}>
                                        <img src={`${appUrl}/golden/images/carousel-img2.jpg`} alt="logo" width={330} height={264} />
                                        <div className={cx("txtBox")}>
                                            <div className={cx("name")}>圖輯名稱</div>
                                            <div className={cx("txt")}>圖輯文字圖輯文字圖輯文字圖輯文字圖輯文字</div> 
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className={cx("box")}>
                                <a href="#">
                                    <div className={cx("img")}>
                                        <img src={`${appUrl}/golden/images/carousel-img2.jpg`} alt="logo" width={330} height={264} />
                                        <div className={cx("txtBox")}>
                                            <div className={cx("name")}>圖輯名稱</div>
                                            <div className={cx("txt")}>圖輯文字圖輯文字圖輯文字圖輯文字圖輯文字</div> 
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className={cx("box")}>
                                <a href="#">
                                    <div className={cx("img")}>
                                        <img src={`${appUrl}/golden/images/carousel-img2.jpg`} alt="logo" width={330} height={264} />
                                        <div className={cx("txtBox")}>
                                            <div className={cx("name")}>圖輯名稱</div>
                                            <div className={cx("txt")}>圖輯文字圖輯文字圖輯文字圖輯文字圖輯文字</div> 
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className={cx("box")}>
                                <a href="#">
                                    <div className={cx("img")}>
                                        <img src={`${appUrl}/golden/images/carousel-img2.jpg`} alt="logo" width={330} height={264} />
                                        <div className={cx("txtBox")}>
                                            <div className={cx("name")}>圖輯名稱</div>
                                            <div className={cx("txt")}>圖輯文字圖輯文字圖輯文字圖輯文字圖輯文字</div> 
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className={cx("box")}>
                                <a href="#">
                                    <div className={cx("img")}>
                                        <img src={`${appUrl}/golden/images/carousel-img2.jpg`} alt="logo" width={330} height={264} />
                                        <div className={cx("txtBox")}>
                                            <div className={cx("name")}>圖輯名稱</div>
                                            <div className={cx("txt")}>圖輯文字圖輯文字圖輯文字圖輯文字圖輯文字</div> 
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className={cx("box")}>
                                <a href="#">
                                    <div className={cx("img")}>
                                        <img src={`${appUrl}/golden/images/carousel-img2.jpg`} alt="logo" width={330} height={264} />
                                        <div className={cx("txtBox")}>
                                            <div className={cx("name")}>圖輯名稱</div>
                                            <div className={cx("txt")}>圖輯文字圖輯文字圖輯文字圖輯文字圖輯文字</div> 
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </Slider>
                    </div>            
                </div>
            </div>

            <div className={cx("imageLightBox","show")}>
                <div className={cx("box")}>
                    <div className={cx("titleBox")}>
                        <div className={cx("title")}>金曲圖輯</div>
                        <div className={cx("xx")}>
                            <img src={`${appUrl}/golden/images/close-btn.svg`} alt="xx" width={30} height={30} />
                        </div>
                    </div>
                    <div className={cx("picList")}>
                        <Slider {...imageLightBoxSettings}>
                            <div className={cx("picBox")}>
                                <div className={cx("imgBox")}>
                                <img src={`${appUrl}/golden/images/esg02.jpg`} alt="logo" width={1920} height={1080} />
                                </div>
                                <div className={cx("txtBox")}>
                                    <div className={cx("nameBox")}>
                                        <div className={cx("name")}>女星紅毯</div>
                                        <div className={cx("page")}>
                                            第 <span>2</span>/<span>20</span> 筆 
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
                                    <img src={`${appUrl}/golden/images/esg02.jpg`} alt="logo" width={1920} height={1080} />
                                </div>
                                <div className={cx("txtBox")}>
                                    <div className={cx("nameBox")}>
                                        <div className={cx("name")}>女星紅毯</div>
                                        <div className={cx("page")}>
                                            第 <span>2</span>/<span>20</span> 筆 
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