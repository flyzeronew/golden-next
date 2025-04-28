import styles from './Header.module.scss'
import classnames from 'classnames/bind'
import React, { useState, useEffect } from 'react';


const cx = classnames.bind(styles);
const appUrl = process.env.NEXT_PUBLIC_APP_URL;

const Header = (props) => {
    const menu = props.menu;
    
    return (
        <header className={cx("bgColor02")} >
            <div className={cx("menu")}>
                <nav>
                    <div className={cx("logo")}>
                        <a href='https://news.tvbs.com.tw/' target='_blank' >
                            <img src={`${appUrl}/golden/images/logo_tvbs.svg`} alt="logo" width={80} height={42} />
                        </a>
                    </div>
                    <div className={cx("list")}>
                        <ul>
                            <li>
                                <a href='#' className={cx("act")}>
                                    金曲36
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    獎項名單
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    金曲焦點
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
