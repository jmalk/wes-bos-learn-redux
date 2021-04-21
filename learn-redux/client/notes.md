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
