// React imports
import { InputHTMLAttributes } from "react";

// Css
import styles from "./input.module.css"

export default function Input( props: InputHTMLAttributes<HTMLInputElement> ){
    return <input className={styles.container} {...props} />
}