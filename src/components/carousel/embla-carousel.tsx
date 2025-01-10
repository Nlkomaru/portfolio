"use client";
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import type React from "react";
import { useCallback } from "react";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "./embla-carousel-arrow-buttons";

import { css } from "@/styled-system/css";
import ProductsCard from "~/components/products/products-card";
import { getProducts } from "~/lib/products";

const embla = css({
    margin: "auto",
    "--slide-height": "19rem",
    "--slide-spacing": "1rem",
    "--slide-size": "33%",
});

const emblaViewport = css({
    overflow: "hidden",
});

const emblaContainer = css({
    display: "flex",
    touchAction: "pan-y pinch-zoom",
    marginLeft: "calc(var(--slide-spacing) * -1)",
});

const emblaSlide = css({
    flex: "0 0 var(--slide-size)",
    minWidth: "0",
    paddingLeft: "var(--slide-spacing)",
});

const emblaControls = css({
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    justifyContent: "space-between",
    gap: "1.2rem",
    marginTop: "1.8rem",
});

const emblaButtons = css({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "0.6rem",
    alignItems: "center",
    _disabled: {
        color: "var(--detail-high-contrast)",
    },
});

type PropType = {
    options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({ delay: 20 * 1000 }),
    ]);

    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const autoplay = emblaApi?.plugins()?.autoplay;
        if (!autoplay) return;

        const resetOrStop =
            autoplay.options.stopOnInteraction === false
                ? autoplay.reset
                : autoplay.stop;

        resetOrStop();
    }, []);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi, onNavButtonClick);

    return (
        <section className={embla}>
            <div className={emblaViewport} ref={emblaRef}>
                <div className={emblaContainer}>
                    {getProducts().map((products) => (
                        <div className={emblaSlide} key={products.id}>
                            <ProductsCard product={products} />
                        </div>
                    ))}
                </div>
            </div>

            <div className={emblaControls}>
                <div className={emblaButtons}>
                    <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                    />
                </div>
            </div>
        </section>
    );
};

export default EmblaCarousel;
