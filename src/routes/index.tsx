import TypeAnimation from "~/components/TypeAnimation";
import {createSignal, For, Show} from "solid-js";

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
            <div class="p-4 pt-8 md:p-8 md:pt-16 font-light text-white/85 max-w-screen-md mx-auto">
                <div class="text-7xl">
                    <TypeAnimation start={a1} completed={() => setA2(true)} text={"evident."}
                                   typingDelayMs={75} cssClass="blinker"
                                   showPromptInitially={false}></TypeAnimation>
                </div>
                
                <div class="mt-16 md:mt-24 w-full">
                    <div class="p-8 bg-white/70 text-black/90 rounded text-xl">
                        <p>Olemme softatalo. Teemme web-, työpöytä- ja mobiilisovelluksia.</p>
                    </div>

                    <div class="mt-8 p-8 bg-stone-800/90 text-white/90 rounded text-lg">
                        <p>Palveluihimme kuuluvat mm.</p>
                        <ul class="list-disc pl-6 pt-3">
                            <li>Full-stack sovelluskehitys</li>
                            <li>Ohjelmistoarkkitehtuurin suunnittelu</li>
                            <li>Integraatiot</li>
                            <li>Katselmointi ja konsultointi</li>
                            <li>Vanhojen ohjelmistojen refaktorointi ja modernisointi</li>
                            <li>Kääntäjätoteutukset</li>
                        </ul>
                    </div>
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
    image: string;
    cssClass?: string;
}

const otherCustomers: OtherCustomer[] = [
    {cssClass: "invert", name: "Elisa", url: "https://www.elisa.fi", image: "/img/affiliates/elisa.svg"},
    {cssClass: "invert", name: "Finnpilot", url: "https://www.finnpilot.fi", image: "/img/affiliates/finnpilot.png"},
    {cssClass: "invert", name: "Mylab", url: "https://www.mylab.fi/fi/", image: "/img/affiliates/mylab.svg"},
    {cssClass: "invert", name: "Digi- ja väestötietovirasto", url: "https://dvv.fi/", image: "/img/affiliates/dvv.png"},
    {cssClass: "invert", name: "Kansalliskirjasto", url: "https://www.kansalliskirjasto.fi/fi", image: "/img/affiliates/kansalliskirjasto.svg"},
    {cssClass: "invert", name: "Oikeusministeriö", url: "https://oikeusministerio.fi/fi/", image: "/img/affiliates/oikeusministerio.svg"},
    {cssClass: "brightness-200", name: "Modulight", url: "https://modulight.com/", image: "/img/affiliates/modulight.png"},
    {cssClass: "invert", name: "Emtele", url: "https://www.emtele.com/", image: "/img/affiliates/emtele-automation.png"},
    {cssClass: "invert", name: "Cinia", url: "https://www.cinia.fi", image: "/img/affiliates/cinia.svg"},
    {cssClass: "invert", name: "SilverBucket", url: "https://www.silverbucket.com", image: "/img/affiliates/Silverbucket.svg"},
    {cssClass: "", name: "Thth Ry", url: "http://www.ththry.org", image: "/img/affiliates/thth_ry.svg"},
    {cssClass: "invert opacity-100", name: "Atostek", url: "https://www.atostek.fi", image: "/img/affiliates/atostek.png"},
    {cssClass: "invert", name: "Solita", url: "https://www.solita.fi/", image: "/img/affiliates/solita.svg"},
    {cssClass: "invert", name: "Finitec", url: "http://www.finitec.fi", image: "/img/affiliates/finitec.svg"},
    {cssClass: "invert", name: "Gofore", url: "https://www.gofore.fi", image: "/img/affiliates/gofore.svg"},
];

function Affiliates() {
    return (
        <div class="text-white/70 font-light">
            <div class="pt-32 pb-64 flex flex-col gap-16 max-w-screen-md mx-auto">
                <h2 class="text-2xl text-center text-amber-500">Asiakkaita ja yhteistyökumppaneita</h2>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-16 items-center">
                    <For each={otherCustomers}>{(other) =>
                        <div class="text-lg mx-auto">
                            <a href={other.url} target="_blank">
                                <Show when={!!other.image}>
                                    <img src={other.image} alt={other.name} 
                                         class={`min-w-32 w-52 max-w-full max-h-24 grayscale opacity-75 ${other.cssClass}`}/>    
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

