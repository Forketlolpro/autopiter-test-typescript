import React from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
    actionType: string;
    onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: JSX.Element[] | JSX.Element | string;
  }

const button: React.FC<ButtonProps> = (props) => {
    return (
    <button disabled={props.actionType==='saved' ? true : false} 
        className={`${styles.Button} ${props.actionType==='save' ? styles.Save : styles.Saved}`} 
        onClick={props.onClickHandler}>{props.children}
    </button>)
}

export default button;