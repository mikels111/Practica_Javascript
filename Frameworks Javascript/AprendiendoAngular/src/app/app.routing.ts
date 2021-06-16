// Importar modulos del router de Angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule,Route } from '@angular/router';
// Importar componentes a los cuales les quiero hacer una pagina exclusiva
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';//El nombre BlogComponent y HomeComponent es el nombre que le pone Angular
import { FormularioComponent } from './components/formulario/formulario.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';

// Array de rutas y componentes que va a cargar
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'pagina-de-pruebas', component: PaginaComponent },
    { path: 'pagina-de-pruebas/:nombre/:apellidos', component: PaginaComponent },//:nombre y :apellidos son parametros
    { path: '**', component: ErrorComponent }//Esta ruta es para que cuando la ruta no exista

];
// Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);//Para que existan las rutas dentro del sistema de rutas de Angular