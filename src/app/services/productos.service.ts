import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ProductosService {

  productos: any[] = [];
  cargandoProductos: boolean = true;

  constructor( private http: Http) {
    this.cargarProductos();
  }


  public cargarProductos(){
    if( this.productos.length == 0 ){

      this.cargandoProductos = true;

      this.http.get('https://paginaweb-22df1.firebaseio.com/productos_idx.json')
                .subscribe( res =>{
                  console.log( res.json() );
                  this.cargandoProductos = false;
                });
    }
  }
}
