import {Routes, RouterModule}  from '@angular/router';
import {Pages} from './pages.component';

const ROUTES: Routes = [
    // {
    //   path: 'login',
    //   loadChildren: () => System.import('./login/login.module')
    // },
    // {
    //   path: 'register',
    //   loadChildren: () => System.import('./register/register.module')
    // },
    {
        path: 'work',
        component: Pages,
        children: [
            {path: '', redirectTo: 'index', pathMatch: 'full'},
            {path: 'index', loadChildren: () => System.import('./dashboard/dashboard.module')}
            //     { path: 'editors', loadChildren: () => System.import('./editors/editors.module') },
            //     //{ path: 'components', loadChildren: () => System.import('./components/components.module') }
            //     { path: 'charts', loadChildren: () => System.import('./charts/charts.module') },
            //     { path: 'ui', loadChildren: () => System.import('./ui/ui.module') },
            //     { path: 'forms', loadChildren: () => System.import('./forms/forms.module') },
            //     { path: 'tables', loadChildren: () => System.import('./tables/tables.module') },
            //     { path: 'maps', loadChildren: () => System.import('./maps/maps.module') }
        ]
    }
];

export const routes = RouterModule.forChild(ROUTES);
