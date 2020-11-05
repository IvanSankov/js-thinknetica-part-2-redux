import RestDbClient from "../../http/RestDbClient";

export const REST_DB = 'REST_DB';

const client = new RestDbClient();

const RestDbMiddleware = store => next => action => {
  if (!action[REST_DB]) {
    return next(action);
  }

  const { method, requestAction, successAction, errorAction } = action[REST_DB];
  store.dispatch(requestAction());

  return client[method]()
    .then(data => store.dispatch(successAction(data)))
    .catch(error => store.dispatch(errorAction(error)))
}

export default RestDbMiddleware;