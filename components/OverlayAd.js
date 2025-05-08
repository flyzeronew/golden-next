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
        function adRun(params) {
            
        }
        window.googletag = window.googletag || {cmd: []};
        if (window.googletag) {
            googletag.cmd.push(() => {
                const slot = googletag.defineSlot(`/${adType.id}/${adType.code}`, adType.size , adType.type);
                if (slot) {
                    slot.addService(googletag.pubads());
                    googletag.pubads().setTargeting('news_channel', `events/${projectName}`);
                    window.googletag.pubads().collapseEmptyDivs();
                    googletag.enableServices();
                    googletag.display(adType.type);
                } else {
                    console.error("Failed to define the ad slot.");
                }
            });
        } else {
            console.error("googletag object is not available.");
        }

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
                    <div id="news_m_index_popup">
                        <img src={`${appUrl}/golden/images/360x540.jpg`} alt="ad" width={970} height={250} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OverlayAd;