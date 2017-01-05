import { Component, OnInit } from '@angular/core';
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

  constructor(fb: FormBuilder, public recordService: RecordService) {
    this.form = fb.group({
      'title': ['', Validators.required],
      'content': ['', Validators.required]
    });
    this.title = this.form.controls['title'];
    this.content = this.form.controls['content'];
  }

  ngOnInit() {
  }

  onSubmit(form): void {
    // from logic add restriction
    if (this.title.value && this.content.value) {
      this.recordService.addRecord(form);
      this.title.setValue('');
      this.content.setValue('');
    }
  }

}
