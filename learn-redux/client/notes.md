# Redux

## Actions

Something happens: a like, a click, a page load.

An object containing a type, e.g. `'INCREMENT_LIKES'`. and a payload.

Actions contain payloads describing what specifically happened, e.g. what _was_ the comment? What post was it on? Who wrote it?

Redux dev tools will let you time travel by stepping back before an action you just did.

## Action Creators

Functions that make actions (objects) for you.

## Reducers

Once you add an action, how does React handle the changes?

Reducer takes two things:

1. An action (complete with payload of info about what actually happened).
2. A copy of the current state.

Then it works out what your new state should be, based on the action, and returns it.

```
function reducer(action, state): state
```

You can only have one reducer, so you might typically make multiple small ones then have a root reducer that combines them into one snapshot of the state.

## Joining up Actions and Reducers

Every time you fire an action, every reducer will run. Each reducer must check the action to see if it cares about it. The reducer should only update the state if it is its job to do so.
