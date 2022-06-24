let defaultState = {
    selectedItems : { items:[], resturantTitle: "" }
}

let CartReducer = (state = defaultState, action) =>{
    switch (action.type){
        case 'ADD_TO_CART':{
            let newState ={...state};
            if(action.payload.checkboxValue){
                console.log('ADD TO CART')
            
            newState.selectedItems ={
                items : [...newState.selectedItems.items, action.payload],
                resturantTitle: action.payload.resturantTitle,
            };

        } else {
            console.log("REMOVE FROM CART")
            newState.selectedItems= {
                items: [
                    ...newState.selectedItems.items.filter(
                        (item)=>item.title !== action.payload.title
                        )
                ],
                resturantTitle: action.payload.resturantTitle
            };
        }
        console.log(newState, '🐱‍🏍')
        return newState;
        }

        

        default:
        return state;
    }
}
 
export default CartReducer;