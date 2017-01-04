import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder } from '@angular/forms';
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
      'title': [],
      'content': []
    });
    this.title = this.form.controls['title'];
    this.content = this.form.controls['content'];
  }

  ngOnInit() {
  }

  onSubmit(form): void {
    this.recordService.addRecord(form);
    this.title.setValue('');
    this.content.setValue('');
  }

}
