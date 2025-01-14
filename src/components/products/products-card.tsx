import {css} from "@/styled-system/css";
import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {Card} from "../ui/card";

type Params = {
    product: Product;
};

export default function ProductsCard({product}: Params) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const renderImage = () => {
        const aspectRatio = product.image ? product.image.width / product.image.height : 1;

        const imageStyle = css({
            aspectRatio: `${aspectRatio}`,
            display: "flex",
            maxHeight: {
                lg: "30vh",
            },
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            position: "relative",
            borderRadius: "xl",
            fontSize: "10vh",
            margin: "auto",
            textAlign: "center",
        });

        if (!product.image) {
            return (
                <div className={imageStyle}>
                    {product.emoji}
                </div>
            );
        }
        return (
            <div className={imageStyle}>
                <Image
                    src={product.image.url}
                    alt={product.title}
                    width={product.image.width}
                    height={product.image.height}
                />
            </div>
        );
    };

    if (!isClient) {
        return null;
    }

    return (
        <Link
            href={`/products/${product.id}`}
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
                    outline: "none",
                    border: "none",
                    boxShadow: "none",
                })}
            >
                <Card.Header
                    className={css({
                        padding: "0px",
                        outline: "none",
                        margin: "auto",
                        justifyContent: "center",
                        maxHeight: "50vh",
                        position: "relative",
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
                                base: "xs",
                                lg: "md",
                            },
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            textAlign: "center",
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
