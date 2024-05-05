import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { LoginComponent } from './demo/components/login/login.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { FgpwdComponent } from './demo/components/fgpwd/fgpwd.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { PanelModule } from 'primeng/panel';
import { SharedModule } from '../../src/app/shared/shared.module';

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent, LoginComponent, FgpwdComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule,
        ButtonModule,
        ToastModule,
        AppLayoutModule,
        InputTextModule,
        PasswordModule,
        OverlayPanelModule,
        AvatarModule,
        AvatarGroupModule,
        PanelModule,
        SharedModule
    ],
    providers: [
        // { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
