import TypeAnimation from "~/components/TypeAnimation";
import {For, Show} from "solid-js";
import AnimatedBox from "~/components/AnimatedBox";
import {DelayedVisibility} from "~/components/DelayedVisibility";

// TODO chained rendering instead of fixed delays
export default function Home() {
    return (
        <div>
            <div class="m-16 font-light text-black/85 max-w-screen-md mx-auto min-h-screen">
                <div class="text-7xl h-100">
                    <TypeAnimation text={"evident."} initialDelayMs={400}></TypeAnimation>
                </div>
                <div class="text-2xl mt-16">
                    <TypeAnimation text={"Olemme softatalo."}
                                   initialDelayMs={1500}
                                   showPromptInitially={false}
                                   typingDelayMs={25}></TypeAnimation>
                    <TypeAnimation text={" Teemme web-, työpöytä- ja mobiilisovelluksia."}
                                   initialDelayMs={2600}
                                   showPromptInitially={false}
                                   typingDelayMs={25}></TypeAnimation>
                </div>
                
                <div class="mt-64 mx-auto">
                    <DelayedVisibility delayMs={4500}>
                        <AnimatedBox></AnimatedBox>
                    </DelayedVisibility>
                </div>
            </div>
            
            <Affiliates></Affiliates>
            
            <Footer></Footer>
        </div>
    );
}


interface OtherCustomer {
    name: string;
    url: string;
    image?: string;
}

const otherCustomers: OtherCustomer[] = [
    {name: "Emtele", url: "https://www.emtele.com/", image: "/img/affiliates/emtele-automation.png"},
    {name: "Oikeusministeriö", url: "https://oikeusministerio.fi/fi/", image: "/img/affiliates/oikeusministerio.svg"},
    {name: "Atostek", url: "https://www.atostek.fi", image: "/img/affiliates/atostek.png"},
    {name: "Citrus", url: "https://www.citrus.fi", image: "/img/affiliates/citrus.svg"},
    {name: "Mattersoft", url: "http://www.mattersoft.fi", image: "/img/affiliates/mattersoft.png"},
    {name: "Finitec", url: "http://www.finitec.fi", image: "/img/affiliates/finitec.svg"},
    {name: "Gofore", url: "https://www.gofore.fi", image: "/img/affiliates/gofore.svg"},
    {name: "Cinia", url: "https://www.cinia.fi", image: "/img/affiliates/cinia.svg"},
    {name: "SilverBucket", url: "https://www.silverbucket.com", image: "/img/affiliates/Silverbucket.svg"},
    {name: "Thth Ry", url: "http://www.ththry.org", image: "/img/affiliates/thth_ry.svg"},
];

function Affiliates() {
    return (
        <div class="text-black/70 font-light">
            <div class="pt-64 pb-64 flex flex-col gap-16 max-w-screen-md mx-auto border-t border-amber-500">
                <h2 class="text-2xl text-center">Asiakkaita ja yhteistyökumppaneita</h2>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
                    <For each={otherCustomers}>{(other) =>
                        <div class="text-lg mx-auto">
                            <a href={other.url} target="_blank">
                                <Show when={!!other.image}>
                                    <img src={other.image} alt={other.name} 
                                         class="grayscale opacity-50 min-w-48 max-h-10"/>    
                                </Show>
                                <Show when={!other.image}>
                                    {other.name}
                                </Show>
                            </a>
                        </div>
                    }</For>
                </div>
            </div>
        </div>
    )
}

function Footer() {
    const year = new Date().getFullYear();
    
    return (
        <div class="text-white/70 pt-8 pb-8 bg-gradient-to-tr from-stone-900 to-slate-800">
            <div class="space-y-16 m-16 font-light max-w-screen-md mx-auto text-center">
                &copy; Evident Solutions Oy {year}
            </div>
        </div>
    )
}

