/**
 * Created by Jinhwan on 2017-06-12.
 */

import {Component, EventEmitter, Output, QueryList, ViewChildren} from '@angular/core';
import {NgbDateStruct, NgbPopover, NgbTimepicker, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {toStringTime, toString} from '../../../utils/datetime';

@Component({
    selector: 'datetimepicker',
    templateUrl: './datetime.component.html'
})
export class DatetimeComponent {
    now: Date = new Date();
    timeRegex: RegExp = /([01]\d|2[0-3]):([0-5]\d)/;
    date: NgbDateStruct;
    time: NgbTimeStruct;
    timeText: string;
    @ViewChildren(NgbTimepicker) timePicker: QueryList<NgbTimepicker>;
    @Output() datetimeUpdated = new EventEmitter();

    constructor() {
        this.time = {hour: this.now.getHours(), minute: 0, second: 0};
    }

    setTime() {
        if (this.timeRegex.test(this.timeText)) {
            this.time.hour = parseInt(this.timeText.split(':')[0], 10);
            this.time.minute = parseInt(this.timeText.split(':')[1], 10);
            this.updateTime();
        }
        this.updateDatetime();
    }

    setTimeText() {
        this.timeText = toStringTime(this.time);
        this.updateDatetime();
    }

    updateTime() {
        if (this.timePicker.length > 0) {
            this.timePicker.forEach((data) => {
                data.writeValue(this.time);
            });
        }
    }

    timePickerToggle(elementRef: NgbPopover) {
        elementRef.toggle();
        this.timeText = toStringTime(this.time);
        this.updateDatetime();
    }

    updateDatetime() {
        if (this.date && this.time) {
            this.datetimeUpdated.emit(new Date(toString(this.date, this.time)));
        }
    }
}
