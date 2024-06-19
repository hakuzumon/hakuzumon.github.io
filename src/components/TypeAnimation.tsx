import {createSignal} from "solid-js";

interface TypeSimulationProps {
    text: string;
    initialDelayMs?: number;
}

export default function TypeAnimation(props: TypeSimulationProps) {
    const [text, setText] = createSignal("");
    const [prompt, setPrompt] = createSignal(false);
    
    const promptDelay = 250;
    const typeDelay = 75;
    const target = props.text;
    let index = -1;

    function updateText() {
        setText(target.substring(0, ++index));
        if (index < target.length) {
            setTimeout(() => {
                updateText();
            }, typeDelay);
        } else {
            setTimeout(() => {
                setPrompt(false);    
            }, promptDelay);
        }
    }

    setTimeout(() => {
        setTimeout(() => {
            updateText();
        }, promptDelay);
    }, props.initialDelayMs || promptDelay);
    
    setPrompt(true);
    
    return (
        <span>{text()}<span class="text-amber-500">{prompt() ? '_' : ''}</span></span>
    )
}