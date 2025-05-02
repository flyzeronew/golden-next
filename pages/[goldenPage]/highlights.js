import { usePathname } from 'next/navigation'
import CustomHead from '../../components/CustomHead'
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