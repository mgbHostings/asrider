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
                    { path: 'as-riders-accounts', loadChildren: () => import('./demo/components/uikit/accounts/accounts/accounts.module').then(m => m.AccountsModule) },
                    { path: 'as-riders-products', loadChildren: () => import('./demo/components/uikit/product/product/product.module').then(m => m.ProductModule) },
                    { path: 'as-riders-cart', loadChildren: () => import('./demo/components/uikit/cart/cart/cart.module').then(m => m.CartModule) },
                    { path: 'as-riders-addaccount', loadChildren: () => import('./demo/components/uikit/addaccount/addaccount/addaccount.module').then(m => m.AddaccountModule) },
                    { path: 'as-riders-security', loadChildren: () => import('./demo/components/uikit/securitycenter/securitycenter/securitycenter.module').then(m => m.SecuritycenterModule) },
                    { path: 'as-riders-consumption', loadChildren: () => import('./demo/components/uikit/consumption/consumption/consumption.module').then(m => m.ConsumptionModule) },
                    { path: 'as-riders-finance', loadChildren: () => import('./demo/components/uikit/finance/finance/finance.module').then(m => m.FinanceModule) },
                    { path: 'as-riders-help', loadChildren: () => import('./demo/components/uikit/help/help/help.module').then(m => m.HelpModule) },
                    { path: 'as-riders-about', loadChildren: () => import('./demo/components/uikit/about/about/about.module').then(m => m.AboutModule) },
                    { path: 'as-riders-referrals', loadChildren: () => import('./demo/components/uikit/referals/referals/referals.module').then(m => m.ReferalsModule) },
                ]
            },
            { path: '**', redirectTo: 'sml-signin' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload', useHash: false })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
