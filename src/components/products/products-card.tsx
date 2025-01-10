import { css } from "@/styled-system/css";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Card } from "../ui/card";

type Params = {
    product: Product;
};

export default function ProductsCard({ product }: Params) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const renderImage = () => {
        switch (product.imageType) {
            case "emoji":
                return <div>{product.image.src}</div>;
            case "desktop":
                return (
                    <Image
                        src={product.image.src}
                        width={1920}
                        height={1080}
                        alt={product.image.alt}
                    />
                );
            case "smartphone":
                return (
                    <Image
                        src={product.image.src}
                        alt={product.image.alt}
                        width={340 * 2}
                        height={680 * 2}
                    />
                );
            default:
                return null;
        }
    };

    if (!isClient) {
        return null;
    }

    return (
        <Link
            href={`/products/${product.id}`}
            target="_blank"
            className={css({
                display: "block",
                width: "100%",
                textDecoration: "none",
            })}
        >
            <Card.Root
                className={css({
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    background: "none",
                    outline: "none", // Removed outline
                    border: "none",
                    boxShadow: "none",
                })}
            >
                <Card.Header
                    className={css({
                        padding: "0px",
                        outline: "none", // Removed outline
                        margin: "auto",
                        justifyContent: "center", // Changed to center the image
                    })}
                >
                    {renderImage()}
                </Card.Header>

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
                        {product.title}
                    </div>
                </Card.Body>
            </Card.Root>
        </Link>
    );
}
