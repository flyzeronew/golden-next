import React, { useRef, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import LazyLoad from 'react-lazyload'
import ImageCarousel from '../../components/GoldenPage/winners/ImageCarousel'
import FixedBottomAd from '../../components/FixedBottomAd'
import CustomHead from '../../components/CustomHead'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from './winners.module.scss'
import classNames from 'classnames/bind'

const  Winners = (props) => {
  const [menuShow, setMenuShow] = useState(false);
  const cx = classNames.bind(styles);
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  const pathname = usePathname();
  const url = `${appUrl}${pathname}`;
  const ogImage = `${appUrl}/golden/images/og-img-goldenmusic2025.jpg`;

  const pageName = 'winners';
  const projectName = props.projectName;
  const menuData = props.menu;
  const menu = menuData.find(item => item.name === projectName).menu;
  const metaData = props.meta;
  const meta = metaData.find(item => item.name === projectName).winners;

  function menuShowClick() {
    setMenuShow(true);    
    document.documentElement.style.overflowY = 'hidden';
  }
  function menuHideClick() {
    setMenuShow(false);
    document.documentElement.style.overflowY = 'auto';
  }

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
      <main className={cx("winnersPage")}>
        <article>

          <div className="adBox ad-pc height-250 pd-t48" >
            <div id="news_pc_read_top">
              <a href='#'>
                <img src={`${appUrl}/golden/images/ad970x250.jpg`} alt="ad" width={970} height={250} />
              </a> 
            </div>
          </div>

          <div className="adBox ad-mo height-250 pd-t48">
            <div id="news_m_index_top">
              <img src={`${appUrl}/golden/images/ad300x250.jpg`} alt="ad" width={300} height={250} />
            </div>
          </div>

          <section>
            <div className={cx("awardsBox")}>
              <div className={cx("frameBox")}>

                <div className={cx("firstNews")}>
                  <div className={cx("award")}>第36屆金曲獎</div>
                  <div className={cx("titleBox")}>
                    <div className={cx("title")}>最佳華語專輯獎</div>
                    <div className={cx("menuBox")} onClick={menuShowClick}>
                      <div className={cx("box")}>
                        <div className={cx("txt")}>全部<span>獎項</span></div>
                        <div className={cx("arraw" ,true === menuShow ? 'act' : '')}>
                          <img src={`${appUrl}/golden/images/menu-arraw.svg`} alt="arraw" width={24} height={24} />
                        </div>
                      </div>                     
                    </div>

                    <div className={cx("menuLigthBox" ,true === menuShow ? 'show' : '')}>
                        <div className={cx("fixedBox")}>
                          <div className={cx("xxBox")} onClick={menuHideClick}>
                            <div className={cx("xx")}>
                              <img src={`${appUrl}/golden/images/close-btn-black.svg`} alt="arraw" width={24} height={24} />
                            </div>
                          </div>                          
                          <div className={cx("scrollBox",true === menuShow ? 'show' : '')}>
                            <div className={cx("menu")}>

                              <div className={cx("box")}>
                                <div className={cx("title")}>演唱類 出版獎</div>
                                <div className={cx("list")}>
                                  <ul>
                                    <li>
                                      <a href='#'>最佳原住民語歌手獎</a>
                                    </li>
                                    <li>
                                      <a href='#'>年度歌曲獎</a>
                                    </li>
                                    <li>
                                      <a href='#'>最佳原住民語歌手獎</a>
                                    </li>
                                    <li>
                                      <a href='#'>最佳原住民語歌手獎</a>
                                    </li>
                                    <li>
                                      <a href='#'>年度歌曲獎</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div className={cx("box")}>
                                <div className={cx("title")}>演唱類 出版獎</div>
                                <div className={cx("list")}>
                                  <ul>
                                    <li>
                                      <a href='#'>最佳原住民語歌手獎</a>
                                    </li>
                                    <li>
                                      <a href='#'>年度歌曲獎</a>
                                    </li>
                                    <li>
                                      <a href='#'>最佳原住民語歌手獎</a>
                                    </li>
                                    <li>
                                      <a href='#'>最佳原住民語歌手獎</a>
                                    </li>
                                    <li>
                                      <a href='#'>年度歌曲獎</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div className={cx("box")}>
                                <div className={cx("title")}>演唱類 出版獎</div>
                                <div className={cx("list")}>
                                  <ul>
                                    <li>
                                      <a href='#'>最佳原住民語歌手獎</a>
                                    </li>
                                    <li>
                                      <a href='#'>年度歌曲獎</a>
                                    </li>
                                    <li>
                                      <a href='#'>最佳原住民語歌手獎</a>
                                    </li>
                                    <li>
                                      <a href='#'>最佳原住民語歌手獎</a>
                                    </li>
                                    <li>
                                      <a href='#'>年度歌曲獎</a>
                                    </li>
                                    <li>
                                      <a href='#'>最佳原住民語歌手獎</a>
                                    </li>
                                    <li>
                                      <a href='#'>年度歌曲獎</a>
                                    </li>
                                    <li>
                                      <a href='#'>最佳原住民語歌手獎</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div className={cx("box")}>
                                <div className={cx("title")}>演唱類 出版獎</div>
                                <div className={cx("list")}>
                                  <ul>
                                    <li>
                                      <a href='#'>最佳原住民語歌手獎</a>
                                    </li>
                                    <li>
                                      <a href='#'>年度歌曲獎</a>
                                    </li>
                                    <li>
                                      <a href='#'>最佳原住民語歌手獎</a>
                                    </li>
                                    <li>
                                      <a href='#'>最佳原住民語歌手獎</a>
                                    </li>
                                    <li>
                                      <a href='#'>年度歌曲獎</a>
                                    </li>
                                    <li>
                                      <a href='#'>最佳原住民語歌手獎</a>
                                    </li>
                                    <li>
                                      <a href='#'>年度歌曲獎</a>
                                    </li>
                                    <li>
                                      <a href='#'>最佳原住民語歌手獎</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>

                  <ImageCarousel />
                  
                </div>

                <div className={cx("list")}>
                  <div className={cx("award")}>入圍名單</div>
                  <ul>
                    <li>
                      <a href='#'>
                        <div className={cx("imgBox")}>
                          <div className={cx("img")}>
                            <LazyLoad 
                              height={160} 
                              offset={100} 
                              once 
                            >
                              <img src={`${appUrl}/golden/images/focus-img02.jpg`} alt="logo" width={160} height={160} />
                            </LazyLoad> 
                          </div>
                        </div>
                        <div className={cx("txtBox")}>
                          <div className={cx("title")}>瓦合瓦合瓦合瓦合瓦合瓦合瓦合瓦</div>
                          <div className={cx("txt")}>草東沒有派對草東沒有派對草東沒有派對草東沒有派對</div>
                        </div>                        
                      </a>
                    </li>

                    <li className={cx("act")}>
                      <a href='#'>
                        <div className={cx("imgBox")}>
                          <div className={cx("img")}>
                            <LazyLoad 
                              height={160} 
                              offset={100} 
                              once 
                            >
                              <img src={`${appUrl}/golden/images/focus-img02.jpg`} alt="logo" width={160} height={160} />
                            </LazyLoad> 
                          </div>
                        </div>
                        <div className={cx("txtBox")}>
                          <div className={cx("title")}>瓦合瓦合瓦合瓦合瓦合瓦合瓦合瓦</div>
                          <div className={cx("txt")}>草東沒有派對草東沒有派對草東沒有派對草東沒有派對</div>
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
                              once 
                            >
                              <img src={`${appUrl}/golden/images/focus-img02.jpg`} alt="logo" width={160} height={160} />
                            </LazyLoad>                            
                          </div>
                        </div>
                        <div className={cx("txtBox")}>
                          <div className={cx("title")}>瓦合瓦合瓦合瓦合瓦合瓦合瓦合瓦</div>
                          <div className={cx("txt")}>草東沒有派對草東沒有派對草東沒有派對草東沒有派對</div>
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
                              once 
                            >
                              <img src={`${appUrl}/golden/images/focus-img02.jpg`} alt="logo" width={160} height={160} />
                            </LazyLoad> 
                          </div>
                        </div>
                        <div className={cx("txtBox")}>
                          <div className={cx("title")}>瓦合瓦合瓦合瓦合瓦合瓦合瓦合瓦</div>
                          <div className={cx("txt")}>草東沒有派對草東沒有派對草東沒有派對草東沒有派對</div>
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

                              once 
                            >
                              <img src={`${appUrl}/golden/images/focus-img02.jpg`} alt="logo" width={160} height={160} />
                            </LazyLoad> 
                          </div>
                        </div>
                        <div className={cx("txtBox")}>
                          <div className={cx("title")}>瓦合瓦合瓦合瓦合瓦合瓦合瓦合瓦</div>
                          <div className={cx("txt")}>草東沒有派對草東沒有派對草東沒有派對草東沒有派對</div>
                        </div>                        
                      </a>
                    </li>

                  </ul>
                </div>
                <div className={cx("moreBox")}>
                  <a href='#'>
                    <span>查看其他獎項</span>
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
            <div className={cx("moreReadBox")}>
              <div className={cx("frameBox")}>
                <div className={cx("title")}>相關閱讀</div>
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

                <div className={cx("moreBox")}>
                  <a href='#'>
                    <span>看更多</span>
                    <img src={`${appUrl}/golden/images/arrow_upward.svg`} alt="logo" width={16} height={16} />
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
export default Winners;


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