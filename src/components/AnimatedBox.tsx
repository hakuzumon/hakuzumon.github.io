import styles from './AnimatedBox.module.css';

export default function AnimatedBox(props: any) {
    return (
        <div class={styles.box}>
            {props.children}
        </div>
    )
}