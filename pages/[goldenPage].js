import { usePathname } from 'next/navigation'
import CustomHead from '../components/CustomHead'
import ImageCarousel from '../components/GoldenPage/ImageCarousel'
import ImageCarousel2 from '../components/GoldenPage/ImageCarousel2'
import ImageCarousel3 from '../components/GoldenPage/ImageCarousel3'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sponsor from '../components/GoldenPage/Sponsor'
import styles from './goldenPage.module.scss'
import classNames from 'classnames/bind'

const GoldenPage = (props) => {
  const cx = classNames.bind(styles);
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  const ogImage = `${appUrl}/golden/images/og-img.jpg`;
  const pathname = usePathname();
  const url = `${appUrl}${pathname}`;
  const menu = props.menu;  
  return (
    <div className="container" >
      <CustomHead 
        title='2025第36屆金曲獎直播＆得獎名單｜紅毯星光大道一次看'
        description='金曲獎,金曲獎直播,金曲獎得獎名單,2025金曲獎,第36屆金曲獎,金曲獎表演,金曲獎得主,金曲獎女歌手,金曲獎主持人,金曲獎男歌手,金曲獎名單,金曲獎紅毯,金曲獎歷屆得獎名單,金曲獎星光大道,金曲獎線上看,金曲獎電視轉播'
        keywords='2025金曲獎完整資訊看這裡！第36屆金曲獎直播、得獎名單、星光大道紅毯、最佳男女歌手獎落誰家？精彩表演一次掌握，鎖定最強音樂盛典。'
        url={url}
        ogTitle='2025第36屆金曲獎直播＆得獎名單｜紅毯星光大道一次看'
        ogImage={ogImage}
      />
      <Header menu={menu} />
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
          <section className={cx("bgColor01")}>
            <div className={cx("awardsBox")}>
              <div className={cx("frameBox")}>
                <div className={cx("list")}>
                  <ul>

                    <li>
                      <a href='#'>
                        <div className={cx("imgBox")}>
                          <div className={cx("img")}>
                            <img src={`${appUrl}/golden/images/awards-01.jpg`} alt="logo" width={160} height={160} />
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
                            <img src={`${appUrl}/golden/images/awards-01.jpg`} alt="logo" width={160} height={160} />
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
                            <img src={`${appUrl}/golden/images/awards-01.jpg`} alt="logo" width={160} height={160} />
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
                            <img src={`${appUrl}/golden/images/awards-01.jpg`} alt="logo" width={160} height={160} />
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
                            <img src={`${appUrl}/golden/images/awards-01.jpg`} alt="logo" width={160} height={160} />
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

          <section className={cx("bgColor02")}>
            <div className={cx("focusBox")}>
              <div className={cx("frameBox")}>
                <div className={cx("title")}>焦點新聞</div>
                <div className={cx("firstNews")}>
                  <a href='#'>
                    <div className={cx("imgBox")}>
                      <div className={cx("img")}>
                        <img src={`${appUrl}/golden/images/focus-img01.jpg`} alt="img" width={640} height={359} />
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
                            <img src={`${appUrl}/golden/images/esg02.jpg`} alt="img" width={640} height={359} />
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
                            <img src={`${appUrl}/golden/images/esg02.jpg`} alt="img" width={640} height={359} />
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
                            <img src={`${appUrl}/golden/images/esg02.jpg`} alt="img" width={640} height={359} />
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
                            <img src={`${appUrl}/golden/images/esg02.jpg`} alt="img" width={640} height={359} />
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
                          <img src={`${appUrl}/golden/images/esg02.jpg`} alt="img" width={640} height={359} />
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
                              <img src={`${appUrl}/golden/images/esg02.jpg`} alt="img" width={640} height={359} />
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
                              <img src={`${appUrl}/golden/images/esg02.jpg`} alt="img" width={640} height={359} />
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
                              <img src={`${appUrl}/golden/images/esg02.jpg`} alt="img" width={640} height={359} />
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
                              <img src={`${appUrl}/golden/images/esg02.jpg`} alt="img" width={640} height={359} />
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
                              <img src={`${appUrl}/golden/images/esg02.jpg`} alt="img" width={640} height={359} />
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
                              <img src={`${appUrl}/golden/images/esg02.jpg`} alt="img" width={640} height={359} />
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
                              <img src={`${appUrl}/golden/images/esg02.jpg`} alt="img" width={640} height={359} />
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
console.log(params.goldenPage);
  const menuUrl = new URL('/api/menu', process.env.NEXT_PUBLIC_APP_URL)
  const menuRes = await fetch(menuUrl)
  const menu = await menuRes.json()

  return {
    props: {
      menu,
    },
  }
}