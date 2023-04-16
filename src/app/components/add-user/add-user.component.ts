import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  formUser: FormGroup;

  constructor(public form: FormBuilder) {
    this.formUser = this.form.group({
      nombre: [''],
      correo: [''],
    });
  }

  ngOnInit(): void {}

  sendData(): any {
    console.log(`presionando button`);
    console.log(this.formUser.value);
  }
}
