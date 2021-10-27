import { SELECT } from '../action/index';

function select(state=[],action){
    switch(action.type){
        default:
            return state;
        case SELECT:
            let add = {
                id:action.id,
                name:action.name,
                age:action.age,
                power:action.power
            }
            state=add;
            console.log("SELECTED",state)
            return state;

    }
}


export default select;