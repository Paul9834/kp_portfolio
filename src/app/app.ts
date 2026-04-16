import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HeroComponent } from './features/hero/hero.component';
// 1. Importa la ruta real donde creaste tu projects.component.ts
import { ProjectsComponent } from './features/projects/projects.component';
import {WhatsappComponent} from './layout/whatsapp/whatsapp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Agrega ProjectsComponent al arreglo de imports
  imports: [NavbarComponent, HeroComponent, ProjectsComponent, WhatsappComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    // Título que aparece en la pestaña y en Google
    this.title.setTitle('Kevin Montealegre | Senior Mobile Engineer');

    // Tags para que los reclutadores te encuentren por keywords
    this.meta.addTags([
      { name: 'description', content: 'Senior Mobile Engineer specialized in Kotlin, Swift and Clean Architecture. Systems Engineer based in Bogotá.' },
      { name: 'keywords', content: 'Mobile Engineer, Android Developer, iOS Developer, Kotlin Multiplatform, Jetpack Compose, Swift, Spring Boot, Bogotá' },
      { name: 'author', content: 'Kevin Montealegre' },
      { name: 'robots', content: 'index, follow' },

      // Open Graph (Para que cuando compartas el link en LinkedIn se vea brutal)
      { property: 'og:title', content: 'Kevin Montealegre | Senior Mobile Engineer' },
      { property: 'og:description', content: 'Explore my portfolio as a Systems Engineer focusing on high-performance mobile development.' },
      { property: 'og:type', content: 'website' },
      // 3. Dominio real actualizado
      { property: 'og:url', content: 'https://paul9834.com' },
      // Si tienes una imagen para compartir, súbela a tu carpeta public/assets
      { property: 'og:image', content: 'https://paul9834.com/assets/og-image.jpg' }
    ]);
  }
}
