import {NgbDateStruct, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
/**
 * Created by Jinhwan on 2017-06-12.
 */
export function toStringTime(time: NgbTimeStruct): string | null {
    return time ? time.hour + ':' + (time.minute >= 10 ? time.minute : '0' + time.minute) : null;
}

export function toStringDate(date: NgbDateStruct): string | null {
    return date ? date.year + '-' + (date.month >= 10 ? date.month : '0' + date.month) + '-' + (date.day >= 10 ? date.day : '0' + date.day) :
        null;
}

export function toDate(date: NgbDateStruct, time: NgbTimeStruct): Date | null {
    if (date.day && time) {
        return new Date(this.toStringDate(date) + ' ' + this.toStringTime(time));
    }
    return null;
}

export function getStatus(startTime: number, endTime: number): number {
    let now = new Date().getTime();
    let openStatus;
    if (now < startTime) {
        openStatus = STATUS_EXPECTED;
    } else if (now > endTime) {
        openStatus = STATUS_END;
    } else if (startTime < now && now < endTime) {
        openStatus = STATUS_PUBLISHING;
    }
    return openStatus;
}

export const STATUS_EXPECTED = 1;
export const STATUS_PUBLISHING = 2;
export const STATUS_END = 3;
