import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  private signInWithEmailAndPassword({ email, password }): Promise<auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

}
