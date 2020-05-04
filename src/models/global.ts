import { createModel, ModelConfig } from "@rematch/core";

export interface GlobalState {
  globalInfo: any;
}

const global = createModel<GlobalState, ModelConfig<GlobalState>>({
  state: {
    globalInfo: {},
  },
  reducers: {},
  effects(dispatch) {
    return {};
  },
});

export default global;
