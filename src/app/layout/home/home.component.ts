import { Component } from '@angular/core';
// Ajusta las rutas relativas según corresponda para llegar a la carpeta features
import { HeroComponent } from '../../features/hero/hero.component';
import { ProjectsComponent } from '../../features/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  // Aquí es donde Angular ahora compilará estos dos componentes
  imports: [HeroComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent { }
