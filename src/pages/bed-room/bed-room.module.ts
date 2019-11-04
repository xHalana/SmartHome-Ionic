import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BedRoomPage } from './bed-room';

@NgModule({
  declarations: [
    BedRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(BedRoomPage),
  ],
})
export class BedRoomPageModule {}
