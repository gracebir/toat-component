import React from 'react'
import styles from './Button.module.css';


const Button = ({children, handleClick}) => <button onClick={handleClick} className={styles.button}>{children}</button>

export default Button
