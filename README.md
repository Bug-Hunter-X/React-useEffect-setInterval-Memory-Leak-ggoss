# React useEffect setInterval Memory Leak

This repository demonstrates a common error in React applications involving the `useEffect` hook and `setInterval`.  The example showcases a memory leak that occurs when the `setInterval` function is not properly cleaned up when the component unmounts.  The solution provides a corrected version that demonstrates how to use cleanup functions to prevent this memory leak. 