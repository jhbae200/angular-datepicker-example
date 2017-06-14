import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {DatetimeComponent} from './shared/datetime/datetime.component';
import {DatetimeFromToComponent} from './shared/datetime-from-to/datetime-from-to.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        NgbModule.forRoot()
    ],
    declarations: [
        AppComponent,
        DatetimeComponent,
        DatetimeFromToComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
