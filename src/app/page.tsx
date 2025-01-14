import Products from "@/src/components/products/products";
import { AboutMe } from "~/components/aboutme";
import { Footer } from "~/components/footer";
import { RootHeader } from "~/components/header/root-header";
import Scene from "~/components/scene";

export default function Home() {
    return (
        <div>
            <Scene />
            <RootHeader />
            <AboutMe />
            <Products />
            <Footer />
        </div>
    );
}
