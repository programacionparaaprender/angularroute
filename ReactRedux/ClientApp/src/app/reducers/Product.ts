//import { Action, Reducer } from 'redux';
import { Reducer } from 'redux';
import {Producto} from '../types'

// -----------------
// STATE - This defines the type of data maintained in the Redux store.



export interface ProductState{
    //products:Array<Producto>
    products:Producto[]
}  
// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

export interface IncrementCountAction { type: 'INCREMENT_COUNT' }
export interface DecrementCountAction { type: 'DECREMENT_COUNT' }
export interface ADD_TO_CART { 
    type: 'ADD_TO_CART',
    payload:{
        id: string;
        name: string;
        description:string
        price: number;
    }
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type KnownAction = IncrementCountAction | DecrementCountAction | ADD_TO_CART ;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    increment: () => ({ payload:'data',type: 'INCREMENT_COUNT' } as IncrementCountAction),
    decrement: () => ({ type: 'DECREMENT_COUNT' } as DecrementCountAction),
    addToCart: (product:Producto) => ({ payload:product,type: 'ADD_TO_CART' } as ADD_TO_CART)  
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const reducer: Reducer<ProductState> = (state: ProductState | undefined, incomingAction: KnownAction): ProductState => {
    if (state === undefined) {
        let products = [
            {
                id:"1",
                name:"Product One",
                description: "This is product one",
                price: 29.99,
            },
            {
                id:"2",
                name:"Product Two",
                description: "This is product two",
                price: 39.99,
            },
            {
                id:"3",
                name:"Product Three",
                description: "This is product three",
                price: 59.99,
            }
        ]
        return { products: products };
    }
    console.log('incomingAction: '+JSON.stringify(incomingAction))
    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'ADD_TO_CART':
           //let products:Array<Producto>
           let products = []
           for(var x in state.products)
            products.push(state.products[x]);
            products.push({
                id: action.payload.id,
                name: action.payload.name,
                description:action.payload.description,
                price: action.payload.price
            }) 
           return  { products: products };
            
        default:
            return state;
    }
};
