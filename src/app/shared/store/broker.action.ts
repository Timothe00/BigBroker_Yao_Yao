import { Broker } from './../../core/model/broker.interface';
import { createAction, props } from '@ngrx/store';

//
export const getBroker = createAction('[Brokers] Get All brokers');


//
export const getMyBrokers = createAction(
  '[All about broker] FetchAllMyBroker success',
  props<{broker: Broker[]}>()
);


//
export const loadError = createAction(
    '[Brokers] Get All Error',
    props<{ error: string }>()
);