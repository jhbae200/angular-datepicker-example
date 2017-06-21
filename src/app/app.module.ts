import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {DatetimeComponent} from './shared/datetime/datetime.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot()
    ],
    declarations: [
        AppComponent,
        DatetimeComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
