"use client";
import { css } from "@/styled-system/css";
import type { EmblaCarouselType } from "embla-carousel";
import type React from "react";
import {
    type ComponentPropsWithRef,
    useCallback,
    useEffect,
    useState,
} from "react";

type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean;
    nextBtnDisabled: boolean;
    onPrevButtonClick: () => void;
    onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
    emblaApi: EmblaCarouselType | undefined,
    onButtonClick?: (emblaApi: EmblaCarouselType) => void,
): UsePrevNextButtonsType => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
        if (onButtonClick) onButtonClick(emblaApi);
    }, [emblaApi, onButtonClick]);

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
        if (onButtonClick) onButtonClick(emblaApi);
    }, [emblaApi, onButtonClick]);

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect(emblaApi);
        emblaApi.on("reInit", onSelect).on("select", onSelect);
    }, [emblaApi, onSelect]);

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    };
};

type PropType = ComponentPropsWithRef<"button">;

export const PrevButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props;

    return (
        <button className={emblaButton} type="button" {...restProps}>
            <svg className={emblaButtonSvg} viewBox="0 0 532 532">
                <title>Previous</title>
                <path
                    fill="currentColor"
                    d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
                />
            </svg>
            {children}
        </button>
    );
};

export const NextButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props;

    return (
        <button className={emblaButton} type="button" {...restProps}>
            <svg className={emblaButtonSvg} viewBox="0 0 532 532">
                <title>Next</title>
                <path
                    fill="currentColor"
                    d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                />
            </svg>
            {children}
        </button>
    );
};

const emblaButton = css({
    WebkitTapHighlightColor: "rgba(var(--text-high-contrast-rgb-value), 0.5)",
    WebkitAppearance: "none",
    appearance: "none",
    backgroundColor: "transparent",
    touchAction: "manipulation",
    display: "inline-flex",
    textDecoration: "none",
    cursor: "pointer",
    border: "0",
    padding: "0",
    margin: "0",
    boxShadow: "inset 0 0 0 0.2rem var(--detail-medium-contrast)",
    width: "3.6rem",
    height: "3.6rem",
    zIndex: "1",
    borderRadius: "50%",
    color: "var(--text-body)",
    alignItems: "center",
    justifyContent: "center",
});

const emblaButtonSvg = css({
    width: "35%",
    height: "35%",
});
