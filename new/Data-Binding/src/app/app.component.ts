import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'Data-Binding';

  formValue = '';
  isDisabled = false;

  checkForm()
  {
    if(this.formValue == 'mofos')
    {
      this.isDisabled = true;
    }
  }
  


  // name = "Harshal";
  // imgpath = "assets/1185634.jpg"
  // defaultValue = "";

  // fun(e:any)
  // {
  //   console.log(e.target.value);

  // }
}
