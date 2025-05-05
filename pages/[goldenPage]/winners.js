import { usePathname } from 'next/navigation'
import LazyLoad from 'react-lazyload'
import CustomHead from '../../components/CustomHead'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from './winners.module.scss'
import classNames from 'classnames/bind'


const  Winners = (props) => {
  const cx = classNames.bind(styles);
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  const menu = props.menu;  
  const pathname = usePathname();
  const url = `${appUrl}${pathname}`;
  const pageName = 'winners';

  const ogImage = `${appUrl}/golden/images/og-img.jpg`;

  return (
    <div className="container" >
      <CustomHead 
        title='2025金曲獎得獎名單｜第36屆金曲獎入圍歌手與獲獎作品一次看'
        description='金曲獎得獎名單,金曲獎得主,金曲獎女歌手,金曲獎男歌手,2025金曲獎得獎名單,第36屆金曲獎得獎名單,金曲獎入圍名單,2025金曲獎入圍名單,第36屆金曲獎入圍名單'
        keywords='2025第36屆金曲獎入圍暨得獎名單出爐！金曲獎最佳男歌手、女歌手、年度歌曲、專輯、最佳新人等所有獲獎名單一次完整整理。'
        url={url}
        ogTitle='2025金曲獎得獎名單｜第36屆金曲獎入圍歌手與獲獎作品一次看'
        ogImage={ogImage}
      />
      <Header menu={menu} pageName={pageName} />

      <main className={cx("winnersPage")}>
        <article>
          <section>
            <div className={cx("awardsBox")}>
              <div className={cx("frameBox")}>

                <div className={cx("firstBox")}>
                  <div className={cx("award")}>第36屆金曲獎</div>
                  <div className={cx("titleBox")}>
                    <div className={cx("title")}>最佳華語專輯獎</div>
                    <div className={cx("menuBox")}>
                      <div className={cx("box")}>
                        <div className={cx("txt")}>全部<span>獎項</span></div>
                        <div className={cx("arraw")}>                        
                          <img src={`${appUrl}/golden/images/menu-arraw.svg`} alt="arraw" width={24} height={24} />
                        </div>
                      </div>
                      <div className={cx("menu")}>
                        <div className={cx("xx")}></div>
                        <ul>
                          <li></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

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
        </article>
      </main>

      <Footer />
    </div>
  );
}
export default Winners;


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