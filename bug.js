```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic:  This effect runs only once on mount.
    // It does not update the count when the prop changes.
    console.log('Component mounted with prop:', props.initialCount);
  }, [props.initialCount]); // This is where the mistake is

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```