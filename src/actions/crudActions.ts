import * as actions from './index'

import * as services from '../services'

export const fetchAll = () => {
    return async (dispatch: any) => {
        return await services
            .fetch()
            .then((res) => {
                dispatch(actions.fetchSpellsList(res))
            })
            .catch((err) => {
                dispatch(actions.fetchSpellsListError(err))
            })
    }
}

export const fetchSpellDetails = (data: any) => {
    return async (dispatch: any) => {
        return await services
            .fetchSpellDetails(data)
            .then((res) => {
                dispatch(actions.fetchSpellsDetails(res))
            })
            .catch((err) => {
                dispatch(actions.fetchSpellsDetailsError(err))
            })
    }
}

export const addToFavourite = (data: any) => {
    return async (dispatch: any) => {
        return await services
            .addToFavourite(data)
            .then((res) => {
                dispatch(actions.addToFavourite(res))
            })
            .catch((err) => {
                dispatch(actions.addToFavouriteError(err))
            })
    }
}

export const removeFavourite = (data: any) => {
    return async (dispatch: any) => {
        return await services
            .removeFavourite(data)
            .then((res) => {
                dispatch(actions.removeFavourite(res))
            })
            .catch((err) => {
                dispatch(actions.removeFavouriteError(err))
            })
    }
}

export const fetchFavourites = () => {
    return async (dispatch: any) => {
        return await services
            .fetchFavourites()
            .then((res) => {
                dispatch(actions.fetchFavouriteSpellsList(res))
            })
            .catch((err) => {
                dispatch(actions.fetchFavouriteSpellsListError(err))
            })
    }
}
