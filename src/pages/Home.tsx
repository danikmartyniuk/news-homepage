import Banner from "../components/Banner";
import Navigation from "../components/Navigation";
import New from "../components/New";
import Articles from "../components/Articles";

export default function Home() {
    return (
        <div className="flex-1 py-20 px-36">
            <Navigation />
            <div className="grid grid-cols-3 gap-8 items-start auto-rows-max pt-16 gap-y-16">
                <Banner />
                <New />
                <Articles />
            </div>
        </div>
    );
}