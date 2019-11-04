import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicesLivingRoomProvider } from '../../providers/services-living-room/services-led';
import { BED_ROOM } from '../../app/environments'
import { BaseModel } from '../../models/baseModel';

/**
 * Generated class for the BedRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bed-room',
  templateUrl: 'bed-room.html',
})
export class BedRoomPage {
  results;
  sectionIndex: number;
  bedRoomItems = [];
  test;

  topBed: BaseModel = new BaseModel("Čelo postele", false);
  bottomBed: BaseModel = new BaseModel("Podsvietenie postele", false);

  constructor(public navCtrl: NavController, private servicesLivingRoomProvider: ServicesLivingRoomProvider) {

    this.bedRoomItems.push(this.topBed);
    this.bedRoomItems.push(this.bottomBed);

  }

  onClick(operator: String) {
    console.log("onClick to " + operator);
    this.results = this.servicesLivingRoomProvider.makeLedAction(operator, BED_ROOM);


  }

  toggleSection(index: number) {
    console.log("toggleSection");
    if (this.sectionIndex === index) {
      this.sectionIndex = -1;
    } else {
      this.sectionIndex = index;
    }
  }

  toogleClick(item: BaseModel, operatorOne: String, operatorTwo: String) {
    console.log("toogle click");

    if (item.name === "Čelo postele") {
      console.log("onClick to " + item.name);
      if (item.status) {
        this.servicesLivingRoomProvider.getTest("led" + operatorOne, BED_ROOM).subscribe(data => {

          this.test = data;
          console.log("ffftestf" + this.test);
        });
      }
      else {
        this.servicesLivingRoomProvider.getTest("led" + operatorTwo, BED_ROOM).subscribe(data => {

          this.test = data;
          console.log("ffftestf" + this.test);
        });
      }

    }
    if (item.name === "Podsvietenie postele") {

      console.log("onClick to " + item.name);
      if (item.status) {
        this.onClick(operatorOne);
      }
      else {
        this.onClick(operatorTwo);
      }
    }
  }

  refresh() {
    console.log("do somthing");
    this.servicesLivingRoomProvider.getTest("ledStatus", BED_ROOM).subscribe(data => {

      console.log("ffftestf" + data[0].name);
      this.bedRoomItems[0].status = !data[0].value;
      this.test = !data[0].value;
      this.bedRoomItems[1].status = data[1].value;
      console.log("armagedon test" + this.bedRoomItems[0].status);


    });
  }

  ionViewWillEnter() {

  }

}
