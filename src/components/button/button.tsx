// React imports
import { ButtonHTMLAttributes } from "react";

// Css
import styles from "./button.module.css"

export default function Button( { children, ...restProps }: ButtonHTMLAttributes<HTMLButtonElement> ){
    return <button className={styles.container} {...restProps}>{children}</button>
}