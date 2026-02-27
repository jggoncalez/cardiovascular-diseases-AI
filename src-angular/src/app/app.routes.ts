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
        loadComponent : () => import('./features/pages/graphs/page-graphs1/page-graphs1').then(m => m.PageGraphs1)
    }
    //TO-DO: Trocar loadcomponent por loadchildren após a criação da rotas dos graficos
];
