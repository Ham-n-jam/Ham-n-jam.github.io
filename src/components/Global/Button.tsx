import React, {MouseEventHandler, ReactElement} from "react";
import styles from "./Button.module.css";

interface ButtonProps {
    text: string | ReactElement,
    onClick?: MouseEventHandler,
    color?: string
}

export default function Button({ text, onClick, color = "black" }: ButtonProps) {
    const classNames = new Map([
        ['black', "black"],
        ['white', "white"],
        ['animated', "animated"],
    ]);

    const className = classNames.get(color) ?? "black";

    return (
        <div className={`${styles.button} ${styles[className]}`} onClick={onClick}>
            {text}
        </div>
    );
}