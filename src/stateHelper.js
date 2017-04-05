import dotty from "dotty";

export default function makeChangeProps(component, path) {
  let value = dotty.get(component.state, path);
  return {
    onChange: ({ target }) => {
      component.setState(state => {
        dotty.put(state, path, target.value);
        return state;
      });
    },
    value: value ? value : ""
  };
}
