import {useLocation} from "@solidjs/router";
import {For} from "solid-js";

interface Link {
    url: string,
    label: string,
}

export default function Nav() {
    const location = useLocation();
    const active = (path: string) => {
        const pathname = normalizePath(location.pathname);
        return path === pathname ? "bg-amber-800" : "";
    }
    const item: string = "p-4 pt-8 pb-2";
    const links: Link[] = [
        {url: "/", label: "Evident"},
        {url: "/references", label: "Töitämme"},
        {url: "/personnel", label: "Henkilöstö"},
        {url: "/opensource", label: "Open Source"},
        {url: "/contact", label: "Yhteystiedot"},
    ];

    return (
        <nav class="bg-gradient-to-tr from-stone-900 to-stone-800 sticky top-[-1.5rem] z-10">
            <div class="container flex items-center text-white px-4 md:px-10 font-light overflow-x-auto">
                <For each={links}>{(link) =>
                    <a class={`${item} ${active(link.url)} whitespace-nowrap`} href={link.url}>{link.label}</a>
                }</For>
            </div>
        </nav>
    );
}

function normalizePath(path: string): string {
    // just a quick hack as the prod. server wants to add a tailing '/' to directory urls
    if (path.endsWith("/") && path.length > 1) {
        return path.substring(0, path.length - 1);
    } else {
        return path;
    }
}