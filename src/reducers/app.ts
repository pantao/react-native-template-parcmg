import pkg from '../../package.json'
const getInitialState = () => {
  return {
    version: pkg.version,
  }
}

export const app = (state = getInitialState(), action = {}) => {
  return {
    ...state,
  }
}
