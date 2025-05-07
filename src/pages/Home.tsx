import Banner from "../components/Banner";
import Navigation from "../components/Navigation";
import New from "../components/New";
import Articles from "../components/Articles";

export default function Home() {
    return (
        <div className="flex-1 py-8 px-4 sm:py-20 sm:px-36">
            <Navigation />
            <div className="flex flex-col justify-between gap-14 items-start auto-rows-max pt-6 sm:grid sm:grid-cols-3 sm:gap-8 sm:pt-16 sm:gap-y-16">
                <Banner />
                <New />
                <Articles />
            </div>
        </div>
    );
}