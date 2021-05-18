import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {

  cControl: FormControl = new FormControl('');
  fControl: FormControl = new FormControl('');
  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32

    this.cControl.valueChanges.subscribe((value) => {
      const f = value ? (value * (9 / 5) + 32).toFixed(1) : ""
      this.fControl.setValue(f, { onlySelf: true, emitEvent: false });
    });

    this.fControl.valueChanges.subscribe((value) => {
      const c = value ? ((value - 32) * (5 / 9)).toFixed(1) : "";
      this.cControl.setValue(c, { onlySelf: true, emitEvent: false });
    });
  }

}