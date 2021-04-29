import { Buy_Cake } from "./cakeTypes"

const initialState:any = {
    numOfCakes:10
}

const cakeReducer = (state = initialState, action:any)=>{
    switch(action.type){
        case Buy_Cake: return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default:return state
    }

}
export default cakeReducer