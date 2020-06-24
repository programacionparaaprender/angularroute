import { Component } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import { appState } from './reducers/app.reducer'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dato$: Observable<string>;
  title = 'angularroute2';
  json = ''
  texto = ''
  constructor(private store: Store<{ mensaje: string }>) {
    this.dato$ = store.select('mensaje');
    //this.dato$ = this.store.select(state => state.texto);
  }
  ngOnInit() {
    //this.dato$ = this.store.pipe(select('mensaje'));
    //this.dato$ = this.store.select(state => state.texto);
	}
  /* constructor(private store: Store<appState>){
    this.dato$ = store.select('mensaje');
    
    //this.dato$ = store.select(appState => appState.texto);
    //this.json = JSON.stringify(this.dato$);
  } */
  spanishMensaje(){
    this.store.dispatch({type: "SPANISH"})
  }
  englishMensaje(){
    this.store.dispatch({type:"ENGLISH"})
  }
  anadirProducto(){
    var product = {
      id: '1',
      name: 'Product 1',
      description:'Description product 1',
      price: 20.00
    };
    this.store.dispatch({type:"ADD_TO_CART", payload:product})
  }
  eliminarProducto(){
    this.store.dispatch({type:"ELIMINAR_ULTIMO"})
  }
}
