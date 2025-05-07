import { usePathname } from 'next/navigation'
import LazyLoad from 'react-lazyload'
import CustomHead from '../components/CustomHead'
import ImageCarousel from '../components/GoldenPage/home/ImageCarousel'
import ImageCarousel2 from '../components/GoldenPage/home/ImageCarousel2'
import ImageCarousel3 from '../components/GoldenPage/home/ImageCarousel3'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sponsor from '../components/GoldenPage/Sponsor'
import styles from './goldenPage.module.scss'
import classNames from 'classnames/bind'

const GoldenPage = (props) => {

  const cx = classNames.bind(styles);
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  const ogImage = `${appUrl}/golden/images/og-img-goldenmusic2025.jpg`;

  const pathname = usePathname();
  const url = `${appUrl}${pathname}`;
  const pageName = 'home';
  const projectName = props.projectName;
  const menuData = props.menu;
  const menu = menuData.find(item => item.name === projectName).menu;
  const metaData = props.meta;
  const meta = metaData.find(item => item.name === projectName).home;
console.log(props.test);
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
      <main className={cx("homePage")}>
        <div className={cx("kvBox")}>
          <div className={cx("frameBox")}>
            <div className={cx("head")}></div>
            <div className={cx("logo")}>
              <div className={cx("img")}>
                  <img src={`${appUrl}/golden/images/goldenmusic2025-logo.svg`} alt="logo" width={330} height={264} />
              </div>
            </div>
            <div className={cx("txtBox")}>
              <div className={cx("txt")}>第36屆金曲獎頒獎典禮</div>              
              <div className={cx("time")}>2025年6月28日(六)<br />下午7:00</div>
            </div>
          </div>
        </div>

        <article>

          <div className="adBox ad_pc height_250 pd-t48" >
            <div id="news_pc_index_top">
              <img src={`${appUrl}/golden/images/970x250.jpg`} alt="logo" width={970} height={250} />
            </div>
          </div>

          <section className={cx("bgColor01")}>
            <div className={cx("awardsBox")}>
              <div className={cx("frameBox")}>
                <div className={cx("list")}>
                  <ul>

                    <li>
                      <a href='#'>
                        <div className={cx("imgBox")}>
                          <div className={cx("img")}>
                            <LazyLoad 
                              height={160} 
                              offset={100} 
                              placeholder={
                                <img src={`${appUrl}/golden/images/lazy-img.webp`} alt="預設圖" width={500} height={281} />
                              } 
                              once 
                            >
                              <img src={`${appUrl}/golden/images/awards-01.jpg`} alt="logo" width={160} height={160} />
                            </LazyLoad> 
                          </div>
                        </div>
                        <div className={cx("txtBox")}>
                          <div className={cx("title")}>最佳華語專輯獎</div>
                          <div className={cx("txt")}>《期待集》許鈞,《姿態》傻子與白痴, 帶你飛》告五人,《瓦合》草東沒有派對,《期待集》許鈞,《姿態》傻子與白痴</div>
                        </div>
                        <div className={cx("arraw")}>
                          <img src={`${appUrl}/golden/images/arrow_right.svg`} alt="logo" width={16} height={16} />
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href='#'>
                        <div className={cx("imgBox")}>
                          <div className={cx("img")}>
                            <LazyLoad 
                              height={160} 
                              offset={100} 
                              placeholder={
                                <img src={`${appUrl}/golden/images/lazy-img.webp`} alt="預設圖" width={500} height={281} />
                              } 
                              once 
                            >
                              <img src={`${appUrl}/golden/images/awards-01.jpg`} alt="logo" width={160} height={160} />
                            </LazyLoad> 
                          </div>
                        </div>
                        <div className={cx("txtBox")}>
                          <div className={cx("title")}>最佳華語專輯獎</div>
                          <div className={cx("txt")}>《期待集》許鈞,《姿態》傻子與白痴, 帶你飛》告五人,《瓦合》草東沒有派對,《期待集》許鈞,《姿態》傻子與白痴</div>
                        </div>
                        <div className={cx("arraw")}>
                          <img src={`${appUrl}/golden/images/arrow_right.svg`} alt="logo" width={16} height={16} />
                        </div>
                      </a>
                    </li>
                    
                    <li>
                      <a href='#'>
                        <div className={cx("imgBox")}>
                          <div className={cx("img")}>
                            <LazyLoad 
                              height={160} 
                              offset={100} 
                              placeholder={
                                <img src={`${appUrl}/golden/images/lazy-img.webp`} alt="預設圖" width={500} height={281} />
                              } 
                              once 
                            >
                              <img src={`${appUrl}/golden/images/awards-01.jpg`} alt="logo" width={160} height={160} />
                            </LazyLoad>                            
                          </div>
                        </div>
                        <div className={cx("txtBox")}>
                          <div className={cx("title")}>最佳華語專輯獎</div>
                          <div className={cx("txt")}>《期待集》許鈞,《姿態》傻子與白痴, 帶你飛》告五人,《瓦合》草東沒有派對,《期待集》許鈞,《姿態》傻子與白痴</div>
                        </div>
                        <div className={cx("arraw")}>
                          <img src={`${appUrl}/golden/images/arrow_right.svg`} alt="logo" width={16} height={16} />
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href='#'>
                        <div className={cx("imgBox")}>
                          <div className={cx("img")}>
                            <LazyLoad 
                              height={160} 
                              offset={100} 
                              placeholder={
                                <img src={`${appUrl}/golden/images/lazy-img.webp`} alt="預設圖" width={500} height={281} />
                              } 
                              once 
                            >
                              <img src={`${appUrl}/golden/images/awards-01.jpg`} alt="logo" width={160} height={160} />
                            </LazyLoad> 
                          </div>
                        </div>
                        <div className={cx("txtBox")}>
                          <div className={cx("title")}>最佳華語專輯獎</div>
                          <div className={cx("txt")}>《期待集》許鈞,《姿態》傻子與白痴, 帶你飛》告五人,《瓦合》草東沒有派對,《期待集》許鈞,《姿態》傻子與白痴</div>
                        </div>
                        <div className={cx("arraw")}>
                          <img src={`${appUrl}/golden/images/arrow_right.svg`} alt="logo" width={16} height={16} />
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href='#'>
                        <div className={cx("imgBox")}>
                          <div className={cx("img")}>
                            <LazyLoad 
                              height={160} 
                              offset={100} 
                              placeholder={
                                <img src={`${appUrl}/golden/images/lazy-img.webp`} alt="預設圖" width={500} height={281} />
                              } 
                              once 
                            >
                              <img src={`${appUrl}/golden/images/awards-01.jpg`} alt="logo" width={160} height={160} />
                            </LazyLoad> 
                          </div>
                        </div>
                        <div className={cx("txtBox")}>
                          <div className={cx("title")}>最佳華語專輯獎</div>
                          <div className={cx("txt")}>《期待集》許鈞,《姿態》傻子與白痴, 帶你飛》告五人,《瓦合》草東沒有派對,《期待集》許鈞,《姿態》傻子與白痴</div>
                        </div>
                        <div className={cx("arraw")}>
                          <img src={`${appUrl}/golden/images/arrow_right.svg`} alt="logo" width={16} height={16} />
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

          <div className="adBox ad_mo height_100 pd-b48">
            <div id="news_m_index_top">
              <img src={`${appUrl}/golden/images/320x100.jpg`} alt="logo" width={320} height={100} />
            </div>
          </div>

          <section className={cx("bgColor02")}>
            <div className={cx("focusBox")}>
              <div className={cx("frameBox")}>
                <div className={cx("title")}>焦點新聞</div>
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
              <ImageCarousel data=''/>
            </div>
          </section>
          
          <section className={cx("bgColor03")}>

            <div className={cx("focusBox","dark")}>
                <div className={cx("frameBox")}>
                  <div className={cx("title")}>金曲專題</div>
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
                            <img src={`${appUrl}/golden/images/esg02.jpg`} alt="img" width={640} height={359} />
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

                  <div className={cx("moreBox dark")}>
                    <a href='#'>
                      <span>看更多</span>
                      <img src={`${appUrl}/golden/images/arrow_upward_white.svg`} alt="logo" width={16} height={16} />
                    </a>
                  </div>
                </div>                
            </div>
          </section>

          <section className={cx("bgColor03")}>
            <ImageCarousel2 title='金曲圖輯' data='' />
          </section>

          <section className={cx("bgColor02")}>
            <ImageCarousel3 title='金曲專題2' data='' />
          </section>

          <section className={cx("bgColor02")}>
            <div className={cx("playListBox")}>
              <div className={cx("frameBox")}>
                <div className={cx("title")}>精彩瞬間</div>
                <div className={cx("list")}>
                  <ul>
                    <li>
                      <a href='#'>
                          <div className={cx("imgBox")}>
                            <div className={cx("img")}>
                              <div className={cx("playIcon")}>
                                <div className={cx("icon")}></div>
                              </div>                            
                              <LazyLoad 
                                height={359} 
                                offset={100}
                                once 
                              >
                                <img src={`${appUrl}/golden/images/esg02.jpg`} alt="img" width={640} height={359} />
                              </LazyLoad>
                            </div>
                          </div>
                          <div className={cx("txtBox")}>
                            <div className={cx("txt")}>2024金曲獎頒獎典禮亮點 ！ 線上看「表演嘉賓、頒獎陣容」精彩看點立</div>
                          </div>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                          <div className={cx("imgBox")}>
                            <div className={cx("img")}>
                              <div className={cx("playIcon")}>
                                <div className={cx("icon")}></div>
                              </div>                            
                              <LazyLoad 
                                height={359} 
                                offset={100} 

                                once 
                              >
                                <img src={`${appUrl}/golden/images/esg02.jpg`} alt="img" width={640} height={359} />
                              </LazyLoad>
                            </div>
                          </div>
                          <div className={cx("txtBox")}>
                            <div className={cx("txt")}>2024金曲獎頒獎典禮亮點 ！ 線上看「表演嘉賓、頒獎陣容」精彩看點立</div>
                          </div>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                          <div className={cx("imgBox")}>
                            <div className={cx("img")}>
                              <div className={cx("playIcon")}>
                                <div className={cx("icon")}></div>
                              </div>                            
                              <LazyLoad 
                                height={359} 
                                offset={100} 

                                once 
                              >
                                <img src={`${appUrl}/golden/images/esg02.jpg`} alt="img" width={640} height={359} />
                              </LazyLoad>
                            </div>
                          </div>
                          <div className={cx("txtBox")}>
                            <div className={cx("txt")}>2024金曲獎頒獎典禮亮點 ！ 線上看「表演嘉賓、頒獎陣容」精彩看點立</div>
                          </div>
                      </a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </section>

          <section className={cx("bgColor02")}>
            <Sponsor/>
          </section>

        </article>
      </main>
      <Footer />
    </div>
  );
}
export default GoldenPage;

export async function getServerSideProps({ params, req }) {
  const projectName = params.goldenPage || params.goldenPage;
  const metaUrl = new URL('/api/meta', process.env.NEXT_PUBLIC_APP_URL)
  const metaRes = await fetch(metaUrl)  
  const meta = await metaRes.json()

  const menuUrl = new URL('/api/menu', process.env.NEXT_PUBLIC_APP_URL)
  const menuRes = await fetch(menuUrl)
  const menu = await menuRes.json()

  const testRes = await fetch('https://news-v41-st.tvbs.com.tw/events/wbc-qualifiers-2025/json/totalSchedules.json')
  const test = await testRes.json()

  return {
    props: {
      test,
      projectName,
      menu,
      meta
    },
  }
}