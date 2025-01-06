import { headers } from "next/headers";

export async function fetcher(
    url: string,
    options?: RequestInit<CfProperties<unknown>> | undefined,
) {
    const headersData = headers();
    const host = headersData.get("host");
    if (!host) {
        throw new Error("Host header is missing");
    }
    const protocol =
        headersData.get("x-forwarded-proto") ??
        (host.startsWith("localhost") ? "http" : "https");
    const apiBase = `${protocol}://${host}`;

    const local = `${apiBase}${url}`;

    const appendHeaders = new Headers();
    return fetch(local, {
        headers: appendHeaders,
        ...options,
    });
}
