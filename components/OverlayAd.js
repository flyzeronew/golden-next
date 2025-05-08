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
            code:'news_m_index_popup_test',
            type:adUnit,
            size: [
                [336, 280],
                [360, 540],
                [300, 250],
                [320, 480],
                [1, 1],
            ],
        };
        
        function adRun(adData) {
            window.googletag = window.googletag || {cmd: []};
            if (window.googletag) {
                googletag.cmd.push(() => {
                    const slot = googletag.defineSlot(`/${adData.id}/${adData.code}`, adData.size , adData.type);
                    if (slot) {
                        slot.addService(googletag.pubads());
                        googletag.pubads().setTargeting('news_channel', `events/${projectName}`);
                        window.googletag.pubads().collapseEmptyDivs();
                        googletag.enableServices();
                        googletag.display(adData.type);


                        googletag.pubads().addEventListener('slotRenderEnded', function (event) {
                            if (event.slot.getSlotElementId() === adData.type) {
                                const adElement = document.getElementById('overlayAd');
                                if (event.isEmpty) {
                                    console.log(`❌ 廣告未填充：${adData.type}`);
                                    adElement.style.display = 'none';
                                } else {
                                    console.log(`✅ 廣告已填充：${adData.type}`);
                                    adElement.style.display = 'block';
                                }
                            }
                        });
                        
                    }
                });
            } else {
                console.error("googletag object is not available.");
            }
        }

        adRun(adType);

        const handleScroll = () => {
            setIsScrolled(50 < window.scrollY && 1023 > window.innerWidth);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    function overlayAdHideClick() {
        setOverlayAdHide(true);
    }

    return (
        <div id="overlayAd" className={`old ${ true === overlayAdHide ? 'hide' : ''}`}>
            <div className="box">
                <div className="adBox">
                    <div className="xx" onClick={overlayAdHideClick}>
                        <img src={`${appUrl}/golden/images/close-btn.svg`} alt="xx" width={10} height={10} />
                    </div>
                    <div id="news_m_index_popup"></div>
                </div>
            </div>
        </div>
    )
}
export default OverlayAd;