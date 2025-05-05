const newArticles: { title: string, description: string }[] = [
    {
        title: 'Hydrogen VS Electric Cars',
        description: 'Will hydrogen-fueled cars ever catch up to EVs?'
    },
    {
        title: 'The Downsides of AI Artistry',
        description: 'What are the possible adverse effects of on-demand AI image generation?'
    },
    {
        title: 'Is VC Funding Drying Up?',
        description: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
    },
];

export default function New() {
    return (
        <div className="sm:col-span-1 flex flex-col items-start justify-between py-8 px-6 gap-8 bg-slate-950">
            <h2 className="text-4xl sm:text-5xl font-bold text-orange-300">
                New
            </h2>
            <div className="flex flex-col items-center justify-between gap-8">
                {
                    newArticles.map((article, index) => {
                        return (
                            <div className="w-full">
                                <div key={index} className="flex flex-col items-start justify-between gap-2">
                                    <a href={`/${index}`}
                                       className="text-xl font-bold text-stone-50 hover:text-orange-300">{article.title}</a>
                                    <p className="text-sm sm:text-base text-zinc-300">{article.description}</p>
                                </div>
                                {index < newArticles.length - 1 && (<hr className="mt-8 w-full border-0 bg-stone-50 h-[0.5px]"/>)}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}
