import * as types from './../constants/actionTypes';

export const getData = (data) =>{
    return {
        type : types.GET_DATA,
        data
    }
}