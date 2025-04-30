import styles from './Sponsor.module.scss';
import classNames from 'classnames/bind';

function Sponsor() {
    const cx = classNames.bind(styles);
    const appUrl = process.env.NEXT_PUBLIC_APP_URL;
    return (
        <div className={cx("sponsorBox")}>
            <div className={cx("frameBox")}>
                <div className={cx("list")}>
                    <a href='https://supertaste.tvbs.com.tw/' target='_blank'>
                        <img src={`${appUrl}/golden/images/sponsor01.svg`} alt="img" width={128} height={64} />                  
                    </a>
                    <a href='https://health.tvbs.com.tw/' target='_blank'>
                        <img src={`${appUrl}/golden/images/sponsor02.svg`} alt="img" width={128} height={64} />                  
                    </a>
                    <a href='https://esg.tvbs.com.tw/' target='_blank'>
                        <img src={`${appUrl}/golden/images/sponsor03.svg`} alt="img" width={128} height={64} />                  
                    </a>
                    <a href='https://news.tvbs.com.tw/' target='_blank'>
                        <img src={`${appUrl}/golden/images/sponsor04.svg`} alt="img" width={128} height={64} />                  
                    </a>
                    <a href='https://woman.tvbs.com.tw/' target='_blank'>
                        <img src={`${appUrl}/golden/images/sponsor05.svg`} alt="img" width={128} height={64} />                  
                    </a>
                    <a href='https://supertaste.tvbs.com.tw/' target='_blank'>
                        <img src={`${appUrl}/golden/images/sponsor01.svg`} alt="img" width={128} height={64} />                  
                    </a>
                    <a href='https://health.tvbs.com.tw/' target='_blank'>
                        <img src={`${appUrl}/golden/images/sponsor02.svg`} alt="img" width={128} height={64} />                  
                    </a>
                    <a href='https://esg.tvbs.com.tw/' target='_blank'>
                        <img src={`${appUrl}/golden/images/sponsor03.svg`} alt="img" width={128} height={64} />                  
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Sponsor;
