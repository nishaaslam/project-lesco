import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './service/auth.guard';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { MainLayoutComponent } from './pages/Layout-folder/main-layout/main-layout.component';
import { HistoryComponent } from './pages/history/history.component';
import { AccountFormComponent } from './pages/account-form/account-form.component';

export const routes: Routes = [

    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'signup',
        component: SignUpComponent
    },
    {
        path:'',
        component: MainLayoutComponent,
        //canActivate:[authGuard],
        children:[
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
              },
            {path:'dashboard',component:DashboardComponent},
            {path:'history',component:HistoryComponent},
            {path:'account',component:AccountFormComponent},

        ]
    }
];
