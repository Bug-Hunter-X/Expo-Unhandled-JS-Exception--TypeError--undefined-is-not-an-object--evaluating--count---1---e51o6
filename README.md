# Expo Unhandled JS Exception: TypeError: undefined is not an object (evaluating 'count + 1')

This repository demonstrates a common error in React Native Expo applications where the state variable `count` becomes undefined, leading to a `TypeError`. The error message, "TypeError: undefined is not an object (evaluating 'count + 1')", indicates that the code tries to perform an operation (addition) on `count` when it hasn't been initialized properly.

## Bug Description

The `useState` hook in the provided `App` component is not handling the case where the initial state isn't properly assigned or updated. This can happen due to various reasons, like race conditions, improper asynchronous operations, or unexpected state changes.

## Bug Solution

This repository contains a corrected version of the `App` component to prevent the error. It properly handles the state update by ensuring `count` always has a valid number value.

## Steps to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `expo start`.
4. Observe the error message in the console after several button clicks (the frequency can vary because of the nature of the bug).