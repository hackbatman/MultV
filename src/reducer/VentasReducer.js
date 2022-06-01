
import { TYPES } from "../Action/Actionventas";



export const VentasInicialState = {
    
    products: [],
    ventas: [],
};
export function VentaReducer(state, action) {

    switch (action.type) {
        case TYPES.ADD_TO_VENTAS: {
            let NewItem = state.products.find((product) => product.id === action.payload);

            let itemInventa = state.ventas.find(item => item.id === NewItem.id)
            //  console.log(NewItem)
            return itemInventa ? {
                ...state,
                ventas: state.ventas.map((item) => item.id === NewItem.id ? { ...item, cant: item.cant + 1 } : item)
            } : {
                ...state,
                ventas: [...state.ventas, { ...NewItem, cant: 1 }],
            }


        }

        case TYPES.REMOVE_ONE_FROM_VENTAS: {
            let itemDetele= state.ventas.find(item=>item.id===action.payload)
            return itemDetele.cant>1?{
                ...state, 
                ventas:state.ventas.map(item=>item.id==action.payload?{...item, cant:item.cant-1}:item),
            }
            :{
                ...state,
                ventas:state.ventas.filter((item)=>item.id!==action.payload),
            };

        }
        case TYPES.REMOVE_ALL_FROM_VENTAS: {
            return{
                ...state,
                ventas:state.ventas.filter((item)=>item.id!==action.payload),
            }

        }
        case TYPES.CLEAR_VENTAS: {
            return VentasInicialState;
        }
        case TYPES.READ_ALL_DATA:{
           return{
               ...state,
               products:action.payload.map((data)=>data)
           } 
        }

        default:
            return state;
    }

}

