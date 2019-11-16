import React, {Component} from 'react';
import ButtonWithImage from '../../UI/ButtonWithImage/ButtonWithImage';
import styles from './ListItem.module.scss';
import { Suggestion } from '../../Dadata/DadataTypes';


export interface ListItemState {
    open: boolean
}

export interface ListItemProps  {
    data: Suggestion,
    clickHandler: (e: React.SyntheticEvent) => void
}

class ListItem extends Component<ListItemProps, ListItemState> {
    state ={
        open: false
    }

    clickOpenContentButton = () => {
        this.setState((state) => {
            return {
                open: !state.open
            }
        })
    }

    render () {
        return (
            <div className={styles.Item}>
            <div className={styles.Topline}>
                <h2>{this.props.data.value}</h2>
                <ButtonWithImage clickHandler={this.props.clickHandler}/>
            </div>
            <div className={`${styles.Content} ${this.state.open ? styles.Opencontent : ''}`}>
                <div>
                    <span className={styles.Key}>ИНН</span>
                    <span className={styles.Value}>{this.props.data.data.inn}</span>
                </div>
                <div>
                    <span className={styles.Key}>КПП</span>
                    <span className={styles.Value}>{this.props.data.data.kpp}</span>
                </div>
                <div>
                    <span className={styles.Key}>ОГРН</span>
                    <span className={styles.Value}>{this.props.data.data.ogrn}</span>
                </div>
                <div>
                    <span className={styles.Key}>Юридический адрес</span>
                    <span className={styles.Value}>{this.props.data.data.address.value}</span>
                </div>
                <div>
                    <span className={styles.Key}>Генеральный директор</span>
                    <span className={styles.Value}>{this.props.data.data.management ? this.props.data.data.management.name : 'Отсутствует'}</span>
                </div>
            </div>
            <button className={`${styles.Morebutton} ${this.state.open ? styles.Morebuttonextend : ''}`} onClick={this.clickOpenContentButton}>
                подробнее
            </button>
        </div> 
        )
    }
}

export default ListItem;