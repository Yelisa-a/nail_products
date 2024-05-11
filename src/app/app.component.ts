import { Component } from '@angular/core';
import {
  Firestore,
  addDoc,
  collectionData,
  query,
} from '@angular/fire/firestore';
import { collection, where } from 'firebase/firestore';
import { NgForm } from '@angular/forms';
import { lastValueFrom, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private firestore: Firestore) {
    this.getData();
  }

  addData(f: NgForm): void {
    const collectionInstance = collection(this.firestore, 'users');
    addDoc(collectionInstance, f.value)
      .then(() => console.log('saved'))
      .catch((error) => console.log(error));
  }

  async getData(): Promise<void> {
    const collectionInstance = query(
      collection(this.firestore, 'users'),
      where('name', '==', 'asdasd123')
    );
    await lastValueFrom(
      collectionData(collectionInstance).pipe(
        tap((value) => console.log(value))
      )
    );
  }
}
