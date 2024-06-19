import {createSignal, Show} from "solid-js";

interface HoverableImageProps {
    main: string;
    hover?: string;
    alt: string;
    width: number;
    cssClass: string;
}

export default function HoverableImage(props: HoverableImageProps) {
    const [imageUrl, setImageUrl] = createSignal(props.main);
    const enabled = !!props.hover;

    const handleMouseEnter = () => {
        setImageUrl(props.hover!);
    };

    const handleMouseLeave = () => {
        setImageUrl(props.main);
    };

    return (
        <>
            <Show when={enabled}>
                <img
                    src={imageUrl()}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    width={props.width}
                    alt={props.alt}
                    class={props.cssClass}
                />
            </Show>
            <Show when={!enabled}>
                <img src={imageUrl()} alt={props.alt} width={props.width} class={props.cssClass}/>
            </Show>
        </>
    );
}
