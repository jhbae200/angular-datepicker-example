/**
 * Created by Jinhwan on 2017-06-12.
 */

import {Component, forwardRef, QueryList, ViewChildren} from '@angular/core';
import {NgbDateStruct, NgbPopover, NgbTimepicker, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {toDate, toStringTime} from '../../../utils/datetime';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {isNullOrUndefined} from 'util';

@Component({
    selector: 'datetimepicker',
    templateUrl: './datetime.component.html',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(function () {
            return DatetimeComponent;
        }),
        multi: true
    }]
})
export class DatetimeComponent implements ControlValueAccessor {
    timeRegex: RegExp = /([01]\d|2[0-3]):([0-5]\d)/;
    date: NgbDateStruct;
    time: NgbTimeStruct;
    timeText: string;
    @ViewChildren(NgbTimepicker) timePicker: QueryList<NgbTimepicker>;
    private propagateModelChange = (_: any) => {
    }

    constructor() {
    }

    setTime() {
        if (this.timeRegex.test(this.timeText)) {
            this.time = {hour: parseInt(this.timeText.split(':')[0], 10), minute: parseInt(this.timeText.split(':')[1], 10), second: 0};
            this.updateTime();
        } else {
            this.time = null;
        }
        this.updateDatetime();
    }

    setTimeText() {
        this.timeText = toStringTime(this.time);
        this.updateDatetime();
    }

    timePopoverToggle(ElementRef: NgbPopover) {
        if (!this.time) {
            this.time = {hour: new Date().getHours(), minute: 0, second: 0};
        }
        ElementRef.toggle();
        this.timeText = toStringTime(this.time);
        this.updateDatetime();
    }

    updateDatetime() {
        let model = toDate(this.date, this.time);
        this.propagateModelChange(model ? model.getTime() : null);
    }

    private updateTime() {
        if (this.timePicker.length > 0) {
            this.timePicker.forEach((data) => {
                data.writeValue(this.time);
            });
        }
    }

    writeValue(value: any): void {
        if (!isNullOrUndefined(value)) {
            let model = value ? new Date(value) : new Date();
            this.date = {year: model.getFullYear(), month: model.getMonth() + 1, day: model.getDate()};
            this.time = {hour: model.getHours(), minute: model.getMinutes(), second: model.getSeconds()};
            this.timeText = toStringTime(this.time);
        }
    }

    registerOnChange(fn: any): void {
        this.propagateModelChange = fn;
    }

    registerOnTouched(fn: any): void {
    }
}
