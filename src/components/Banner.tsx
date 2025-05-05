import {useEffect, useState} from "react";

export default function Banner() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [windowWidth]);

    return (
        <div className="sm:col-span-2 grid sm:grid-cols-2 sm:gap-8 gap-4">
            <img className="col-span-1 sm:col-span-2" src={windowWidth >= 620 ? require("../assets/images/image-web-3-desktop.jpg") : require("../assets/images/image-web-3-mobile.jpg")} alt="Banner image"/>
            <div className="grid col-span-1 gap-4 sm:col-span-2 sm:grid-cols-2 sm:gap-8">
                <h1 className="col-span-1 text-[40px] sm:text-[54px] leading-none font-extrabold text-left text-slate-950 h-full flex flex-col items-start justify-center sm:text-pretty sm:pr-4">
                    The Bright Future of Web 3.0?
                </h1>
                <div className="col-span-1 flex flex-col items-start justify-between gap-6 sm:gap-8">
                    <p className="text-slate-600">
                        We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                    </p>
                    <button className="bg-red-500 w-1/2 h-12 font-bold uppercase tracking-[0.2rem] text-slate-950 hover:bg-black hover:text-white">
                        Read more
                    </button>
                </div>
            </div>
        </div>
    );
}