import TypeAnimation from "~/components/TypeAnimation";

export default function Home() {
    return (
        <div class="m-16 font-light max-w-screen-md mx-auto">
            <div class="text-7xl h-100">
                <TypeAnimation text={"evident."} initialDelayMs={500}></TypeAnimation>
            </div>
            <div class="text-2xl mt-16">Olemme softatalo. Teemme web-, työpöytä- ja mobiilisovelluksia.</div>
        </div>
    );
}
