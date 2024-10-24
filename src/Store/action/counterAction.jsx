export {increment} from "../reducer/CounterSlice";
import { decrement } from "../reducer/CounterSlice";
export const asyncdecrement= (value) => (dispatch,getState)=>{
console.log(getState());
setTimeout(() => {
    dispatch(decrement(value));
},2000);
}
    
