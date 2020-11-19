import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public user = { name: 'robot' };
    public changeName(): void {
        this.user.name = Date.now().toString();
    }
}
