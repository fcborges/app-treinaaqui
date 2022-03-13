import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enem',
  templateUrl: './enem.component.html',
  styleUrls: ['./enem.component.scss']
})
export class EnemComponent {

  constructor() { }

open(){
  console.log("estou no enem ts");
}

}
