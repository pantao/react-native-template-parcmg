const getInitialState = () => {
  return {
    version: '0.0.0-development',
  }
}

export const app = (state = getInitialState(), action = {}) => {
  return {
    ...state,
  }
}
