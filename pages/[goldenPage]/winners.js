import { usePathname } from 'next/navigation'
import CustomHead from '../../components/CustomHead'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from './winnersPage.module.scss'
import classNames from 'classnames/bind'


const  Winners = (props) => {
  const cx = classNames.bind(styles);
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  const menu = props.menu;  
  const pathname = usePathname();
  const url = `${appUrl}${pathname}`;
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
      <Header menu={menu} />

      <main className={cx("winnerPage")}>
        
      </main>

      <Footer />
    </div>
  );
}
export default Winners;


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