import TypeAnimation from "~/components/TypeAnimation";
import {For} from "solid-js";

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
            </div>
            
            <OtherCustomers></OtherCustomers>
            
            <Footer></Footer>
        </div>
    );
}


interface OtherCustomer {
    name: string;
    url: string;
}

const otherCustomers: OtherCustomer[] = [
    {name: "Emtele", url: "https://www.emtele.com/"},
    {name: "Oikeusministeriö", url: "https://oikeusministerio.fi/fi/"},
    {name: "Solutive Oy", url: "https://www.solutive.fi"},
    {name: "Atostek", url: "https://www.atostek.fi"},
    {name: "Citrus", url: "https://www.citrus.fi"},
    {name: "Mattersoft", url: "http://www.mattersoft.fi"},
    {name: "Finitec", url: "http://www.finitec.fi"},
    {name: "Gofore", url: "https://www.gofore.fi"},
    {name: "Cinia", url: "https://www.cinia.fi"},
    {name: "SilverBucket", url: "https://www.silverbucket.fi"},
    {name: "Thth Ry", url: "http://www.ththry.org"},
];

function OtherCustomers() {
    return (
        <div class="text-black/70 font-light">
            <div class="pt-64 pb-64 flex flex-col gap-16 max-w-screen-md mx-auto border-t border-amber-500">
                <h2 class="text-2xl text-center">Asiakkaita ja yhteistyökumppaneita</h2>

                <div class="grid grid-cols-2 gap-8">
                    <For each={otherCustomers}>{(other) =>
                        <div class="w-full text-lg text-center">
                            <a href={other.url}>{other.name}</a>
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

