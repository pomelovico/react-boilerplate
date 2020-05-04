import { init , RematchRootState, RematchDispatch} from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import { routerMiddleware, connectRouter } from 'connected-react-router';

import history from '@/router/history';
import * as models from '@/models'
type ModelType = typeof models;

const loading = createLoadingPlugin({});
const store = init({
  models,
  redux:{
    middlewares:[routerMiddleware(history)],
    reducers:{
      router: connectRouter(history)
    }
  },
  plugins: [loading]
});

export interface LoadingState {
  effects: {
    [K in keyof ModelType]: {
      /* [P in keyof ModelType[K]['effects']]: boolean; */
      /* rematch 的 effects 定义有点问题,上面的书写方式会被推断成{} */
      [k: string]: boolean;
    };
  };
  models: Record<keyof ModelType, boolean>;
  global: boolean;
}

export type Store = typeof store
export type RootStore = RematchRootState<typeof models>;
// export type Dispatch = typeof store.dispatch
export type Dispatch = RematchDispatch<typeof models>;
export interface DispatchProp {
  dispatch:Dispatch
}

export default store;