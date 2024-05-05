import { Component, inject } from '@angular/core';
import { LayoutService } from "./service/app.layout.service";
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html'
})
export class AppFooterComponent {
    public _router = inject(Router);
    constructor(public layoutService: LayoutService, public appService: ServicesService) { }

    onFooterClick(ctrl: string) {
        this._router.navigate([`home/as-riders-${ctrl}`]);
    }
}
