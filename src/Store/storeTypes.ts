import * as dadataTypes from '../Dadata/DadataTypes';

export interface State {
    selectedItem: dadataTypes.Suggestion | null,
    organizationList: Array<dadataTypes.Suggestion>
}