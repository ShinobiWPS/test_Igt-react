import axios from 'axios';
import { useEffect, useReducer } from 'react';

enum ActionType {
  LOADING = 'loading',
  FETCHED = 'fetched',
  ERROR = 'error',
}

export const useFetch = (endpoint) => {
  const initialState = {
    error: null,
    data: null,
    isLoading: false,
  };

  const fetchReducer = (state, action) => {
    switch (action.type) {
      case ActionType.LOADING:
        return { ...initialState, isLoading: true };
      case ActionType.FETCHED:
        return { ...initialState, data: action.payload, isLoading: false };
      case ActionType.ERROR:
        return { ...initialState, error: action.payload, isLoading: false };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: ActionType.LOADING });

      axios(`${process.env.REACT_APP_API_BASE_URL}/${endpoint}`)
        .then(({ data }) => dispatch({ type: ActionType.FETCHED, payload: data }))
        .catch((e) => dispatch({ type: ActionType.ERROR, payload: e as Error }));
    };

    fetchData();
  }, [endpoint]);

  return state;
};
