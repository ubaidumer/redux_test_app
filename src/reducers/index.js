import { combineReducers } from 'redux';
import heros from './hero.reducer';
import select from './select.reducer';
const rootReducer = combineReducers(
{ 
    heros
    ,
    select
}
)
export default rootReducer;