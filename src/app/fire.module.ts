import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '@app-env';
// Firebase modules
import { AngularFireModule } from '@angular/fire';
import {
  AngularFirestoreModule,
  USE_EMULATOR as USE_FIRESTORE_EMULATOR,
} from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase, 'miguelbogotadev'),
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
  ],
  providers: [
    {
      provide: USE_FIRESTORE_EMULATOR,
      useValue: environment.production ? undefined : ['localhost', 4202],
    },
  ],
})
export class FireModule { }
