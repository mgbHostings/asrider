import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent {

  public _router = inject(Router);
  constructor(public layoutService: LayoutService, public appService: ServicesService) { }

  onFooterClick(ctrl: string) {
    this._router.navigate([`home/as-riders-${ctrl}`]);
  }

  onSignOutClick(ctrl: string) {
    this._router.navigate([ctrl]);
  }
}
