export const SUBMIT = "SUBMIT";
export const REMOVE = 'REMOVE';
export const EDIT ='EDIT';
export const SELECT ='SELECT';
export function submit(name,age,power){
   const action={
       type:SUBMIT,
       name:name,
       age:age,
       power:power
   } 
   return action;
}

export function remove(id){
    const action={
        type:REMOVE,
        id:id
    } 
    return action;
 }

 export function edit(id,name,age,power){
     const action={
         type:EDIT,
         id,
         name,
         age,
         power
     }
     return action;
 }
 export function selectHero(id,name,age,power) {
    const action={
        type:SELECT,
        id,
        name,
        age,
        power
    }
    return action;
 }