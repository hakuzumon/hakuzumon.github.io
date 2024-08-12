import TypeAnimation from "~/components/TypeAnimation";
import {createSignal, For, Show} from "solid-js";
import AnimatedBox from "~/components/AnimatedBox";
import Tetris from "~/components/Tetris";

export default function Home() {
    const [a1, setA1] = createSignal(false);
    const [a2, setA2] = createSignal(false);
    const [a3, setA3] = createSignal(false);
    const [a4, setA4] = createSignal(false);
    
    setTimeout(() => {
        setA1(true);
    }, 400);
    
    return (
        <div class="bg1">
            <div class="p-4 md:p-8 md:pt-16 font-light text-white/85 max-w-screen-md mx-auto min-h-screen">

                <div class="text-7xl h-100">
                    <TypeAnimation start={a1} completed={() => setA2(true)} text={"evident."}
                                   typingDelayMs={50} completedDelayMs={50} cssClass="blinker"
                                   showPromptInitially={false}></TypeAnimation>
                </div>
                <div class="text-2xl mt-4 md:mt-16">
                    <TypeAnimation text={"Olemme softatalo."}
                                   start={a2} completed={() => setA3(true)} completedDelayMs={50}
                                   typingDelayMs={17}></TypeAnimation>
                    <TypeAnimation text={" Teemme web-, työpöytä- ja mobiilisovelluksia."}
                                   start={a3} completed={() => setA4(true)}
                                   typingDelayMs={17}></TypeAnimation>
                </div>
                
                <div class="mt-8 md:mt-32 mx-auto">
                    <Show when={a4()}>
                        <AnimatedBox>
                            <div>TODO</div>
                        </AnimatedBox>
                    </Show>
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
    {name: "Elisa", url: "https://www.elisa.fi", image: "/img/affiliates/elisa.svg"},
    {name: "Finnpilot", url: "https://www.finnpilot.fi", image: "/img/affiliates/finnpilot.png"},
    {name: "Mylab", url: "https://www.mylab.fi/fi/", image: "/img/affiliates/mylab.svg"},
    {name: "Kansalliskirjasto", url: "https://www.kansalliskirjasto.fi/fi", image: "/img/affiliates/kansalliskirjasto.svg"},
    {name: "Modulight", url: "https://modulight.com/", image: "/img/affiliates/modulight.png"},
    {name: "Emtele", url: "https://www.emtele.com/", image: "/img/affiliates/emtele-automation.png"},
    {name: "Oikeusministeriö", url: "https://oikeusministerio.fi/fi/", image: "/img/affiliates/oikeusministerio.svg"},
    {name: "Citrus", url: "https://www.citrus.fi", image: "/img/affiliates/citrus.svg"},
    {name: "Cinia", url: "https://www.cinia.fi", image: "/img/affiliates/cinia.svg"},
    {name: "SilverBucket", url: "https://www.silverbucket.com", image: "/img/affiliates/Silverbucket.svg"},
    {name: "Thth Ry", url: "http://www.ththry.org", image: "/img/affiliates/thth_ry.svg"},
    {name: "Solita", url: "https://www.solita.fi/", image: "/img/affiliates/solita.svg"},
    {name: "Finitec", url: "http://www.finitec.fi", image: "/img/affiliates/finitec.svg"},
    {name: "Gofore", url: "https://www.gofore.fi", image: "/img/affiliates/gofore.svg"},
    {name: "Atostek", url: "https://www.atostek.fi", image: "/img/affiliates/atostek.png"},
];

function Affiliates() {
    return (
        <div class="text-white/70 font-light">
            <div class="pt-64 pb-64 flex flex-col gap-16 max-w-screen-md mx-auto">
                <h2 class="text-2xl text-center text-amber-500">Asiakkaita ja yhteistyökumppaneita</h2>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-16 items-center">
                    <For each={otherCustomers}>{(other) =>
                        <div class="text-lg mx-auto">
                            <a href={other.url} target="_blank">
                                <Show when={!!other.image}>
                                    <img src={other.image} alt={other.name} 
                                         class="grayscale invert opacity-75 min-w-32 w-52 max-w-full max-h-24"/>    
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
        <div class="text-white/70 pt-8 pb-8 bg-stone-800/80">
            <div class="space-y-16 m-16 font-light max-w-screen-md mx-auto text-center">
                &copy; Evident Solutions Oy {year}
            </div>
        </div>
    )
}

