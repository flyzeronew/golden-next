import React, { useRef, useState, useEffect } from 'react'
const appUrl = process.env.NEXT_PUBLIC_APP_URL;

function FixedBottomAd(props) {

    const [bottomAdHide, setBottomAdHide] = useState(false); 
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(50 < window.scrollY && 1023 > window.innerWidth);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    function bottomAdHideClick() {
        setBottomAdHide(true);
        document.querySelector('footer').style.padding = '50px 0';
    }
    
    return (
        <div className={
            `fixedBottomAd ad-mo 
                ${true===bottomAdHide ? 'hide' : ''}
                ${true===isScrolled ? 'show' : ''}
            `}>
            <div className="box">
                <div className="xx" onClick={bottomAdHideClick} >
                    <img src={`${appUrl}/golden/images/close-btn-black.svg`} alt="xx" width={10} height={10} />
                </div>
                <div id="news_m_index_bottom">
                    <a href='#'>
                        <img src={`${appUrl}/golden/images/ad320x100.jpg`} alt="ad" width={320} height={100} />
                    </a> 
                </div>
            </div>
        </div>
    )
}
export default FixedBottomAd;