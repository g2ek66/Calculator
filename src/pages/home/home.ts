import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  value: string = "";
  constructor(public navCtrl: NavController) {

  }

    takeValue(value)
    {
      this.value = this.value+""+value;
    }

    backSpace()
    {
      this.value = this.value.substr(0,this.value.length-1);
    }

    deleteAll()
    {
      this.value = "";
    }

    takeDiv()
    {
        if(this.value.length != 0 && this.value.substr(this.value.length -1) != '*' && this.value.substr(this.value.length -1) != '-' && this.value.substr(this.value.length -1) != '+' && this.value.substr(this.value.length -1) != '/')
          this.value = this.value+"/";
    }

    takeAdiction()
    {
        if(this.value.length != 0 && this.value.substr(this.value.length -1) != '*' && this.value.substr(this.value.length -1) != '-' && this.value.substr(this.value.length -1) != '+' && this.value.substr(this.value.length -1) != '/')
          this.value = this.value+"+";
    }

    takeSubstraction()
    {
        if(this.value.length != 0 && this.value.substr(this.value.length -1) != '*' && this.value.substr(this.value.length -1) != '-' && this.value.substr(this.value.length -1) != '+' && this.value.substr(this.value.length -1) != '/')
          this.value = this.value+"-";
    }

    takeMutiplication()
    {
        if(this.value.length != 0 && this.value.substr(this.value.length -1) != '*' && this.value.substr(this.value.length -1) != '-' && this.value.substr(this.value.length -1) != '+' && this.value.substr(this.value.length -1) != '/')
          this.value = this.value+"*";
    }

    equal()
    {
        this.value = eval(this.value);
    }
}
