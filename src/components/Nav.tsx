import {useLocation} from "@solidjs/router";
import {createEffect, createSignal, For, onCleanup, Show} from "solid-js";
import {convertRemToPixels} from "~/utils";

interface Link {
    url: string;
    label: string;
}

export default function Nav() {
    const [scrollPosition, setScrollPosition] = createSignal(0);
    const [scrollDirection, setScrollDirection] = createSignal(0);
    const [showSideNavi, setShowSideNavi] = createSignal(false);
    const location = useLocation();

    const showTopNaviLinksScrollAmount = convertRemToPixels(1.5);
    const [showTopNaviLinks, setShowTopNaviLinks] = createSignal(true);

    createEffect(() => {
        const handleScroll = () => {
            const previous = scrollPosition();
            const currentPos = window.scrollY;

            // If user scrolls more than this amount of units in one direction, register it as scrolling movement.
            // This makes it more resilient to tiny thumb movements.
            const scrollThreshold = 10;
            if (Math.abs(currentPos - previous) > scrollThreshold) {
                setScrollPosition(currentPos);
                setScrollDirection(scrollPosition() - previous);
                setShowSideNavi(false);
            }

            setShowTopNaviLinks(currentPos < showTopNaviLinksScrollAmount || scrollDirection() < 0);
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener when the component is unmounted
        onCleanup(() => {
            window.removeEventListener("scroll", handleScroll);
        });
    });

    const isActive = (path: string) => {
        const pathname = normalizePath(location.pathname);
        return path === pathname;
    }
    const active = (path: string) => {
        if (!showTopNaviLinks()) {
            return "";
        }
        return isActive(path) ? "active bg-amber-800/50 !border-amber-800" : "";
    }
    const headerLinkStyle: string = `whitespace-nowrap transition-all h-full flex items-center border-l border-r border-transparent`;
    const links: Link[] = [
        {url: "/references", label: "Töitämme"},
        {url: "/personnel", label: "Henkilöstö"},
        {url: "/opensource", label: "Open Source"},
        {url: "/contact", label: "Yhteystiedot"},
    ];

    function toggleNavigation() {
        setShowSideNavi(!showSideNavi());
    }

    return (
        <div>
            <div class="h-[3.5rem]"></div>
            <div class={`fixed top-0 left-0 right-0 z-10 h-[3.5rem]`}>
                <nav class={`bg-gradient-to-tr w-full from-stone-900 to-stone-800 h-full`}>
                    <div class="flex items-center text-white font-light h-full">
                        <a class={`${headerLinkStyle} ${active('/')}`} href={'/'}>
                            <span class={`blinker text-2xl blinker-adjust-text px-4`}>evident</span>
                        </a>
    
                        <For each={links}>{(link) =>
                            <a class={`${headerLinkStyle} ${!isActive(link.url) ? 'hidden sm:flex' : ''} ${active(link.url)} ${!showTopNaviLinks() ? 'opacity-0' : ''}`} href={link.url}>
                                <span class={`px-4`}>{link.label}</span>
                            </a>
                        }</For>
    
                        <div onClick={() => toggleNavigation()} class="sm:hidden ml-auto mr-4 cursor-pointer select-none h-full flex items-center">
                            <div class={`p-4 rounded-full bg-stone-800`}>
                                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0" y="2" width="20" height="2" fill="white"/>
                                    <rect x="0" y="9" width="20" height="2" fill="white"/>
                                    <rect x="0" y="16" width="20" height="2" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </nav>
    
                <div class={`${showSideNavi() ? 'block' : 'hidden'} bg-gradient-to-br from-stone-900 to-stone-800 h-fit`}>
                    <div class="text-xl font-light text-right text-white">
                        <For each={links}>{(link) =>
                            <a class="whitespace-nowrap block p-8"
                               onClick={() => toggleNavigation()}
                               href={link.url}>{link.label}</a>
                        }</For>
                    </div>
                </div>
            </div>
        </div>
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