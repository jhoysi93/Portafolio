import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent, ItemComponent } from "./components/index.pagina";
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';


 const APP_ROUTES: Routes =[
     { path: 'home', component: PortafolioComponent },
     { path: 'about', component: AboutComponent },
     { path: 'item/:id', component: ItemComponent },
     { path: 'buscar/:termino', component: SearchComponent },
     { path:  '**', pathMatch: 'full', redirectTo: 'home' }
 ];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);