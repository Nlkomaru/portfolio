import { css } from "@/styled-system/css";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header/header";
import { Logo } from "~/components/header/logo";
import Scene from "~/components/scene";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Scene />
            <Header />
            <div
                className={css({
                    margin: "0 auto",
                    maxWidth: "1600px",
                })}
            >
                {children}
            </div>
            <Footer />
        </>
    );
}
