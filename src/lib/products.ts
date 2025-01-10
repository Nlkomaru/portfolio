import { Faker, en, ja } from "@faker-js/faker";
import { uuidv7 } from "uuidv7";

import { faker } from "@faker-js/faker";

export function getProducts(): Product[] {
    //適当に10個の商品を生成
    //getSmartPhoneProduct()は、スマートフォンの商品を生成する関数
    //getDesktopProducts()は、デスクトップの商品を生成する関数
    //getEmojiProducts()は、絵文字の商品を生成する関数

    const list = Array.from({ length: 30 }, (_, i) => {
        if (i % 3 === 0) {
            return getSmartPhoneProduct();
        }
        if (i % 3 === 1) {
            return getDesktopProducts();
        }
        return getEmojiProducts();
    });
    //shuffle
    return list.sort(() => Math.random() - 0.5);
}

function getSmartPhoneProduct(): Product {
    return {
        description: "",
        id: uuidv7(),
        image: {
            src: `https://picsum.photos/seed/${uuidv7()}/360/640`,
            alt: "",
        },
        imageType: "smartphone",
        persona: { client: "", position: "", problem: null, target: "" },
        title: faker.commerce.productName(),
    };
}

function getDesktopProducts(): Product {
    return {
        description: "",
        id: uuidv7(),
        image: {
            src: `https://picsum.photos/seed/${uuidv7()}/1920/1080`,
            alt: "",
        },
        imageType: "desktop",
        persona: { client: "", position: "", problem: null, target: "" },
        title: faker.commerce.productName(),
    };
}

function getEmojiProducts(): Product {
    return {
        description: "",
        id: uuidv7(),
        image: {
            src: faker.internet.emoji(),
            alt: "",
        },
        imageType: "emoji",
        persona: { client: "", position: "", problem: null, target: "" },
        title: faker.commerce.productName(),
    };
}
