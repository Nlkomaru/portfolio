import Products from "@/src/components/products/products";
import { css } from "@/styled-system/css";
import type { EmblaOptionsType } from "embla-carousel";
import { AboutMe } from "~/components/aboutme";
import EmblaCarousel from "~/components/carousel/embla-carousel";
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
