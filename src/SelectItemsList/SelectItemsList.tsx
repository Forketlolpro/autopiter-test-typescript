import React from 'react';
import styles from './SelectItemsList.module.scss';
import * as dadataTypes from '../Dadata/DadataTypes';
import ListItem from './ListItem/ListItem'

export interface SelectItemListProps {
    list: Array<dadataTypes.Suggestion>
    clickHandler: (index: number) => (e: React.SyntheticEvent) => void
}

const selectItemList: React.FC<SelectItemListProps> = (props) => {
    const list = props.list.map((item, i) => {
        return <ListItem clickHandler={props.clickHandler(i)} key={item.value} data={item}/>
    })
    return (<div className={styles.Wrapper}>{list}</div>)
}


export default selectItemList;