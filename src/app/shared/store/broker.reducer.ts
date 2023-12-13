import { Broker } from './../../core/model/broker.interface';
import { createReducer, on } from '@ngrx/store';
import { getBroker, getMyBrokers, loadError } from './broker.action';

/*les differents ETATS de sur Broker page 
[rechargement de la page, 
recupération des donnée, 
les erreurs en cas d'echec de recuperation ou autres...]*/

export interface StateOfBroker {
  brokers: Broker[];
  loading: boolean;
  loaded: boolean;
  error: string;
}

/* Etat initial: un tableau de broker vide, pas de chargement, pas d'erreur */
export const initialState: StateOfBroker = {
  brokers: [],
  loading: false,
  loaded: true,
  error: '',
};

/**
  Reducer pour le module 'broker'. 
  Il est composé de plusieurs états (loading, affichage donnée et error) 
  qui vont varier en fonction des différents cas qu'on pourrait avoir
 */
export const scoreboardReducer = createReducer(
  initialState,
  on(getBroker, (state) => ({ ...state, loading: true })),
  on(getMyBrokers, (state, { broker }) => ({
    ...state,
    loading: false,
    loaded: true,
    brokers: broker
  })),
  on(loadError, (state, payload) => ({ ...state, error: payload.error }))
);

