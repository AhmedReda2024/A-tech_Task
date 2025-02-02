import { isPlatformBrowser } from '@angular/common';
import {
  Inject,
  inject,
  Injectable,
  PLATFORM_ID,
  Renderer2,
  RendererFactory2,
} from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class MytranslateService {
  private readonly translateService = inject(TranslateService);
  private readonly platId = inject(PLATFORM_ID);
  private readonly rendererFactory2 = inject(RendererFactory2).createRenderer(
    null,
    null
  ); // to create renderer2 to use it in service

  constructor() {
    if (isPlatformBrowser(this.platId)) {
      this.translateService.setDefaultLang('en');

      this.setLang();
    }
  }

  setLang(): void {
    const savedLang = localStorage.getItem('lang'); // return lang that select

    if (savedLang !== null) {
      this.translateService.use(savedLang!);
    }

    if (savedLang === 'en') {
      // dir => ltr

      this.rendererFactory2.setAttribute(
        document.documentElement,
        'dir',
        'ltr'
      );
      this.rendererFactory2.setAttribute(
        document.documentElement,
        'lang',
        'en'
      );
    } else if (savedLang === 'ar') {
      // dir => rtl

      this.rendererFactory2.setAttribute(
        document.documentElement,
        'dir',
        'rtl'
      );
      this.rendererFactory2.setAttribute(
        document.documentElement,
        'lang',
        'ar'
      );
    }
  }

  changeLang(lang: string): void {
    if (isPlatformBrowser(this.platId)) {
      localStorage.setItem('lang', lang); // save lang in localstorage
    }

    this.setLang();
  }
}
