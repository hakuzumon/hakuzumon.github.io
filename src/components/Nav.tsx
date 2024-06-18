import {useLocation} from "@solidjs/router";
import {For} from "solid-js";

interface Link {
    url: string,
    label: string,
}

export default function Nav() {
    const location = useLocation();
    const active = (path: string) =>
        path == location.pathname ? "bg-[#898a1f]" : "";
    const item: string = "p-2 pt-8 pb-2";
    const links: Link[] = [
        {url: "/", label: "Evident"},
        {url: "/customers", label: "Töitämme"},
        {url: "/personnel", label: "Henkilöstö"},
        {url: "/opensource", label: "Open source"},
        {url: "/contact", label: "Yhteystiedot"},
    ];

    return (
        <nav class="bg-[#585812]">
            <div class="container flex items-center text-white px-10">
                <For each={links}>{(link) =>
                    <a class={`${item} ${active(link.url)}`} href={link.url}>{link.label}</a>
                }</For>
            </div>
        </nav>
    );
}
