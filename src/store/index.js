export const InitialStore = () =>{
return {

  notifications: [],
  error: null


}
}

export const ACTIONS_TYPES = {

}

export default function storeReducer(store, action = {}){


    switch(action.type){
        //case ACTION.TYPES.lo que sea:
        //return{
        //...store,
        //error : null,
        //}
        default: 
         throw Error (`Acción desconocida en la store: ${action.type}`)
    }
}






