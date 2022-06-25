import { Component } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { RequiredValidator,PatternValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  constructor(private _fbobj : FormBuilder)
  {}

  MyForm = this._fbobj.group(
  {
    FirstName : ['',Validators.required],
    LastName : ['',Validators.required],
    Email : ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    Phone : ['',[Validators.required,Validators.pattern("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")]],
    Address : ['',[Validators.required,Validators.minLength(30)]]

  }
  );


}
