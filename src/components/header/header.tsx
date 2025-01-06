import { css } from "@/styled-system/css";
import { HamburgerMenu } from "~/components/header/menu";
import { Navbar } from "~/components/header/navbar";
import { Logo } from "./logo";
import { Title } from "./title";

export const Header = () => {
    return (
        <div
            className={css({
                display: "flex",
                margin: {
                    base: "0",
                    lg: "16px 32px",
                },
                padding: "16px",
                maxWidth: "1600px",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "flex-start",
            })}
        >
            <Logo />
            <div>
                <HamburgerMenu />
            </div>
        </div>
    );
};
