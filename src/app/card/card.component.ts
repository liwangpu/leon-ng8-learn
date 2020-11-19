import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

    @Input()
    public user: any;
    public constructor(private messageSrv: MessageService) {

    }

    public ngOnInit() {
        this.messageSrv.message$.subscribe(ms => {
            console.log('message:', ms);
        });
    }

}
