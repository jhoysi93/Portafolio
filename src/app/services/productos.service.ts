import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ProductosService {

  productos: any[] = [];
  cargandoProductos: boolean = true;
  productosFiltrados: any[] = [];

  constructor(private http: Http) {
    this.cargarProductos();
  }


  public cargarProductos() {
    if (this.productos.length == 0) {

      this.cargandoProductos = true;

      let promesa = new Promise((resolve, reject) => {
        this.http.get('https://paginaweb-22df1.firebaseio.com/productos_idx.json')
          .subscribe(res => {
            // console.log( res.json() );

            // setTimeout( ()=>{
            this.cargandoProductos = false;
            this.productos = res.json();
            resolve();
            //}, 1500)
          });

      });
      return promesa;

    }
  }

  public cargarProducto(cod: string) {
    return this.http.get(`https://paginaweb-22df1.firebaseio.com/productos/${cod}.json`)
  }


  public buscarProducto(termino: string) {

    //console.log("Buscando Productos");
    //console.log(this.productosFiltrados.length);

    if (this.productos.length === 0) {
      this.cargarProductos().then(() => {
        //termino la carga
        this.filtrarProductos( termino );
      });
    } else {
        this.filtrarProductos( termino );
    }


  }


  public filtrarProductos(termino: string) {

    this.productosFiltrados = [];
    termino = termino.toLowerCase();

    this.productos.forEach(prod => {

      if (prod.categoria.indexOf( termino ) >= 0 || prod.titulo.toLowerCase().indexOf( termino ) >= 0 ) {
        this.productosFiltrados.push( prod );
        //console.log( prod );
      }

      //console.log(prod);
    });
  }
}
