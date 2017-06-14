import {NgbDateStruct, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
/**
 * Created by Jinhwan on 2017-06-12.
 */
export function toStringTime(time: NgbTimeStruct): string {
    return time.hour + ':' + (time.minute > 10 ? time.minute : '0' + time.minute);
}

export function toStringDate(date: NgbDateStruct): string {
    return date.year + '-' + (date.month > 10 ? date.month : '0' + date.month) + '-' + (date.day > 10 ? date.day : '0' + date.day);
}

export function toString(date: NgbDateStruct, time: NgbTimeStruct): string {
    return this.toStringDate(date) + ' ' + this.toStringTime(time);
}
