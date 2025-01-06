import { css } from "@/styled-system/css";
import SlideCard from "~/components/slides/slide-card";
import { fetcher } from "~/lib/fetcher";

export default async function Page() {
    const slideArray = await fetcher("/api/slides/list").then((res) =>
        res.json<Slide[]>(),
    );
    for (const slide of slideArray) {
        slide.lastUpdate = slide.lastUpdate
            ? new Date(slide.lastUpdate)
            : undefined;
    }
    return (
        <>
            <h1
                className={css({
                    fontSize: "xl",
                    marginTop: "32px",
                    padding: "0px 32px",
                })}
            >
                作製したスライド一覧
            </h1>
            <div
                className={css({
                    display: "grid",
                    gridTemplateColumns: {
                        base: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(3, 1fr)",
                    },
                    gap: "32px",
                    width: "100%",
                    padding: "32px",
                    justifyContent: "space-between",
                })}
            >
                {slideArray.map((slide) => (
                    <div key={slide.id} className={css({})}>
                        <SlideCard slide={slide} />
                    </div>
                ))}
            </div>
        </>
    );
}
