import {Accessor, createEffect, createSignal} from "solid-js";

interface TypeSimulationProps {
    text: string;
    typingDelayMs?: number;
    completedDelayMs?: number;
    showPromptInitially?: boolean;
    start: Accessor<boolean>;
    completed?: () => void;
    cssClass?: string;
}

export default function TypeAnimation(props: TypeSimulationProps) {
    const [text, setText] = createSignal("");
    const [prompt, setPrompt] = createSignal(false);
    
    createEffect(() => {
        if (props.start()) {
            updateText();
        }
    });
    
    const promptDelay = 250;
    const typeDelay = props.typingDelayMs ?? 75;
    const target = props.text;
    let index = -1;

    function updateText() {
        setPrompt(true);
        setText(target.substring(0, ++index));
        if (index < target.length) {
            setTimeout(() => {
                updateText();
            }, typeDelay);
        } else {
            setTimeout(() => {
                setPrompt(false);
                if (props.completed) {
                    setTimeout(() => {
                        props.completed && props.completed();
                    }, props.completedDelayMs ?? 0);
                }
            }, promptDelay);
        }
    }

    setPrompt(props.showPromptInitially ?? false);
    
    return (
        <span class={props.cssClass}>{text()}<span class="text-amber-500">{prompt() ? '_' : ''}</span></span>
    )
}