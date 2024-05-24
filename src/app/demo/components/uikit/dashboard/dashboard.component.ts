import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { ServicesService } from 'src/app/services.service';
import * as _ from 'lodash';
@Component({
    templateUrl: './dashboard.component.html',
    providers: [MessageService, ConfirmationService]
})
export class DashboardComponent implements OnInit {
    private _service = inject(ServicesService);
    public showSkeleton = true;
    private destroy$: Subject<void> = new Subject<void>();
    public dashboardData: any = [];
    public activeIndex = 0;

    public nodes: any = [{
        "key": '0',
        "label": 'Documents', // org
        "data": 'Documents Folder',
        "icon": 'pi pi-fw pi-inbox',
        "children": [
            {
                "key": '0-0',
                "label": 'Work', // group
                "data": 'Work Folder',
                "icon": 'pi pi-fw pi-cog',
                "children": [
                    {
                        "key": '0-0-0', //loc
                        "label": 'Expenses.doc', "icon": 'pi pi-fw pi-file', "data": 'Expenses Document',
                        "children": [
                            {
                                "key": '0-0',
                                "label": 'Wow', // branch
                                "data": 'Work Folder',
                                "icon": 'pi pi-fw pi-cog',
                            }
                        ]
                    },
                    {
                        "key": '0-0-1',
                        "label": 'Resume.doc',
                        "icon": 'pi pi-fw pi-file',
                        "data": 'Resume Document',
                    }
                ]
            },
            {
                "key": '0-1',
                "label": 'Home',
                "data": 'Home Folder',
                "icon": 'pi pi-fw pi-home',
                "children": [{ "key": '0-1-0', "label": 'Invoices.txt', "icon": 'pi pi-fw pi-file', "data": 'Invoices for this month' }]
            }
        ]
    }];;
    public cnodes: any = JSON.stringify(this.nodes)

    public selectedNodes: any;

    async ngOnInit() { /* NodeService */
        await this.gridData();
        //await this.getprofilepicture();
    }
    public tooltip = "";
    onNodeSelect(event: any) {
        this.nodes = JSON.parse(this.cnodes);
        if (event.node.parent == undefined) {
            event.node.label = event.node.label // INITALLY PARENT
        } else {
            if (event.node.parent['parent'] != undefined) { // SUB LEVELS
                if (event.node.parent.parent['parent'] != undefined) {
                    event.node.label = event.node.parent.parent['parent']['label'] + ' > ' +
                        event.node.parent['parent']['label'] + ' > ' + event.node.parent.label + ' > ' +
                        event.node.label;
                } else {
                    event.node.label =
                        event.node.parent['parent']['label'] + ' > ' + event.node.parent.label + ' > ' +
                        event.node.label;
                }
            } else {
                // FIRST LEVELS
                event.node.label = event.node.parent.label + ' > ' + event.node.label; // sub level
            }
        }
        this.selectedNodes = event.node;
        this.tooltip = event.node.label;

    }

    getAncestors(node: any): any[] {
        let ancestors = [];
        let parent = node.parent;
        while (parent) {
            ancestors.unshift(parent);
            parent = parent.parent;
        }
        return ancestors;
    }

    async gridData() {
        try {
            this.dashboardData = [];
            let cader = await this._service.getUserInfo('userCader');
            this._service.postApi('getDashboardDetails', 'postEndPoint',
                {
                    cader: cader['code'],
                    create_by: this._service.getUserInfo('_id')
                }
            )
                .pipe(takeUntil(this.destroy$))
                .subscribe({
                    next: (data) => {
                        data = this._service.enableCryptoForResponse() ? this._service.decrypt(data) : data;
                        if (data['S_CODE'] == 200) {
                            if (data['DATA'].length > 0) this.dashboardData = data['DATA'];
                        };
                    },
                    error: (err) => {
                        this.dashboardData = [];
                    }
                });
        } catch (e) { }
    }

    async getprofilepicture() {
        try {
            // this.dashboardData = [];
            // let cader = await this._service.getUserInfo('userCader');
            this._service.postApi('getprofilepicture', 'postEndPoint',
                {
                    // cader: cader['code'],
                    empId: this._service.getUserInfo('_id')
                }
            )
                .pipe(takeUntil(this.destroy$))
                .subscribe({
                    next: (data) => {
                        data = this._service.enableCryptoForResponse() ? this._service.decrypt(data) : data;
                        if (data['S_CODE'] == 200) {
                            if (data['DATA'].length > 0) {
                                console.log("data['DATA'] ", data['DATA']);
                            }
                            //this.dashboardData = data['DATA'];
                        };
                    },
                    error: (err) => {
                        // this.dashboardData = [];
                    }
                });
        } catch (e) { }
    }

}
