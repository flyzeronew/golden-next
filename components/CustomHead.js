import Head from 'next/head';
const CustomHead = ({ title, description, keywords, url, ogTitle, ogImage}) => {
    return (
        <Head>
            <title>{title || 'Default Title'}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="keywords" content={keywords || 'default, keywords'} />
            <meta name="description" content={description || 'Default description'} />
            <meta name="author" content="TVBS" />
            <meta name="copyright" content="TVBS" />
            <meta name="application-name" content="TVBS" />
            <meta name="URL" content={url || 'https://news.tvbs.com.tw/'} />
            <meta name="medium" content="mult" />
            <meta name="robots" content="INDEX,FOLLOW" />
            <meta property="og:title" content={ogTitle} />
            <meta property="og:image" content={ogImage} />
            <link rel="canonical" href="" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};
export default CustomHead;
