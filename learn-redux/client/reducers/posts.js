export function posts(state = [], action) {
  console.log('post will change');
  console.log({state, action});
  return state;
}