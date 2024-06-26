import {useLocation} from "@solidjs/router";
import {createEffect, createSignal, For, onCleanup, Show} from "solid-js";

interface Link {
    url: string,
    label: string,
}

export default function Nav() {
    const [scrollPosition, setScrollPosition] = createSignal(0);
    const [scrollDirection, setScrollDirection] = createSignal(0);
    const [showHamburger, setShowHamburger] = createSignal(false);
    const [showSideNavi, setShowSideNavi] = createSignal(false);
    const location = useLocation();

    createEffect(() => {
        const handleScroll = () => {
            const previous = scrollPosition();
            const currentPos = window.scrollY;
            
            // If user scrolls more than this amount of units in one direction, register it as scrolling movement.
            // This makes it more resilient to tiny thumb movements.
            const scrollThreshold = 50;
            if (Math.abs(currentPos - previous) > scrollThreshold) {
                setScrollPosition(currentPos);
                setScrollDirection(scrollPosition() - previous);
                setShowHamburger(scrollDirection() < 0);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener when the component is unmounted
        onCleanup(() => {
            window.removeEventListener("scroll", handleScroll);
        });
    });

    const active = (path: string) => {
        const pathname = normalizePath(location.pathname);
        return path === pathname ? "active bg-gradient-to-t from-amber-800 to-amber-900" : "";
    }
    const headerLinkStyle: string = "p-4 pt-8 pb-2 whitespace-nowrap shadow";
    const links: Link[] = [
        {url: "/", label: "Evident"},
        {url: "/references", label: "Töitämme"},
        {url: "/personnel", label: "Henkilöstö"},
        {url: "/opensource", label: "Open Source"},
        {url: "/contact", label: "Yhteystiedot"},
    ];

    function toggleNavigation() {
        setShowSideNavi(!showSideNavi());
    }

    return (
        <>
            <nav class="bg-gradient-to-tr from-stone-900 to-stone-800 sticky top-[-1.5rem] z-10 max-sm:hidden">
                <div class="container flex items-center text-white px-4 md:px-10 font-light">
                    <For each={links}>{(link) =>
                        <a class={`${headerLinkStyle} ${active(link.url)}`} href={link.url}>{link.label}</a>
                    }</For>
                </div>
            </nav>

            <div class={`sm:hidden bottom-16 right-4 fixed rounded-full z-30
                flex h-20 w-20 justify-center items-center transition-opacity cursor-pointer 
                ${showHamburger() ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                 onClick={() => toggleNavigation()}>
                <span class="fill-amber-500/70 scale-75">
                    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask1">
                            <circle cx="50" cy="50" r="49" fill="white"/>
                            <rect x="25" y="34" width="50" height="6" fill="black"/>
                            <rect x="25" y="47" width="50" height="6" fill="black"/>
                            <rect x="25" y="60" width="50" height="6" fill="black"/>
                        </mask>
                        <rect width="100" height="100" mask="url(#mask1)"/>
                    </svg>
                </span>
            </div>

            <div class={`${showSideNavi() ? '' : 'translate-x-full'} right-0 transition-transform fixed bg-gradient-to-tr from-stone-900 to-stone-800 h-full text-white z-20 drop-shadow-2xl`}>
                <div class="text-xl font-light">
                    <For each={links}>{(link) =>
                        <a class={`${active(link.url)} whitespace-nowrap block p-8`}
                           onClick={() => toggleNavigation()}
                           href={link.url}>{link.label}</a>
                    }</For>
                </div>
            </div>
        </>
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