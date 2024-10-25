import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TratosComponent } from './pages/tratos/tratos.component';
import { TrucosComponent } from './pages/trucos/trucos.component';

export const routes: Routes = [
    {path:"", redirectTo: "/home", pathMatch: 'full' },
    {path: "home", component: HomeComponent},
    {path: "trucos", component: TrucosComponent},
    {path:"tratos", component: TratosComponent}
];
