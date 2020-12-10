import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public constructor(
        private cd: ChangeDetectorRef
    ) {

    }

    public ngOnInit(): void {
        console.log(1, this.cd);
    }


}
