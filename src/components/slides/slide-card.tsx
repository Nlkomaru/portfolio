import { css } from "@/styled-system/css";
import Image from "next/image";
import Link from "next/link";
import { Card } from "../ui/card";

const SlideCard = (props: { slide: Slide }) => {
    const { slide } = props;

    return (
        <Link
            href={slide.link}
            target="_blank"
            className={css({
                display: "block",
                width: "100%",
            })}
        >
            <Card.Root
                className={css({
                    width: "100%",
                    outline: "1px solid",
                    outlineColor: "gray.light.a5",
                    display: "grid",
                    gridTemplateColumns: "1fr",
                })}
            >
                <Card.Header
                    className={css({
                        padding: "0px",
                        outline: "1px solid",
                        outlineColor: "black",
                    })}
                >
                    <Image
                        width={1920}
                        height={1080}
                        src={slide.image}
                        alt={slide.id}
                    />
                </Card.Header>
                <hr
                    style={{
                        color: "gray",
                        height: 2,
                    }}
                />
                <Card.Body
                    className={css({
                        padding: {
                            base: "4px 8px 0px 8px",
                            lg: "8px 16px",
                        },
                    })}
                >
                    <div
                        className={css({
                            fontSize: {
                                base: "sm",
                                lg: "lg",
                            },
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            width: "100%",
                            lineClamp: 1,
                        })}
                    >
                        {slide.title}
                    </div>
                </Card.Body>

                <Card.Footer
                    className={css({
                        padding: {
                            base: "4px 8px",
                            lg: "8px 16px",
                        },
                        fontSize: {
                            base: "xs",
                            lg: "md",
                        },
                    })}
                >
                    最終更新日:{" "}
                    {slide.lastUpdate
                        ? new Date(slide.lastUpdate).toISOString().split("T")[0]
                        : "N/A"}
                </Card.Footer>
            </Card.Root>
        </Link>
    );
};

export default SlideCard;
