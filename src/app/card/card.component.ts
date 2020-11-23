import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, Directive, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    @Input()
    public user: any;
    public title = 'card';
    private key = 'card';
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
        console.log(1, this.user);
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

}
