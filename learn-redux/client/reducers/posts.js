export function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      return state.map((post, index) => index === action.index ? { ...post, likes: post.likes + 1 } : post);
    default:
      return state
  }
}