import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const appUrl = process.env.NEXT_PUBLIC_APP_URL;

const Footer = () => {
    return (
        <footer className={cx("footer")}>
            <div className={cx("frameBox")}>
                <div className={cx("logoBox")}>
                    <div className={cx("logo")}>
                        <a href='https://news.tvbs.com.tw/' target='_blank' >
                            <img src={`${appUrl}/golden/images/logo_tvbs.svg`} alt="logo" width={80} height={42} />
                        </a>
                    </div>
                    <div className={cx("community")}>
                        <a href='https://www.facebook.com/tvbsfb/' target='_blank' >
                            <img src={`${appUrl}/golden/images/footer-fb-img.svg`} alt="logo" width={32} height={32} />
                        </a>
                        <a href='https://www.youtube.com/channel/UC5nwNW4KdC0SzrhF9BXEYOQ' target='_blank' >
                            <img src={`${appUrl}/golden/images/footer-yt-img.svg`} alt="logo" width={32} height={32} />
                        </a>
                        <a href='https://page.line.me/tvbsnews?openQrModal=true' target='_blank' >
                            <img src={`${appUrl}/golden/images/footer-ig-img.svg`} alt="logo" width={32} height={32} />
                        </a>
                        <a href='https://www.threads.com/@tvbslivenews?hl=zh-tw' target='_blank' >
                            <img src={`${appUrl}/golden/images/footer-threads-img.svg`} alt="logo" width={32} height={32} />
                        </a>
                    </div>
                </div>
                <div className={cx("copyright")}>
                    © TVBS Media Inc. All Rights Reserved 
                </div>
            </div>            
        </footer>
    );
};

export default Footer;
