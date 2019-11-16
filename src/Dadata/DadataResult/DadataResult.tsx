import React from 'react';
import * as DadataTypes from './../DadataTypes';
import styles from './DadataResult.module.scss'

export interface DadataResultProps {
    data: Array<DadataTypes.Suggestion>,
    onItemClick: (id: number) => void;
}

const dadataResult: React.FC<DadataResultProps> = (props) => {
    let preparedDataList = null;
    if (props.data) {
        preparedDataList = props.data.map((elem: DadataTypes.Suggestion, i: number) => {
            return (<div onClick={()=>props.onItemClick(i)} className={styles.Elem} key={elem.data.inn}>
            <div className={styles.Header}>{elem.value}</div>
            <span className={styles.Inn}>{elem.data.inn}</span>
            <span className={styles.City}>{elem.data.address.data.city_with_type}</span>
        </div>)
        })
    }

return (<div className={styles.Wrapper}>{preparedDataList}</div>)
}

export default dadataResult;