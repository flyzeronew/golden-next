import React, { useRef, useState, useEffect } from 'react'
const appUrl = process.env.NEXT_PUBLIC_APP_URL;

function OverlayAd(props) {

    const [overlayAdHide, setOverlayAdHide] = useState(false); 
    const [isScrolled, setIsScrolled] = useState(false);
    const adUnit = props.adUnit;
    const projectName = props.projectName;
    
    useEffect(() => {

        if (typeof window !== 'undefined') {
            window.googletag = window.googletag || { cmd: [] }            
        }
        const adType ={
            id: '31610311',
            code:adUnit,
            type:adUnit,
            size: [
                [336, 280],
                [360, 540],
                [300, 250],
                [320, 480],
                [1, 1],
            ],
        };
        window.googletag = window.googletag || {cmd: []};
        googletag.cmd.push(() => {    
            googletag.defineSlot(`/31610311/news_m_index_popup`, [[336, 280],[360, 540],[300, 250],[320, 480],[1, 1],] , 'news_m_index_popup' ).addService(googletag.pubads());
            googletag.pubads().setTargeting('news_channel', `events/goldenmusic2025`);
            window.googletag.pubads().collapseEmptyDivs();
            googletag.enableServices();
            googletag.display('news_m_index_popup');
        });


        const handleScroll = () => {
            setIsScrolled(50 < window.scrollY && 1023 > window.innerWidth);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    function overlayAdClick() {
        setOverlayAdHide(true);
    }
    
    return (
        <div id="overlayAd" className={`old ${ true === overlayAdHide ? 'hide' : ''}`}>
            <div className="box">
                <div className="adBox">
                    <div className="xx" onClick={overlayAdClick}>
                        <img src={`${appUrl}/golden/images/close-btn.svg`} alt="xx" width={10} height={10} />
                    </div>
                    <div id="news_pc_index_top">
                        <a href='#'>
                            <img src={`${appUrl}/golden/images/360x540.jpg`} alt="ad" width={970} height={250} />
                        </a> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OverlayAd;