import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Directive, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    public user = { name: 'Leon' };
    public title = 'leon';
    private key = 'home';
    public constructor() {
    }

    public ngOnChanges(changes: SimpleChanges): void {
        console.log(`${this.key} onChanges`);
    }

    public ngOnInit(): void {
        console.log(`${this.key} onInit`);
    }


    public ngDoCheck(): void {
        console.log(`${this.key} doCheck`);
    }

    public ngAfterContentInit(): void {
        console.log(`${this.key} afterContentInit`);
    }

    public ngAfterContentChecked(): void {
        console.log(`${this.key} afterContentChecked`);
    }

    public ngAfterViewInit(): void {
        console.log(`${this.key} afterViewInit`);
    }

    public ngAfterViewChecked(): void {
        console.log(`${this.key} afterViewInitCheck`);
    }

    public ngOnDestroy(): void {
        console.log(`${this.key} destroy`);
    }

    public test(): void {
        this.user.name = Date.now().toString();
    }

}
