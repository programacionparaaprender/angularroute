import { Action } from "@ngrx/store"

import {Producto} from '../types'


export interface appState{
    texto: string
    products:Producto[]
}

export const initialState = {
    texto: 'Código mentor',
    products: [
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
}

export interface SpanishAction { type: 'SPANISH' }
export interface EnglishAction { type: 'ENGLISH' }
export interface EliminarUltimoAction { type: 'ELIMINAR_ULTIMO' }
export interface ADD_TO_CART { 
    type: 'ADD_TO_CART',
    payload:{
        id: string;
        name: string;
        description:string
        price: number;
    }
}

export type KnownAction = SpanishAction | EnglishAction | ADD_TO_CART | EliminarUltimoAction;


export function miReducer(state: appState=initialState, action: KnownAction){
    console.log(action)
    switch (action.type) {
        case 'SPANISH':
            //return  { texto: state.texto };
            return  { 
                ...state,
                texto: 'SPANISH' 
            };
        case 'ENGLISH':
            //return  { texto: state.texto };
            return  { 
                ...state,
                texto: 'ENGLISH'
            };
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
                return  { 
                    ...state,
                    products: products 
                };
            case 'ELIMINAR_ULTIMO':
                var products2 = []
                for(let x of state.products)
                    if(x.id != '1')
                        products2.push(x);
                return  { 
                    ...state,
                    products: products2 
                };
        default:
            return state;
    } 
    //return state;
}