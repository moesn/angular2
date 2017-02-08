import { ModuleWithProviders } from '@angular/core';
const ROUTES: Routes = [
    {path: '', redirectTo: 'work', pathMatch: 'full'},
    {path: '**', redirectTo: 'work/index'}
];
export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES, { useHash: true });
