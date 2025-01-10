import { css } from "@/styled-system/css";
import type { EmblaOptionsType } from "embla-carousel";
import { AboutMe } from "~/components/aboutme";
import EmblaCarousel from "~/components/carousel/embla-carousel";
import { Footer } from "~/components/footer";
import { RootHeader } from "~/components/header/root-header";
import Scene from "~/components/scene";

const OPTIONS: EmblaOptionsType = {
    loop: true,
    slidesToScroll: 1,
    dragFree: true,
};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
export default function Home() {
    return (
        <div>
            <Scene />
            <RootHeader />
            <AboutMe />
            <EmblaCarousel options={OPTIONS} />
            <Footer />
        </div>
    );
}
