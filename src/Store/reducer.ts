import * as storeTypes from './storeTypes';
import * as actionTypes from './actionTypes';

const initialState:storeTypes.State  = {
    selectedItem: null,
    organizationList: []
}

export default (state=initialState, action: actionTypes.storeActionTypes):storeTypes.State => {
    switch (action.type) {
        case actionTypes.DADATA_SELECT_ITEM:
            return {
                ...state,
                selectedItem: action.item
            }
        case actionTypes.SAVE_ORGANIZATION:
            let newArray = state.organizationList.slice()
            newArray.slice();
            newArray.push(action.item);
            return {
                ...state,
                organizationList: newArray
            }
        case actionTypes.REMOVE_ORGANIZATION:
            let array = state.organizationList;
            return {
                ...state,
                organizationList: [...array.slice(0, action.index), ...array.slice(action.index + 1)]
            }
        default:
            return state;
    }
}