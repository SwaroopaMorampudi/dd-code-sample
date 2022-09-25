import {
    FETCH_SPELLS_LIST_SUCCESS,
    FETCH_SPELLS_LIST_FAILURE,
    FETCH_SPELLS_DETAILS_SUCCESS,
    FETCH_SPELLS_DETAILS_FAILURE,
    FETCH_FAVOURITE_LIST_SUCCESS,
    FETCH_FAVOURITE_LIST_FAILURE,
    ADD_FAVOURITE_SUCCESS,
    ADD_FAVOURITE_FAILURE,
    REMOVE_FAVOURITE_SUCCESS,
    REMOVE_FAVOURITE_FAILURE
} from '../constants/actionType'

const ddReducer = (state: any = { favouriteList: [] }, action: any) => {
    switch (action.type) {
        case FETCH_SPELLS_LIST_SUCCESS:
            return {
                type: 'fetch-spells-success',
                spellsList: action.payload
            }
        case FETCH_SPELLS_LIST_FAILURE:
            return {
                data: action.payload
            }
        case FETCH_SPELLS_DETAILS_SUCCESS:
            return {
                type: 'fetch-spell-details-success',
                spellDetails: action.payload
            }
        case FETCH_SPELLS_DETAILS_FAILURE:
            return {
                data: action.payload
            }
        case FETCH_FAVOURITE_LIST_SUCCESS:
            return {
                favouriteList: action.payload
            }
        case FETCH_FAVOURITE_LIST_FAILURE:
            return {
                favouriteListErr: action.payload
            }
        case ADD_FAVOURITE_SUCCESS:
            return {
                data: action.payload
            }
        case ADD_FAVOURITE_FAILURE:
            return {
                data: action.payload
            }
        case REMOVE_FAVOURITE_SUCCESS:
            return {
                data: action.payload
            }
        case REMOVE_FAVOURITE_FAILURE:
            return {
                data: action.payload
            }
        default:
            return state
    }
}
export default ddReducer;
