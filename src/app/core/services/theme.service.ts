import { Injectable, Inject, signal, PLATFORM_ID, inject } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Iniciamos siempre en false (modo claro)
  isDarkMode = signal(false);
  private platformId = inject(PLATFORM_ID);

  constructor(@Inject(DOCUMENT) private document: Document) {
    // Eliminamos la detección automática de 'prefers-color-scheme'
    // para que no fuerce el modo oscuro al cargar.
  }

  toggleTheme() {
    this.setDarkTheme(!this.isDarkMode());
  }

  private setDarkTheme(dark: boolean) {
    this.isDarkMode.set(dark);

    if (isPlatformBrowser(this.platformId)) {
      if (dark) {
        this.document.documentElement.classList.add('dark-theme');
      } else {
        this.document.documentElement.classList.remove('dark-theme');
      }
    }
  }
}
