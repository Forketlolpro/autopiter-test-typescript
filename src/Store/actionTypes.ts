import * as dadataTypes from '../Dadata/DadataTypes';

export const DADATA_SELECT_ITEM = 'DADATA_SELECT_ITEM';
export const SAVE_ORGANIZATION = 'SAVE_ORGANIZATION';
export const REMOVE_ORGANIZATION = 'REMOVE_ORGANIZATION';

interface dadataSelectItemAction {
    type: typeof DADATA_SELECT_ITEM,
    item: dadataTypes.Suggestion
}

interface saveOrganizationAction {
    type: typeof SAVE_ORGANIZATION,
    item: dadataTypes.Suggestion
}

interface removeOrganizationAction {
    type: typeof REMOVE_ORGANIZATION,
    index: number
}

export type storeActionTypes = removeOrganizationAction | saveOrganizationAction | dadataSelectItemAction