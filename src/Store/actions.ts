import * as actions from './actionTypes';
import * as dadataTypes from '../Dadata/DadataTypes'

export const dadataSelectItem = (item: dadataTypes.Suggestion): actions.storeActionTypes => {
    return {
        type: actions.DADATA_SELECT_ITEM,
        item: item
    }
}

export const saveOrganization = (item: dadataTypes.Suggestion): actions.storeActionTypes => {
    return {
        type: actions.SAVE_ORGANIZATION,
        item: item
    }
}

export const removeOrganization = (index: number): actions.storeActionTypes => {
    return {
        type: actions.REMOVE_ORGANIZATION,
        index: index
    }
}