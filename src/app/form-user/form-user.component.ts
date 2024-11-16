import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/User';


@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit{
  @Input() user!: User;
  users: User[] = [];

  onSubmit(form: any) {
    if (form.valid) {
      this.users.push(form.value);
      form.reset();
    }}

    ngOnInit(): void {

    }
    add(from:any){}

}
