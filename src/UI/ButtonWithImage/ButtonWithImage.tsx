import React from 'react';;
import styles from './ButtonWithImage.module.scss';
import trash from '../../Trash.png';

export interface ButtonWithImageProps {
    clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const buttonWithImage: React.FC<ButtonWithImageProps> = (props) => {
    return (<button className={styles.Button} style={{backgroundImage: `url(${trash})`}} onClick={props.clickHandler}/>)
}

export default buttonWithImage;