import {configureStore} from '@reduxjs/toolkit'
import customReducer from './reducers.js'

const store= configureStore ({
reducer:{
custom: customReducer,
}

})


export default store;
