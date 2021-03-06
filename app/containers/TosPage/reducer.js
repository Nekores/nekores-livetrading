/*
 *
 * TosPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  constants as c,
} from './constants';

const initialState = fromJS({
  default: false,
});

function tosPageReducer(state = initialState, action) {
  switch (action.type) {
    case c.DEFAULT_ACTION:
      return state.set('default', !state.get('default'));
    default:
      return state;
  }
}

export default tosPageReducer;
