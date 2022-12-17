import { initialSatte } from "./initialState";
import { LOADER_END, LOADER_START } from "./loaderTypes";

/**
 * Create auth reducer
 */
const LoaderReducer = (state = initialSatte, { type, payload }) => {
  switch (type) {
    case LOADER_START:
      return 100;

    case LOADER_END:
      return 0;

    default:
      return state;
  }
};

// export
export default LoaderReducer;
