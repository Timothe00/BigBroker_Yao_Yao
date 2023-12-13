import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { BrokerEffects } from './shared/store/broker.effect';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { scoreboardReducer } from './shared/store/broker.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideStore(),

    provideState({ name: 'brokers', reducer: scoreboardReducer }),
    provideEffects([BrokerEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),


    provideHttpClient(),

]
};
