import { Routes } from "@angular/router";

export const pageGraphs : Routes = [
    {
        path : "page1",
        loadComponent : () => import("../page-graphs1/page-graphs1").then(m => m.PageGraphs1)
    },
    {
        path : "page2",
        loadComponent : () => import("../page-graphs2/page-graphs2").then(m => m.PageGraphs2)
    }
]