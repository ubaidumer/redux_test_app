import { EDIT, REMOVE, SUBMIT } from '../action/index';

function newHero(name,age,power){
    return {
        id:Math.floor(Math.random() * 1000000000),
        name,
        age,
        power
    }
}

function heros(state=[],action){
    switch(action.type){
        default:
            return state;
        case SUBMIT:
            let add = [...state,newHero(action.name,action.age,action.power)]  
            console.log('newValue',add);
            return add;  
        case REMOVE:
            let remove = state.filter(item=>item.id !== action.id);
            return remove;
        case EDIT:
            let updateheros = state.find(item=> item.id ===action.id );
            if(updateheros!= undefined){
                console.log("heros update",updateheros)
                updateheros.name= action.name;
                updateheros.age=action.age;
                updateheros.power=action.power;
                console.log("ok",...state, updateheros)
                return  [...state];
            }else{
                return state;
            }

    }
}


export default heros;