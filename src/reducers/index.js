import { combineReducers } from 'redux';

import {
  DATA_AVAILABLE,
  QUOTES_AVAILABLE,
  ADD_QUOTE,
  UPDATE_QUOTE,
  DELETE_QUOTE
} from '../actions/';

let dataState = { quotes: [], loading: true };

const dataReducer = (state = dataState, action) => {
  switch (action.type) {
    case DATA_AVAILABLE:
      state = Object.assign({}, state, { data: action.data, loading: false });
      return state;

    case ADD_QUOTE:
      console.log(state);
      var quotes = cloneObject(state.quotes); //clone the current state
      quotes.unshift(action.quote); //add the new quote to the top
      state = Object.assign({}, state, { quotes: quotes });
      return state;

    case QUOTES_AVAILABLE:
      state = Object.assign({}, state, { quotes: action.quotes, loading: false });
      return state;

    case UPDATE_QUOTE:
      var quote = action.quote;
      var quotes = cloneObject(state.quotes); //clone the current state
      var index = getIndex(quotes, quote.id); //find the index of the quote with the quote id passed
      if (index !== -1) {
        quotes[index]['author'] = quote.author;
        quotes[index]['text'] = quote.text;
      }
      state = Object.assign({}, state, { quotes: quotes });
      return state;

    case DELETE_QUOTE:
      var quotes = cloneObject(state.quotes); //clone the current state
      var index = getIndex(quotes, action.id); //find the index of the quote with the id passed
      if (index !== -1) quotes.splice(index, 1); //if yes, undo, remove the QUOTE
      state = Object.assign({}, state, { quotes: quotes });
      return state;
    default:
      return state;
  }
};

function cloneObject(object) {
  return JSON.parse(JSON.stringify(object));
}

function getIndex(data, id) {
  let clone = JSON.parse(JSON.stringify(data));
  return clone.findIndex(obj => parseInt(obj.id) === parseInt(id));
}

//combine all the reducers
const rootReducer = combineReducers({
  dataReducer
});

export default rootReducer;
