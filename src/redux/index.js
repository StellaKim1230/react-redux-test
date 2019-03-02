import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducers from './reducers';

// 미들웨어가 여러개인경우에는 파라미터로 여러개를 전달해주면 됩니다. 예: applyMiddleware(a,b,c)
// 미들웨어의 순서는 여기서 전달한 파라미터의 순서대로 지정됩니다.
const store = createStore(rootReducers, composeWithDevTools(
  applyMiddleware())
)

export default store;
