import { Hono } from "hono";

const app = new Hono<{ Bindings: CloudflareEnv }>();

app.get("list", async (c) => {
    let keys = [];
    const bucket = process.env.SLIDES as unknown as R2Bucket;
    const time = new Date().getTime();
    console.log("List getting");
    try {
        const listResult = await bucket.list({ prefix: "", delimiter: "/" });
        keys = listResult.delimitedPrefixes.map((delimiter) =>
            delimiter.replace("/", ""),
        );
    } catch (error) {
        console.error(error);
        return new Response(error?.toString(), { status: 500 });
    }
    console.log(`List getting: ${new Date().getTime() - time}ms`);

    const override: { id: string; lastUpdate: Date }[] = [
        { id: "slidev", lastUpdate: new Date("2024-02-25") },
        { id: "oauth2-with-ktor", lastUpdate: new Date("2024-06-25") },
        { id: "hono-conf-2024", lastUpdate: new Date("2024-06-26") },
        { id: "home-server", lastUpdate: new Date("2024-10-24") },
    ];
    console.log("Title getting");
    let slides: Slide[] = (
        await Promise.all(
            keys.map(async (key) => {
                const id = key as string;
                let object = await bucket.get(`${id}/index.html`);
                if (object === undefined) {
                    // skip
                    return null;
                }
                object = object as R2ObjectBody;
                const html = (await object?.text()) as string;
                const title = (
                    html.match(/<title>(.*?)<\/title>/)?.[1] as string
                ).split(" - ")[0] as string;
                const image = `https://${process.env.NEXT_PUBLIC_S3_HOST_NAME}/${id}/picture/1.png`;
                const link = `https://${process.env.NEXT_PUBLIC_S3_HOST_NAME}/${id}/index.html`;
                const lastUpdate = new Date(object.uploaded);

                return { id, title: title, image, link, lastUpdate };
            }),
        )
    ).filter((slide) => slide !== null);

    // Override the last update date
    for (const it of override) {
        const slide = slides.find((slide) => slide.id === it.id);
        if (slide) {
            slide.lastUpdate = it.lastUpdate;
        }
    }

    slides.sort(
        (a, b) =>
            (b.lastUpdate?.getTime() ?? 0) - (a.lastUpdate?.getTime() ?? 0),
    );

    slides = slides.filter((it) => it.title !== "Test Slidev");
    // console.log(`Time: ${new Date().getTime() - time}ms`);

    c.header("Content-Type", "application/json");
    return c.json(slides);
});

export default app;
