import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TratosComponent } from './pages/tratos/tratos.component';
import { TrucosComponent } from './pages/trucos/trucos.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
    {path:"", redirectTo: "/home", pathMatch: 'full' },
    {path: "home", component: HomeComponent},
    {path: "trucos", component: TrucosComponent},
    {path:"tratos", component: TratosComponent},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "profile", component: ProfileComponent},

];
