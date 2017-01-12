import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ENV_PROVIDERS } from './environment';
import { routes } from './app.routes';

import { App } from './app.component';
import { AppState, InternalStateType } from './app.service';
import { GlobalState } from './global.state';
import { NgaModule } from './theme/nga.module';
import { PagesModule } from './pages/pages.module';

const APP_PROVIDERS = [
    AppState,
    GlobalState
];

@NgModule({
    bootstrap: [App],
    declarations: [
        App
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        NgaModule.forRoot(),
        PagesModule,
        routes
    ],
    providers: [
        ENV_PROVIDERS,
        APP_PROVIDERS
    ]
})

export class AppModule {

}
