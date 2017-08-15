import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent  {

  termino: string = undefined;

  constructor( public route:ActivatedRoute, public _proSer: ProductosService) { 
        route.params.subscribe( parametros =>{
          this.termino = parametros['termino'];
         // console.log( this.termino );

          _proSer.buscarProducto( this.termino );

        });
  }


}
