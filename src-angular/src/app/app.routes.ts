import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : "home",
        redirectTo : "/dashboard"
    },
    {
        path : "dashboard",
        loadComponent : () => import('./features/pages/dashboard/dashboard').then(m => m.Dashboard)
    }
];
