import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type){
    case 'FETCH_WEATHER':
      //NEVER MUTATE STATE! RETURN NEW STATE!!!
      //return state.concat([ action.payload.data ]);
      return [action.payload.data, ...state ];
  }
  return state;
}
