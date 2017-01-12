import {Routes, RouterModule} from '@angular/router';

const ROUTES: Routes = [
    {path: '', redirectTo: 'work', pathMatch: 'full'},
    {path: '**', redirectTo: 'work/index'}
];

export const routes = RouterModule.forRoot(ROUTES, {useHash: false});
