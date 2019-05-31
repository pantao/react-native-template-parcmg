# Containers

> Container components are components that are aware of Redux"

Well, a container component is a component that is responsible for retrieving data, and in order to get that data, the component needs to use Redux's `connect` and `mapStateToProps` functions.

A container component will grab data from state via `mapStateToProps`. The component will then pass necessary portions of that data down to its children as `props`.

A container component is also responsible for dispatching actions that make changes to application state.