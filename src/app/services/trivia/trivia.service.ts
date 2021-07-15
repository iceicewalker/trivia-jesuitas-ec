import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  constructor(private afs: AngularFirestore) { }

  getTrivia(){
    return this.afs.collection("preguntas").get();
  }
  saveScore(record){
    this.afs.collection("puntuaciones").add(record);
  }
  getLeaderboard(){
    return this.afs.collection("puntuaciones", (ref) => ref.orderBy('puntaje', 'desc').limit(10)).snapshotChanges();
  }
}
