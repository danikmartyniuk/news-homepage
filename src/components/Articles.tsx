const articles: {number: number; title: string, description: string, src: any}[] = [
    {
        number: 1,
        title: 'Reviving Retro PCs',
        description: 'What happens when old PCs are given modern upgrades?',
        src: require("../assets/images/image-retro-pcs.jpg")
    },
    {
        number: 2,
        title: 'Top 10 Laptops of 2022',
        description: 'Our best picks for various needs and budgets.',
        src: require("../assets/images/image-top-laptops.jpg")
    },
    {
        number: 3,
        title: 'The Growth of Gaming',
        description: 'How the pandemic has sparked fresh opportunities.',
        src: require("../assets/images/image-gaming-growth.jpg")
    }
];

export default function Articles() {
    return (
        <div className="flex flex-col justify-between items-start gap-8 sm:col-span-3 sm:grid sm:grid-cols-3 sm:gap-8 h-full">
            {
                articles.map(article => {
                    return (
                        <div key={article.number} className="flex flex-row items-stretch justify-between gap-6 h-full">
                            <img className="max-h-28" src={article.src} alt="Banner image"/>
                            <div className="flex flex-col items-start justify-between">
                                <p className="text-red-500 font-bold text-2xl">{`0${article.number}`}</p>
                                <a href={`/${article.number}`} className="font-bold text-base text-slate-950 hover:text-red-500">{article.title}</a>
                                <p className="text-slate-600 text-sm/6">{article.description}</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}
