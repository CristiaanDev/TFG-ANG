import { Injectable, inject } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  User as FirebaseUser,
} from '@angular/fire/auth';
import { Firestore, doc, setDoc, getDoc } from '@angular/fire/firestore';
import { DocumentData } from 'firebase/firestore';
import { User } from '../user.interface';
import { UtilesService } from './utiles.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private utiles = inject(UtilesService);
  private userSubject = new BehaviorSubject<FirebaseUser | null>(null);
  private usernameSubject = new BehaviorSubject<string | null>(null);

  constructor() {
    onAuthStateChanged(this.auth, (user) => {
      this.userSubject.next(user);
      if (user) {
        this.getUserData(user.uid).then((userData) => {
          if (userData) {
            this.usernameSubject.next(userData.username);
          }
        });
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        this.usernameSubject.next(null);
        localStorage.removeItem('user');
      }
    });
  }

  get currentUser$(): Observable<FirebaseUser | null> {
    return this.userSubject.asObservable();
  }

  get username$(): Observable<string | null> {
    return this.usernameSubject.asObservable();
  }

  logIn(user: User) {
    return signInWithEmailAndPassword(this.auth, user.email, user.password).then(async (res) => {
      const userId = res.user.uid;
      const userData = await this.getUserData(userId);
      if (userData) {
        this.usernameSubject.next(userData.username);
      }
      return res;
    });
  }

  register(user: User) {
    return createUserWithEmailAndPassword(
      this.auth,
      user.email,
      user.password
    ).then(async (res) => {
      const userId = res.user.uid;
      await this.updateUser(user.username);
      await this.setDocument(`users/${userId}`, {
        email: user.email,
        username: user.username,
      });
      this.usernameSubject.next(user.username);
      return res;
    });
  }

  signOut() {
    return signOut(this.auth).then(() => {
      this.usernameSubject.next(null);
      localStorage.removeItem('user');
      this.utiles.routerLink('/login');
    });
  }

  updateUser(displayName: string) {
    const currentUser = this.auth.currentUser;
    if (currentUser) {
      return updateProfile(currentUser, { displayName }).then(() => {
        this.usernameSubject.next(displayName);
      });
    } else {
      return Promise.reject('No hay usuario conectado.');
    }
  }

  setDocument(path: string, data: any) {
    return setDoc(doc(this.firestore, path), data, { merge: true });
  }

  async getDocument(path: string): Promise<DocumentData | undefined> {
    const docRef = doc(this.firestore, path);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : undefined;
  }

  async getUserData(userId: string): Promise<User | undefined> {
    const docSnap = await getDoc(doc(this.firestore, `users/${userId}`));
    if (docSnap.exists()) {
      return docSnap.data() as User;
    }
    return undefined;
  }
}
