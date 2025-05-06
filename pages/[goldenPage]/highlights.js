import { usePathname } from 'next/navigation'
import LazyLoad from 'react-lazyload'
import CustomHead from '../../components/CustomHead'
import ImageCarousel4 from '../../components/GoldenPage/ImageCarousel4'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from './highlights.module.scss'
import classNames from 'classnames/bind'


const  Highlights = (props) => {
  const cx = classNames.bind(styles);
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  const menu = props.menu;  
  const pathname = usePathname();
  const url = `${appUrl}${pathname}`;
  const pageName = 'highlights';

  const ogImage = `${appUrl}/golden/images/og-img.jpg`;

  return (
    <div className="container" >
      <CustomHead 
        title='2025金曲獎焦點新聞｜人物專訪、紅毯亮點、頒獎典禮表演一次看'
        description='金曲獎表演,金曲獎主持人,金曲獎焦點,金曲獎新聞,金曲獎紅毯,金曲獎星光大道,2025金曲獎頒獎典禮,2025金曲獎,第36屆金曲獎'
        keywords='2025金曲獎新聞不漏接！《TVBS新聞網》專訪入圍歌手，看主持人精彩橋段、頒獎典禮表演、紅毯亮點、得獎感言與話題事件，第36屆金曲獎即時更新新聞一次掌握！'
        url={url}
        ogTitle='2025金曲獎焦點新聞｜人物專訪、紅毯亮點、頒獎典禮表演一次看'
        ogImage={ogImage}
      />
      <Header menu={menu} pageName={pageName} />

      <main className={cx("highlightsPage")}>
        <article>
          <section>
            <div className={cx("focusBox")}>
              <div className={cx("frameBox")}>
                <div className={cx("title","dark")}>焦點新聞</div>
                <div className={cx("firstNews")}>
                  <a href='#'>
                    <div className={cx("imgBox")}>
                      <div className={cx("img")}>
                        <LazyLoad 
                          height={359} 
                          offset={100} 
                          placeholder={
                            <img src={`${appUrl}/golden/images/lazy-img.webp`} alt="預設圖" width={500} height={281} />
                          } 
                          once 
                        >
                          <img src={`${appUrl}/golden/images/focus-img01.jpg`} alt="img" width={640} height={359} />
                        </LazyLoad>
                      </div>
                    </div>
                    <div className={cx("txtBox")}>
                      <div className={cx("time")}>2024.06.30 </div>
                      <div className={cx("txt")}>2024金曲獎頒獎典禮亮點 ！ 線上看「表演嘉賓、頒獎陣容」精彩看點立2024金曲獎頒獎典禮亮點 ！ 線上看「表演嘉賓、頒獎陣容」精彩看點立</div>
                    </div>
                  </a>
                </div>
                <div className={cx("list")}>
                  <ul>

                    <li>
                      <a href='#'>
                        <div className={cx("imgBox")}>
                          <div className={cx("img")}>
                            <LazyLoad 
                              height={359} 
                              offset={100} 
                              placeholder={
                                <img src={`${appUrl}/golden/images/lazy-img.webp`} alt="預設圖" width={500} height={281} />
                              } 
                              once 
                            >
                              <img src={`${appUrl}/golden/images/esg02.jpg`} alt="img" width={640} height={359} />
                            </LazyLoad>                          
                          </div>
                        </div>
                        <div className={cx("txtBox")}>
                          <div className={cx("time")}>2024.06.30 </div>
                          <div className={cx("txt")}>2024金曲獎頒獎典禮亮點 ！ 線上看「表演嘉賓、頒獎陣容」精彩看點立</div>
                        </div>
                      </a>
                    </li>
                    
                    <li>
                      <a href='#'>
                        <div className={cx("imgBox")}>
                          <div className={cx("img")}>
                            <LazyLoad 
                              height={359} 
                              offset={100} 
                              placeholder={
                                <img src={`${appUrl}/golden/images/lazy-img.webp`} alt="預設圖" width={500} height={281} />
                              } 
                              once 
                            >
                              <img src={`${appUrl}/golden/images/esg02.jpg`} alt="img" width={640} height={359} />
                            </LazyLoad> 
                          </div>
                        </div>
                        <div className={cx("txtBox")}>
                          <div className={cx("time")}>2024.06.30 </div>
                          <div className={cx("txt")}>2024金曲獎頒獎典禮亮點 ！ 線上看「表演嘉賓、頒獎陣容」精彩看點立</div>
                        </div>
                      </a>
                    </li>                    
                    
                    <li>
                      <a href='#'>
                        <div className={cx("imgBox")}>
                          <div className={cx("img")}>
                            <LazyLoad 
                              height={359} 
                              offset={100} 
                              placeholder={
                                <img src={`${appUrl}/golden/images/lazy-img.webp`} alt="預設圖" width={500} height={281} />
                              } 
                              once 
                            >
                              <img src={`${appUrl}/golden/images/esg02.jpg`} alt="img" width={640} height={359} />
                            </LazyLoad> 
                          </div>
                        </div>
                        <div className={cx("txtBox")}>
                          <div className={cx("time")}>2024.06.30 </div>
                          <div className={cx("txt")}>2024金曲獎頒獎典禮亮點 ！ 線上看「表演嘉賓、頒獎陣容」精彩看點立</div>
                        </div>
                      </a>
                    </li>
                    
                    <li>
                      <a href='#'>
                        <div className={cx("imgBox")}>
                          <div className={cx("img")}>
                            <LazyLoad 
                              height={359} 
                              offset={100} 
                              placeholder={
                                <img src={`${appUrl}/golden/images/lazy-img.webp`} alt="預設圖" width={500} height={281} />
                              } 
                              once 
                            >
                              <img src={`${appUrl}/golden/images/esg02.jpg`} alt="img" width={640} height={359} />
                            </LazyLoad> 
                          </div>
                        </div>
                        <div className={cx("txtBox")}>
                          <div className={cx("time")}>2024.06.30 </div>
                          <div className={cx("txt")}>2024金曲獎頒獎典禮亮點 ！ 線上看「表演嘉賓、頒獎陣容」精彩看點立</div>
                        </div>
                      </a>
                    </li>

                  </ul>
                </div>

                <div className={cx("moreBox")}>
                  <a href='#'>
                    <span>看更多</span>
                    <img src={`${appUrl}/golden/images/arrow_upward.svg`} alt="logo" width={16} height={16} />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section>
            <ImageCarousel4 title='得獎感言' data='' />
          </section>

          <section className={cx("bgColor02")}>
            <div className={cx("interview")}>
              <div className={cx("frameBox")}>
                <div className={cx("title")}>人物專訪</div>
                <div className={cx("box")}>
                  <a href='#'>
                    <div className={cx("imgBox")}>
                      <img src={`${appUrl}/golden/images/people-img01.jpg`} alt="ㄕㄩㄛ" width={500} height={500} />
                    </div>
                    <div className={cx("txtBox")}>
                      
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
          
        </article>
      </main>
      <Footer />
    </div>
  );
}
export default Highlights;


export async function getServerSideProps({ params, req }) {
    const menuUrl = new URL('/api/menu', process.env.NEXT_PUBLIC_APP_URL)
    const menuRes = await fetch(menuUrl)
    const menu = await menuRes.json()
  
    return {
      props: {
        menu,
      },
    }
  }