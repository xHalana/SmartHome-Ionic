import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicesLivingRoomProvider } from '../../providers/services-living-room/services-led';
import { LIVING_ROOM } from '../../app/environments';
import { BaseModel } from '../../models/baseModel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  results;
  sectionIndex: number;
  livingRoomItems = [];
  toogleOne: boolean;
  toogleTwo: boolean;

  livingRoomWall: BaseModel = new BaseModel("Obývacia stena" , false);
  standingLamp: BaseModel = new BaseModel("Stojatá lampa", false);

  constructor(public navCtrl: NavController, private servicesLivingRoomProvider: ServicesLivingRoomProvider) {

    this.livingRoomItems.push(this.livingRoomWall);
    this.livingRoomItems.push(this.standingLamp);
  }

  onClick(operator: String)  {
    console.log("onClick to " + operator);
    this.results = this.servicesLivingRoomProvider.makeLedAction(operator, LIVING_ROOM);
  }

  toggleSection(index: number) {
    if (this.sectionIndex === index) {
      this.sectionIndex = -1;
    } else {
      this.sectionIndex = index;
    }
  }

  toogleClick(status: boolean, operatorOne: String, operatorTwo: String) {
    if(status) {
      this.onClick(operatorOne);
    }
    else {
      this.onClick(operatorTwo);
    }
   }

  refresh() {
    console.log("do somthing");
  }

}
