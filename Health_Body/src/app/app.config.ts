import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp } from 'firebase/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideFirebaseApp } from '@angular/fire/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBAgNUY3lChS3VxtR4R4zR8mpMnMCR5UeI',
  authDomain: 'healthbody-4910f.firebaseapp.com',
  projectId: 'healthbody-4910f',
  storageBucket: 'healthbody-4910f.appspot.com',
  messagingSenderId: '851826386849',
  appId: '1:851826386849:web:868fe05358f3497ab28de0',
  measurementId: 'G-M0EZMLSWX4',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth()),
    ]),
  ],
};
