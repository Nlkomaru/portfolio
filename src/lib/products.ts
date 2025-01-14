import "server-only";

export async function getProducts(): Promise<Product[]> {
    const url = "https://nikomaru-portfolio-01.microcms.io/api/v1/products";
    const response = await fetch(url, {
        headers: {
            "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY as string,
        },
        method: "GET",
    });

    if (!response.ok) {
        throw new Error("fetch error");
    }

    const data: { contents: Product[] } = await response.json();
    return data.contents;
}
