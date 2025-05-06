export default function handler(req, res) {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL;
    const data = [
        {
            'name':'goldenmusic2025',
            'menu':[ 
                {
                    'title':'金曲36',
                    'url':`${appUrl}/goldenmusic2025`,
                    'name':'home',
                },
                {
                    'title':'獎項名單',
                    'url':`${appUrl}/goldenmusic2025/winners`,
                    'name':'winners',
                },
                {
                    'title':'金曲焦點',
                    'url':`${appUrl}/goldenmusic2025/highlights`,
                    'name':'highlights',
                },
            ],
        },
    ];
    
    res.status(200).json(data);
}