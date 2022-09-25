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

export const fetchSpellsList = (payload: any) => {
  return {
    type: FETCH_SPELLS_LIST_SUCCESS,
    payload
  }
}

export const fetchSpellsListError = (payload: any) => {
  return {
    type: FETCH_SPELLS_LIST_FAILURE,
    payload
  }
}

export const fetchSpellsDetails = (payload: any) => {
  return {
    type: FETCH_SPELLS_DETAILS_SUCCESS,
    payload
  }
}

export const fetchSpellsDetailsError = (payload: any) => {
  return {
    type: FETCH_SPELLS_DETAILS_FAILURE,
    payload
  }
}

export const fetchFavouriteSpellsList = (payload: any) => {
  return {
    type: FETCH_FAVOURITE_LIST_SUCCESS,
    payload
  }
}

export const fetchFavouriteSpellsListError = (payload: any) => {
  return {
    type: FETCH_FAVOURITE_LIST_FAILURE,
    payload
  }
}

export const addToFavourite = (payload: any) => {
  return {
    type: ADD_FAVOURITE_SUCCESS,
    payload
  }
}

export const addToFavouriteError = (payload: any) => {
  return {
    type: ADD_FAVOURITE_FAILURE,
    payload
  }
}

export const removeFavourite = (payload: any) => {
  return {
    type: REMOVE_FAVOURITE_SUCCESS,
    payload
  }
}

export const removeFavouriteError = (payload: any) => {
  return {
    type: REMOVE_FAVOURITE_FAILURE,
    payload
  }
}
