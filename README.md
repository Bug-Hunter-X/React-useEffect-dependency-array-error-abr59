# React useEffect Dependency Array Error

This example demonstrates a common mistake in using the `useEffect` hook in React. The component doesn't update its count when the `initialCount` prop changes. This occurs because the `useEffect` hook is only run once on component mount, not when props change.

## Problem
The `useEffect` hook's dependency array is missing `props.initialCount`, leading to incorrect behavior.  The `console.log` inside the effect only runs once when the component initially mounts. 

## Solution
The solution involves correctly specifying the `initialCount` prop within the `useEffect` dependency array to make it reactive to changes.

## How to run the code
1. Clone this repo
2.  `npm install`
3. `npm start`