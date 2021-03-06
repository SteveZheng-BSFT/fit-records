import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { RecordService } from '../../shared/services/record/record.service';

@Component({
  selector: 'app-record-creator',
  templateUrl: './record-creator.component.html',
  styleUrls: ['./record-creator.component.scss']
})
export class RecordCreatorComponent implements OnInit {
  form: FormGroup;
  title: AbstractControl;
  content: AbstractControl;
  color: string = '#fff';
  extraVisible: boolean = false;
  @Output() recordCreated: EventEmitter<{}>;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      'title': [null, Validators.required],
      'content': [null, Validators.required]
    });
    this.title = this.form.controls['title'];
    this.content = this.form.controls['content'];
    this.recordCreated = new EventEmitter();
  }

  ngOnInit() {
  }

  onSubmit(form): void {
    // from logic add restriction
    if (this.title.value && this.content.value) {
      form.color = this.color;

      this.recordCreated.emit(form);
      this.title.setValue(null);
      this.content.setValue(null);
    }
    this.toggleExtra(false);
    this.color = '#fff';
  }

  toggleExtra(setting: boolean): void {
    this.extraVisible = setting;
  }

  onPicked(color): void {
    this.color = color;
  }
}
