import { css } from "@/styled-system/css";
import type { EmblaOptionsType } from "embla-carousel";
import { titleStyle } from "~/components/aboutme";
import ProductsCarousel from "~/components/products/products-carousel";

const OPTIONS: EmblaOptionsType = {
    loop: true,
    slidesToScroll: 1,
    dragFree: true,
};

export default function Home() {
    return (
        <div
            className={css({
                margin: "160px auto",
                padding: {
                    base: "32px 32px",
                },
                maxWidth: "1600px",
            })}
        >
            <h1 className={titleStyle}>Products</h1>
            <ProductsCarousel options={OPTIONS} />
        </div>
    );
}
