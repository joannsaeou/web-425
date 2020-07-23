/**
 * Title: app.routing.ts
 * Author: Professor Krasso
 * Date: 23 july 2020
 * modified: Joann Saeou 
 * Description: app routing
 */

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignInGuard} from './signin.guard';


export const AppRoutes: Routes = [
    {
        path: '',
        component: SigninComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [SignInGuard]
    }
]