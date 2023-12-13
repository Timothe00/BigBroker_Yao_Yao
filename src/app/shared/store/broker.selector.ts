import { createSelector, createFeatureSelector } from '@ngrx/store';
import { StateOfBroker } from './broker.reducer';

export const brokerKey = 'brokers';

export const selectBroker = createFeatureSelector<StateOfBroker>(brokerKey);

export const selectBrokerState = createSelector(
  selectBroker,
  (state: StateOfBroker) => state.brokers
);
