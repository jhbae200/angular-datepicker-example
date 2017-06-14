/**
 * Created by Jinhwan on 2017-06-13.
 */
import {Component, EventEmitter, Output} from '@angular/core';
@Component({
    selector: 'datetime-from-to',
    templateUrl: './datetime-from-to.component.html'
})
export class DatetimeFromToComponent {
    @Output() ngFrom = new EventEmitter();
    @Output() ngTo = new EventEmitter();

    updateFrom(from: string) {
        this.ngFrom.emit(from);
    }

    updateTo(to: string) {
        this.ngTo.emit(to);
    }
}

