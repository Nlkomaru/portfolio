import parse from "html-react-parser";
export default async function Home({ params }: { params: { id: string } }) {
    const data: Product = await fetch(
        `https://nikomaru-portfolio-01.microcms.io/api/v1/products/${params.id}`,
        {
            headers: {
                "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY as string,
            },
            method: "GET",
        },
    ).then((res) => res.json());

    return (
        <>
            {data.title}
            <div>{parse(data.description)}</div>
        </>
    );
}
