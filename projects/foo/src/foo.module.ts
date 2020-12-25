import { NgModule } from '@angular/core';
import { GreetComponent } from './greet/greet.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
    declarations: [GreetComponent, DashboardComponent],
    imports: [
    ],
    exports: [GreetComponent, DashboardComponent]
})
export class FooModule { }
