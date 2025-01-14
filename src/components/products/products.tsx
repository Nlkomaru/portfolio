import { css } from "@/styled-system/css";
import type { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "~/components/carousel/embla-carousel";
const OPTIONS: EmblaOptionsType = {
    loop: true,
    slidesToScroll: 1,
    dragFree: true,
};

export default function Home() {
    return (
        <div
            className={css({
                margin: "0 auto",
                padding: {
                    base: "32px 32px",
                },
                maxWidth: "1600px",
            })}
        >
            <h1
                className={css({
                    fontSize: {
                        base: "20px",
                        md: "24px",
                        lg: "32px",
                    },
                    marginBottom: "8px"
                })}
            >
                Products
            </h1>
            <EmblaCarousel options={OPTIONS} />
        </div>
    );
}
