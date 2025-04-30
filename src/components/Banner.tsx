export default function Banner() {
    return (
        <div className="col-span-2 flex flex-col items-center justify-center gap-8">
            <img className="" src={require("../assets/images/image-web-3-desktop.jpg")}  alt="Banner image"/>
            <div className="flex flex-row items-center justify-between">
                <h1 className="w-1/2 text-[54px] leading-none font-extrabold text-left text-slate-950 h-full flex flex-col items-start justify-center text-pretty pr-4">
                    The Bright Future of Web 3.0?
                </h1>
                <div className="w-1/2 flex flex-col items-start justify-between gap-8 h-full">
                    <p className="text-slate-600">
                        We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                    </p>
                    <button className="bg-red-500 w-1/2 h-12 text-sm font-extrabold uppercase tracking-[0.2rem] text-slate-950">
                        Read more
                    </button>
                </div>
            </div>
        </div>
    );
}