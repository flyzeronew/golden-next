export default function handler(req, res) {
    // const appUrl = process.env.APP_URL;
    const data = [ 
            {
                'title':'金曲36',
                'name':'goldenmusic2025',
            },
            {
                'title':'獎項名單',
                'name':'winners',
            },
            {
                'title':'金曲焦點',
                'name':'highlights',
            },
    ];
    res.status(200).json(data);
}