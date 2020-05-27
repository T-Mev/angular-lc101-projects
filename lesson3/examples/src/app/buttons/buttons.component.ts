import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactiveGold: boolean = false;
   inactiveSilver: boolean = false;
   inactiveCopper: boolean = false;

   constructor() { }

   ngOnInit() { }

   reactivateButtons () {

      this.inactiveGold = !this.inactiveGold;
      this.inactiveSilver = !this.inactiveSilver;
      this.inactiveCopper = !this.inactiveCopper;

      // if (this.inactiveGold === true) {
      //    this.inactiveGold = !this.inactiveGold;
      // }

      // if (this.inactiveSilver === true) {
      //    this.inactiveSilver = !this.inactiveSilver;
      // }

      // if (this.inactiveCopper === true) {
      //    this.inactiveCopper = !this.inactiveCopper;
      // }

   }
}
