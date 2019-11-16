import React, {Component} from 'react';
import Dadata from '../Dadata/Dadata';
import {connect} from 'react-redux';
import * as actions from '../Store/actions';
import SelectedItem from '../SelectedItem/SelectedItem';
import SelectItemsList from '../SelectItemsList/SelectItemsList';
import styles from './Main.module.scss'

class Main extends Component{
    state= {
        activeTab: 'new',
        buttonType: 'save'
    }

    onTabClickHandler = (e) => {
        this.setState({activeTab: e.currentTarget.dataset.lable})
    }

    onSaveButtonClickHandler = (item) => () =>  {
        this.setState({buttonType: 'saved'});
        this.props.saveDispatch(item);
    }

    onSuggestionsClickHandler = (item) => {
        this.setState({buttonType: 'save'})
        this.props.selectDispatch(item);
    }

    onRemoveItemClickHandler = (index) => () =>  {
        this.props.removeDispatch(index);
    }

    render () {
        return (
            <main className={styles.Main}>
                <h1>Мои организации</h1>
                <div className={styles.Tabs}>
                    <div className={styles.Tabnav}>
                        <div data-lable='new' className={`${styles.Navitem} ${this.state.activeTab==='new' ? styles.Active : ''}`} onClick={this.onTabClickHandler}>
                            Новая организация
                        </div>
                        <div data-lable='list' className={`${styles.Navitem} ${this.state.activeTab==='list' ? styles.Active : ''}`} onClick={this.onTabClickHandler}>
                            Сохраненные организации <span>({this.props.organizationList.length})</span>
                        </div>
                    </div>
                    <div className={styles.Tab}>
                        {this.state.activeTab==='new' ? 
                        (<>
                            <Dadata onSuggestionSelect={this.onSuggestionsClickHandler} title='Организация или ИП'/>
                            <SelectedItem onClickHandler={this.onSaveButtonClickHandler} item={this.props.selectedItem} buttonType={this.state.buttonType}/>
                        </>) : 
                        <SelectItemsList clickHandler={this.onRemoveItemClickHandler} list={this.props.organizationList}/>}
                    </div>
                </div>
            </main>)
    }
}

const mapStateToProps = (state) => {
    return {
        selectedItem: state.selectedItem,
        organizationList: state.organizationList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectDispatch: (item) => dispatch(actions.dadataSelectItem(item)),
        saveDispatch: (item) => dispatch(actions.saveOrganization(item)),
        removeDispatch: (index) => dispatch(actions.removeOrganization(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);