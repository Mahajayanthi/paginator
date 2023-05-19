import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent {
title='Mbfs';
loginForm =new FormGroup({
user:new FormControl(''),
password:new FormControl('')
})
loginuser()
{
  console.log(this.loginForm)
}

}
