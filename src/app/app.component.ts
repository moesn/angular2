import {Routes} from '@angular/router';
import './app.loader.ts';
import {Component, ViewEncapsulation, ViewContainerRef} from '@angular/core';
import {GlobalState} from './global.state';
import {BaImageLoaderService, BaThemePreloader, BaThemeSpinner} from './theme/services';
import {layoutPaths} from './theme/theme.constants';
import {BaThemeConfig} from './theme/theme.config';
import {BaMenuService} from './theme';
import {ComponentsHelper} from 'ng2-bootstrap';

import {MENU} from './app.menu';

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styles: [require('normalize.css'), require('./app.scss')],
    template: `
    <main [ngClass]="{'menu-collapsed': isMenuCollapsed}" baThemeRun>
      <div class="additional-bg"></div>
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {

    isMenuCollapsed: boolean = false;

    constructor(private _state: GlobalState,
                private _imageLoader: BaImageLoaderService,
                private _spinner: BaThemeSpinner,
                private _config: BaThemeConfig,
                private _menuService: BaMenuService,
                private viewContainerRef: ViewContainerRef) {

        this._menuService.updateMenuByRoutes(<Routes>MENU);

        this._fixModals();

        this._loadImages();

        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });
    }

    public ngAfterViewInit(): void {
        BaThemePreloader.load().then((values) => {
            this._spinner.hide();
        });
    }

    private _loadImages(): void {
        BaThemePreloader.registerLoader(this._imageLoader.load(layoutPaths.images.root + 'sky-bg.jpg'));
    }

    private _fixModals(): void {
        ComponentsHelper.prototype.getRootViewContainerRef = function () {
            if (this.root) {
                return this.root;
            }
            let comps = this.applicationRef.components;
            if (!comps.length) {
                throw new Error("ApplicationRef instance not found");
            }
            try {
                /* one more ugly hack, read issue above for details */
                let rootComponent = this.applicationRef._rootComponents[0];
                this.root = rootComponent._component.viewContainerRef;
                return this.root;
            }
            catch (e) {
                throw new Error("ApplicationRef instance not found");
            }
        };
    }
}
