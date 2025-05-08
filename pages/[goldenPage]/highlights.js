import { usePathname } from 'next/navigation'
import LazyLoad from 'react-lazyload'
import CustomHead from '../../components/CustomHead'
import ImageCarousel from '../../components/GoldenPage/highlights/ImageCarousel'
import FixedBottomAd from '../../components/FixedBottomAd'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from './highlights.module.scss'
import classNames from 'classnames/bind'


const  Highlights = (props) => {
  const cx = classNames.bind(styles);
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  const pathname = usePathname();
  const url = `${appUrl}${pathname}`;
  const ogImage = `${appUrl}/golden/images/og-img-goldenmusic2025.jpg`;

  const pageName = 'highlights';
  const projectName = props.projectName;
  const menuData = props.menu;
  const menu = menuData.find(item => item.name === projectName).menu;
  const metaData = props.meta;
  const meta = metaData.find(item => item.name === projectName).highlights;

  return (
    <div className="container" >
      <CustomHead 
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        ogTitle={meta.title}
        url={url}
        ogImage={ogImage}
      />
      <h1 className="display_none" >{meta.title}</h1>

      <Header menu={menu} pageName={pageName} />
      <FixedBottomAd />
      <main className={cx("highlightsPage")}>
        <article>
          <div className="adBox ad-pc height-250 pd-t48" >
            <div id="news_pc_read_top">
            <a href='#'>
                <img src={`${appUrl}/golden/images/ad970x250.jpg`} alt="ad" width={970} height={250} />
              </a> 
            </div>
          </div>

          <div className="adBox ad-mo height-250 pd-t48">
            <div id="news_m_read_top">
              <img src={`${appUrl}/golden/images/ad300x250.jpg`} alt="ad" width={300} height={250} />
            </div>
          </div>
          
          <section>
            <div className={cx("focusBox")}>
              <div className={cx("frameBox")}>
                <div className={cx("title")}>典禮焦點</div>
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

          <div className="adBox ad-mo pd-b48">
              <div class="flyOutBox">
                  <div class="flyInBox">
                      <div class="flyAd">
                        <div id="news_m_read_in2">
                          <a href='#'>
                          <img src={`${appUrl}/golden/images/fly_ad320.jpg`} alt="ad" width={320} height={480} />
                          </a>
                        </div>
                      </div>
                  </div>
              </div>
          </div>

          <section>
            <ImageCarousel title='得獎感言' data='' />
          </section>

          <section className={cx("bgColor02")}>
            <div className={cx("interview")}>
              <div className={cx("frameBox")}>
                <div className={cx("title")}>人物專訪</div>
                <div className={cx("box")}>
                  <a href='#'>
                    <div className={cx("imgBox")}>
                      <img src={`${appUrl}/golden/images/people-img01.jpg`} alt="img" width={500} height={500} />
                    </div>
                    <div className={cx("txtBox")}>
                        <div className={cx("title")}>9m88</div>
                        <div className={cx("txt")}>同時入圍金曲歌王和最佳新人的辣個男人：一起認識這位新生代 R&B 小王子「鶴 The Crane」！同時入圍金曲歌王和最佳新人的辣個男人：一起認識這位新生代 R&B 小王子「鶴 The Crane」！</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <div className="adBox ad-pc height-90 pd-t48 ">
            <div id="news_pc_read_d1">
              <a href='#'>
                <img src={`${appUrl}/golden/images/ad728x90.jpg`} alt="ad" width={728} height={90} />
              </a>
            </div>
          </div>

          <section className={cx("bgColor01")}>
            <div className={cx("featured")}>
              <div className={cx("frameBox")}>
                <div className={cx("title")}>編輯精選</div>
                <div className={cx("box")}>
                  <a href='#'>
                    <div className={cx("imgBox")}>
                      <img src={`${appUrl}/golden/images/people-img02.jpg`} alt="img" width={480} height={372} />
                    </div>
                    <div className={cx("txtBox")}>
                        <div className={cx("title")}>9M88《Sent》</div>
                        <div className={cx("txt")}>「 應該是本屆的一大遺珠，這張專輯找來各路頂尖樂手，樂句對話都既協調又刺激，曲序編排也有起承轉合，像是把現場演出原汁原味地帶進耳機裡 。 」</div>
                        <div className={cx("authorBox")}>
                          <div className={cx("img")}>
                            <img src={`${appUrl}/golden/images/people-img01.jpg`} alt="img" width={20} height={20} />
                          </div>
                          <div className={cx("author")}>
                            <span className={cx("t1")}>Eddie</span>
                            <span> / 責任編輯</span>
                          </div>
                        </div>
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
  const projectName = params.goldenPage || params.goldenPage;
  const metaUrl = new URL('/api/meta', process.env.NEXT_PUBLIC_APP_URL)
  const metaRes = await fetch(metaUrl)
  const meta = await metaRes.json()

  const menuUrl = new URL('/api/menu', process.env.NEXT_PUBLIC_APP_URL)
  const menuRes = await fetch(menuUrl)
  const menu = await menuRes.json()

  return {
    props: {
      projectName,
      menu,
      meta
    },
  }
}