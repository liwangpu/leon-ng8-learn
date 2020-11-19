import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public user = { name: 'robot' };
    public constructor(private messageSrv: MessageService) {

    }

    public changeName(): void {
        this.user.name = Date.now().toString();
    }

    public sendMessage(): void {
        this.messageSrv.message$.next(Date.now().toString());
    }
}
