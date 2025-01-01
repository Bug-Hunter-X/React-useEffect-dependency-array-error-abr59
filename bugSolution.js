```javascript
import React, { useState, useEffect } from 'react';

function MyComponent(props) {
  const [count, setCount] = useState(props.initialCount);

  useEffect(() => {
    // Correct logic: The effect now runs whenever the props.initialCount changes.
    console.log('Component updated with prop:', props.initialCount);
    setCount(props.initialCount); // update state when prop changes 
  }, [props.initialCount]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```