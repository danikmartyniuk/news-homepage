import Banner from "../components/Banner";
import Navigation from "../components/Navigation";

export default function Home() {
    return (
        <div className="flex-1 py-20 px-36">
            <Navigation />
            <Banner />
        </div>
    );
}