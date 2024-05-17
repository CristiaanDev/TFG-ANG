import { Injectable, inject, signal } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  user,
  signOut,
  getAuth,
} from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { Firestore, doc, setDoc, getDoc } from '@angular/fire/firestore';
import { DocumentData, getFirestore } from 'firebase/firestore';
import { User } from '../user.interface';
import { UtilesService } from './utiles.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseAuth = inject(Auth);
  firestore = inject(Firestore);
  user$ = user(this.firebaseAuth);
  utiles = inject(UtilesService);
  //currentUserSig = signal<UserInterface | null | undefined>(undefined);

  logIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  register(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  signOut() {
    getAuth().signOut();
    localStorage.removeItem('user');
    this.utiles.routerLink('/login');
  }

  updateUser(displayName: string) {
    const currentUser = this.firebaseAuth.currentUser;
    if (currentUser) {
      return updateProfile(currentUser, { displayName });
    } else {
      return Promise.reject('No hay usuario conectado.');
    }
  }

  getAuth() {
    return getAuth();
  }

  //////////////          BDD        /////////////////////

  setDocument(path: string, data: any) {
    return setDoc(doc(getFirestore(), path), data);
  }

  async getDocument(path: string): Promise<DocumentData | undefined> {
    const docRef = doc(this.firestore, path);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : undefined;
  }
}
