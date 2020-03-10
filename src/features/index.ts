import {createStore, combineReducers} from 'redux'

// import your feature reducer here
import {reducer as themeReducer} from './theme'

export default createStore(
    combineReducers({
        themeFeature: themeReducer
    })
)