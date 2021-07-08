import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  constructor(private afs: AngularFirestore) { }

  getTrivia(){
    return this.afs.collection("preguntas").snapshotChanges();
  }

}
