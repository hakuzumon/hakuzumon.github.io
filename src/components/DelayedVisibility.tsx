import {createSignal, JSXElement, Show} from "solid-js";

interface DelayedVisibilityProps {
    delayMs: number;
    children: JSXElement;
}

export function DelayedVisibility(props: DelayedVisibilityProps) {
    let [visible, setVisible] = createSignal(false);
    
    setTimeout(() => {
        setVisible(true);
    }, props.delayMs ?? 500);
    
    return (
        <div>
            <Show when={visible()}>
                {props.children}
            </Show>
        </div>
    )
}