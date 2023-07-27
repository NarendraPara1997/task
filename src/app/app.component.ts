import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'notification';
    webhook: boolean = false;
    smsValue: boolean = false;
    webhookOne: boolean = false;
    smsValueOne: boolean = false;
    webhookChnage() {
        this.webhook = true;
    }
    SMSChnage(){
        this.smsValue = true;
    }
    webhookChnageOne() {
        this.webhookOne = true;
    }
    SMSChnageOne(){
        this.smsValueOne = true;
    }
}
