import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { LoginComponent } from './demo/components/login/login.component';
import { FgpwdComponent } from './demo/components/fgpwd/fgpwd.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'as-riders-sigin',
                pathMatch: 'full'
            },
            {
                path: 'as-riders-sigin',
                component: LoginComponent
            },
            {
                path: 'sml-request-on-forgot-passowrd',
                component: FgpwdComponent
            },
            {
                path: 'signup',
                component: SignupComponent
            },

            {
                path: 'home', component: AppLayoutComponent,
                children: [
                    { path: "", redirectTo: 'home', pathMatch: 'full' },
                    { path: 'as-riders-dashboard', loadChildren: () => import('./demo/components/uikit/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'as-riders-accounts', loadChildren: () => import('./demo/components/uikit/accounts/accounts.module').then(m => m.AccountsModule) },
                ]
            },
            { path: '**', redirectTo: 'sml-signin' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload', useHash: false })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
