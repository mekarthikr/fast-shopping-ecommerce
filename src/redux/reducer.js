import * as types from "./actionType";
const initialState = {
  users: [],
  user: {},
  products: [],
  product: {},
  loading: true,
  cart:[],
  value:[],
  isLogin:false
};

const usersReducers = (state = initialState, action) => {
  console.log("action",action.payload)
  switch (action.type) {
    
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
      case types.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case types.DELETE_USER:
    case types.DELETE_PRODUCT:
    case types.ADD_USER:
    case types.ADD_PRODUCT:
    case types.UPDATE_USER:
      return {
        ...state,
        loading: false,
      };
      case types.UPDATE_PRODUCT:
        return {
          ...state,
          loading: false,
        };
    case types.GET_SINGLE_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
      case types.GET_SINGLE_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
      // case types.ADD_TO_CART:
      //   const newCart=[...state,action.payload]

      //   return {
      //     // ...state,
      //     // product: action.payload,
      //     // loading: false,
      //     //           ...state,
      //     // cart: initialState.cart,
      //     // loading: false,
      //     ...state.cart,
      //     cart:newCart,
      //     loading: false,
          
      //   };
        case types.ADD_TO_CART:
          console.log("quan",action.payload.quantity)
          if(!action.payload.quantity)
          {
            action.payload.quantity=1;
          }
          // else
          // {
          //   action.payload.quantity=+1;
          // }
          console.log("action payload",action.payload)
          console.log("...state",...state.value)
          const val=[...state.value,action.payload]
          return{
            ...state,
            value:val
          }
          case types.REMOVE_FROM_CART:
            const newbasket=[...state.value];
            const index=state.value.findIndex((item)=>item.id===action.payload)
            newbasket.splice(index,1)
            return{
              ...state,
              value:newbasket,
            }
    default:
      return state;
  }
};

export default usersReducers;
