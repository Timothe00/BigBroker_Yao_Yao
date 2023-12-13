import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { ApiService } from '../../core/services/api/api.service';
import { getBroker, getMyBrokers, loadError } from './broker.action';

@Injectable()
export class BrokerEffects {
  /*
     
     */

  loadBrokers$ = createEffect(() => this.actions$.pipe(
      ofType(getBroker),
      tap((broker) => console.log("hello",broker)),
      exhaustMap(() =>
        this.brokerService.getAllBrokersOnServer()
        .pipe(
          map((broker) => getMyBrokers({ broker })),
          catchError((error) => of(loadError({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private brokerService: ApiService) {}
}
