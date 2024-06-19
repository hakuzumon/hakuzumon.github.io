import TypeAnimation from "~/components/TypeAnimation";

// TODO chained rendering instead of fixed delays
export default function Home() {
    return (
        <div class="m-16 font-light max-w-screen-md mx-auto">
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
    );
}
