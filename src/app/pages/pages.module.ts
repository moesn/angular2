import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';

import {routes}       from './pages.routes';
import {NgaModule} from '../theme/nga.module';

import {Pages} from './pages.component';

@NgModule({
    imports: [CommonModule, NgaModule, routes],
    declarations: [Pages]
})

export class PagesModule {
}
