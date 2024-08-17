import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    { 
        path: '',
        redirectTo: 'banking',
        pathMatch: 'full',
    },
    {
        path: 'banking',
        loadComponent: () =>
            import('@banking').then((m) => m.BankingDashboardComponent)
    }
];
