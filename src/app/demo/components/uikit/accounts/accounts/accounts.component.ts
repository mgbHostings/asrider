import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css',
  providers: [ConfirmationService]
})
export class AccountsComponent {

  public _router = inject(Router);
  constructor(public layoutService: LayoutService, public appService: ServicesService,
    private confirmationService: ConfirmationService
  ) { }

  public visible = false;
  onFooterClick(ctrl: string) {
    this._router.navigate([`home/as-riders-${ctrl}`]);
  }

  onSignOutClick(ctrl: string) {
    this._router.navigate([ctrl]);
  }


  showDialog(){
    this.visible = true;
  }


  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        //Actual logic to perform a confirmation
      }
    });
  }



}
