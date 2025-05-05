import React, { useRef, useState, useEffect } from 'react';
import styles from './Header.module.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles);
const appUrl = process.env.NEXT_PUBLIC_APP_URL;

const Header = (props) => {
    const pageName = props.pageName;
    const menu = props.menu;
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(0 < window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>            
            <div className={cx("menu" , isScrolled ? 'act' : '' )}>
                <nav>
                    <div className={cx("logo")}>
                        <a href='https://news.tvbs.com.tw/' target='_blank' >
                            <img src={`${appUrl}/golden/images/${isScrolled ? 'logo_tvbs_color.webp' : 'logo_tvbs.webp'}`} alt="logo" width={80} height={42} />
                        </a>
                    </div>
                    <div className={cx("list")}>
                        <ul>
                            {menu?.map((item, index) => (
                                <li key={index}>
                                    <a href={`${item.url}`} className={cx(item.name === pageName ? 'act' : '')}>
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
