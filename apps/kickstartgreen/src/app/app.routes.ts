import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    { 
        path: '',
        redirectTo: 'banking/dashboard',
        pathMatch: 'full',
    },
    {
        path: 'banking/dashboard',
        loadComponent: () =>
            import('@banking').then((m) => m.BankingDashboardComponent)
    }
];
