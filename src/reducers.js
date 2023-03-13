import {createReducer} from '@reduxjs/toolkit';

const initialState={
c:0;

}

temp=(state,action)=>{
action.c = 249;


}

export const customReducer= createReducer(initialState,{ })
