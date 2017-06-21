import {Component} from '@angular/core';

import '../assets/css/styles.css';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    form: FormGroup;
    startTime: number;
    endTime: number;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            'startTime': [this.startTime, Validators.required],
            'endTime': [this.endTime, Validators.required],
        }, {
            validator: (group: FormGroup) => {
                let result = {};
                if (group.controls['startTime'].value && group.controls['endTime'].value) {
                    if (group.controls['startTime'].value > group.controls['endTime'].value) {
                        result['startTimeOver'] = true;
                    }
                }
                return result !== {} ? result : null;
            }
        });
    }

    isValid(control: FormControl) {
        return control.errors && (control.dirty || control.touched);
    }
}
