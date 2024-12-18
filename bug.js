```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval. Missing cleanup function.
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
```