import { Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { AboutComponent } from './features/about/about.component';

export const routes: Routes = [
  // Carga Home (Hero + Projects) por defecto al entrar a la raíz
  { path: '', component: HomeComponent },

  // Carga solo About cuando la URL es /about
  { path: 'about', component: AboutComponent },

  // Redirige al Home si el usuario escribe una ruta que no existe
  { path: '**', redirectTo: '' }
];
