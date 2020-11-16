import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '../../node_modules/@angular/fire/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Weather Today";
counter: number;
lastNumberPlayed: number;
fights = [];

constructor(private firestore: AngularFirestore) {}

ngOnInit() {
this.getFights()
.subscribe(data=>{
  console.log(data);
this.fights = data.map(e=>{
  return {
    id: e.payload.doc.id,
    data: e.payload.doc.data()
  }
})
});

}


getFights() {
return this.firestore.collection("fights").snapshotChanges();
}

createFight(winner, loser) {
this.firestore.collection("fights").add({winner: winner, loser: loser});
}

rollDice(betNumber): void {
  this.lastNumberPlayed = betNumber;
  this.counter = Math.floor((Math.random() * 6) + 1);

  if(this.counter == this.lastNumberPlayed) {
    alert("You win");
  }
  alert("You lose");
}

}
