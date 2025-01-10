interface Slide {
    id: string;
    title: string;
    image: string;
    link: string;
    lastUpdate: Date | undefined;
}

interface Product {
    imageType: "smartphone" | "desktop" | "emoji";
    image: SmartphoneImage | DesktopImage | Emoji;
    id: string;
    title: string;
    description: string;
    persona: {
        client: string;
        target: string;
        problem: string | null;
        position: string;
    };
}

interface SmartphoneImage {
    src: string;
    alt: string;
}

interface DesktopImage {
    src: string;
    alt: string;
}

interface Emoji {
    src: string;
    alt: string;
}
