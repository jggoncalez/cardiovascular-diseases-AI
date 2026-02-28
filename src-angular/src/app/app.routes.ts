import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : "home",
        redirectTo : "/dashboard"
    },
    {
        path : "dashboard",
        loadComponent : () => import('./features/pages/dashboard/dashboard').then(m => m.Dashboard)
    },
    {
        path : "graphs",
        loadChildren : () => import('./features/pages/graphs/routes/page-graphs.routes').then(m => m.pageGraphs)
    },
    {
        path : "about-us",
        loadComponent : () => import('./features/pages/about-us/about-us').then(m => m.AboutUs)
    }
];
