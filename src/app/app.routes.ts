import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PortafolioComponent, ItemComponent, AboutComponent, SearchComponent } from "./components/index.pagina";


 const APP_ROUTES: Routes =[
     { path: '', component: PortafolioComponent },
     { path: 'home', component: PortafolioComponent },
     { path: 'about', component: AboutComponent },
     { path: 'item/:id', component: ItemComponent },
     { path: 'buscar/:termino', component: SearchComponent },
     { path:  '**', pathMatch: 'full', redirectTo: 'home' }
 ];


export const APP_ROUTING:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, { useHash: true });