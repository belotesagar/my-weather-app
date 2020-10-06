import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
// import { NONAME } from 'dns';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() hero: object;
  value1 = 'pune';
  value2 = 'Clear';
  value3 = 'Clear';
  value4 = 'Clear';
  value5 = 'Clear';
  value6 = 'Clear';
  value7 = 'Clear';
  value8 = 'Clear';
  value9 = 'Clear';
  div1: boolean = false;
  div2: boolean = false;
  div3: boolean = false;
  div4: boolean = false;
  div5: boolean = false;
  div6: boolean = false;
  div7: boolean = false;
  div8: boolean = false;
  div9: boolean = false;
  data: any
  divname: any;


  // desc = document.querySelector('.desc');

  boxClicked(value, boxName, description) {
    console.log("clicked");
    console.log("value:", value);
    console.log("boxName:", boxName);
    var main = document.querySelector('#' + boxName);
    console.log("main:", main);
    var temp = document.querySelector('.' + boxName);
    var desc = document.querySelector('.' + description);
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + value + '&appid=66e453fb77b0c0100e8fc74440c56668')
      .then(response => response.json())
      .then(data => {
        console.log("@@@@@@@@@@@", data);
        this.data = data;
        var country = data.sys.country;
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descriptionValue = data.weather[0].description;
        console.log("@@@@@@@@@@@descriptionValue", descriptionValue);
        main.innerHTML = country + " " + nameValue;
        temp.innerHTML = "Temp - " + tempValue + "<br>";
        desc.innerHTML = "Description - " + descriptionValue;
      })

      .catch(err => alert("wrong city name,please retry with correct city name"));

  }
  showDiv(idd: any) {
    console.log("idd", idd);
    let val: any
    if (idd == "div1") {
      val = document.getElementById("hide1");
      val.style.display = 'none';
      this.div1 = true;
    }
    else if (idd == "div2") {
      val = document.getElementById("hide2");
      val.style.display = 'none';
      this.div2 = true;
    }
    else if (idd == "div3") {
      val = document.getElementById("hide3");
      val.style.display = 'none';
      this.div3 = true;
    }
    else if (idd == "div4") {
      val = document.getElementById("hide4");
      val.style.display = 'none';
      this.div4 = true;
    }
    else if (idd == "div5") {
      val = document.getElementById("hide5");
      val.style.display = 'none';
      this.div5 = true;
    }
    else if (idd == "div6") {
      val = document.getElementById("hide6");
      val.style.display = 'none';
      this.div6 = true;
    }
    else if (idd == "div7") {
      val = document.getElementById("hide7");
      val.style.display = 'none';
      this.div7 = true;
    }
    else if (idd == "div8") {
      val = document.getElementById("hide8");
      val.style.display = 'none';
      this.div8 = true;
    }
    else {
      val = document.getElementById("hide9");
      val.style.display = 'none';
      this.div9 = true;
    }
    // this.divname = idd;
    // console.log("@@:", this.divname);
    // this.divname = true;
  }


  constructor() {
  }

  ngOnInit(): void {
  }

}

