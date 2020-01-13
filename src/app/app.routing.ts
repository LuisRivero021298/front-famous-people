import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeViewComponent } from './components/home-view/home-view.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { ErrorComponent } from './components/error/error.component';
import { NewViewComponent } from './components/new-view/new-view.component';

const appRoutes: Routes = [
    {path:'', component: HomeViewComponent},
    {path:'home', component: HomeViewComponent},
    {path:'famous-detail/:id', component: DetailViewComponent},
    {path:'new', component: NewViewComponent},
    {path:'**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); 