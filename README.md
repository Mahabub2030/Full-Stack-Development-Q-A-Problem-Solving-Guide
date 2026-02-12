# Full Stack Development Q&A

# React JS

-- The core :What is React and Why do we need it?
\*\* React is a declarative,component-based Javascipit libray for building user interface.
\*\*why we need it:Traditonal web development makes it hard to manage "state" (data that changes).React allows to build small,reusable "Components"

```base
---------------------------------
1.What is React ?
Ans:React is a Javscipit liabry for bulding user interface useing componets.
🧠 Why need it?
Ans:Because modern websites are dynamic (Facebook, Instagram). We need reusable UI.
⚙️ Why it works?
Ans:React uses Virtual DOM to update only changed parts.
🌍 Real Example:
Ans:Like Facebook post updates without refreshing page.
--------------------------------------------
2. What is SPA (Single Page Application)?
Ans:SPA loads one HTML page and updates content dynamically.
🧠 Why need it?
Ans:Fast experience like mobile app.
⚙️ Why it works?
Ans:React changes only component, not full page.
🐢 When slow?
Ans:If too many unnecessary re-renders.
🚀 Fix:
Ans:Use React.memo, useMemo, useCallback.

--------------------------------------
3.What is Component?
Ans:A resusable piec of UI block.
🧠 Why need it?
Ans:Code reuse & clean structure.

🌍 Real Example:
Navbar, Footer, Button.

function Button() {
  return <button>Click</button>;
}

--------------------------------------
🔹 4. What is JSX?
Ans:JSX allows writing HTML inside JavaScript.

⚙️ Why it works?
Ans:Babel converts JSX → JavaScript.

--------------------------------------
🔹 5. What is Virtual DOM?
Ans:Virtual DOM is a lightweight copy of real DOM.

🧠 Why need it?
Ans:DOM manipulation is slow.

⚙️ Why it works?
Ans:React compares old vs new Virtual DOM (diffing).

🐢 When slow?
Ans:If large tree updates frequently.
🚀 Fix:
Ans:Split components, use memoization.


-------------------------------
🔹 6. What is State?
Ans:State is data that changes inside component.

const [count, setCount] = useState(0);

🧠 Why need it?
To update UI dynamically.
------------------------------
🔹 7. What are Props?
Ans:Props pass data from parent to child.

<Child name="Mahabub" />
-------------------------------
🔹 8. Difference between State & Props?

* State            ||	Props
* Mutable          || 	Immutable
* Inside component ||	Passed from parent

----------------------------------
🔹 9. What is useEffect?
Ans:Hook for side effects (API, timer).

useEffect(() => {
  fetchData();
}, []);

🐢 When slow?
If dependency array wrong.
🚀 Fix:
Correct dependency array.

--------------------------------

🔹 10. What is useRef?
Ans:Used to access DOM directly.

-------------------------------
🔹 11. What is Conditional Rendering?
 Ans: {isLogin ? <Dashboard /> : <Login />}
        Used to show UI based on condition.

-------------------------------
🔹 12. What is List Rendering?
Ans:items.map(item => <li>{item}</li>)
     Need unique key.

------------------------------
🔹 13. Why Key is Important?
Ans:Helps React identify changed items.

-------------------------------
🔹 14. What is React.memo?
Ans:Prevents unnecessary re-render.

🐢 When slow?
Parent re-renders child unnecessarily.
🚀 Fix:
Wrap component with React.memo()

--------------------------------

🔹 15. What is useMemo?
Optimizes heavy calculations.
const value = useMemo(() => calculate(), []);

------------------------------------
🚀 When React Website Becomes Slow?
- Too many re-renders
- Large component tree
- No lazy loading
- Large images
- Heavy calculations
- No code splitting

🔥 How to Fix Slow React Website?
✅ Use React.memo
✅ Use useMemo & useCallback
✅ Lazy loading (React.lazy)
✅ Code splitting
✅ Optimize images
✅ Use pagination
✅ Avoid anonymous functions in props
✅ Use production build

         ===========================Intermediate Level===============

🔹 16. What is Reconciliation?
Ans:Reconciliation is React’s process of comparing old Virtual DOM with new Virtual DOM.

🧠 Why need it?
To update only changed elements instead of full DOM.

⚙️ Why it works?
- Uses Diff Algorithm (O(n)).
🐢 When slow?
Large list without proper keys.
🚀 Fix:
Use unique stable keys (id, not index).

------------------------------------
🔹 17. What is React Fiber?
Ans:Fiber is the new reconciliation engine (React 16+).

🧠 Why need it?
Ans:To make UI rendering interruptible and smooth.
⚙️ Why it works?
Ans: Breaks rendering work into small chunks.
🌍 Real Example:
Ans: While scrolling Instagram, UI doesn't freeze.

----------------------------------------
🔹 18. What is Context API?
Ans:Context provides global state without prop drilling.
const ThemeContext = createContext();

🧠 Why need it?
- For auth, theme, language.
🐢 When slow?
- Large context causes all consumers to re-render.
🚀 Fix:
- Split contexts.

---------------------------------
🔹 19. What is Prop Drilling?
Ans:Passing props through many components.

🧠 Why bad?
- Hard to manage & maintain.
🚀 Fix:
- Context API / Redux.

-------------------------
🔹 20. What is Custom Hook?
Ans:Reusable logic using hooks.

Reusable hook logic।
function useFetch(url) {
  const [data, setData] = useState(null);
}

🧠 Why need?
- Avoid duplicate logic.

------------------------------
🔹 21. What is useCallback?
Ans:Memoizes function.
const handleClick = useCallback(() => {}, []);

🐢 When slow?
Passing new function to child every render.
🚀 Fix:
Wrap with useCallback.

------------------------------
🔹 22. What is Code Splitting?
Ans:Split bundle into smaller chunks.
- const Dashboard = React.lazy(() => import('./Dashboard'));

🧠 Why need?
- Reduce initial load time.

----------------------------------
🔹 23. What is Lazy Loading?
Ans:Loads component only when needed.
🧠 Real Example:
- Admin panel loads only when admin clicks.
---------------------------------------
🔹 24. What is Suspense?
Ans:Fallback UI while lazy loading.
<Suspense fallback={<Loading />} />
---------------------------------------
🔹 25. What is Controlled Component?
Ans:Form input controlled by React state.
-<input value={name} onChange={...} />

--------------------------------------
🔹 26. What is Uncontrolled Component?
Ans:Uses ref instead of state.
-const ref = useRef();

--------------------------------------

🔹 27. What is Lifting State Up?
Ans:Move state to common parent.
🧠 Why need?
When two components need same data.

--------------------------------------
🔹 28. What is Error Boundary?
Ans:Catches JavaScript errors in component tree.
-class ErrorBoundary extends React.Component {}
🧠 Why need?
-Prevent whole app crash.

---------------------------------------
🔹 29. What is useReducer?
Ans:Alternative to useState for complex logic.
const [state, dispatch] = useReducer(reducer, initialState);
🧠 Real Example:
Shopping cart system.

------------------------------------------
🔹 30. When React App Becomes Slow (Intermediate Level)?

Common Reasons:
*Large Context re-render
*No memoization
*Huge API response
*No pagination
*Re-rendering big list
*Inline functions
*Repeated calculations

---------------------------------------
🚀 Advanced Fix Strategy
1️⃣ Memoization
-React.memo
-useMemo
-useCallback
2️⃣ List Optimization
-Pagination
-Virtualization (react-window)
3️⃣ Reduce Bundle Size
-Code splitting
-Remove unused libraries
4️⃣ Avoid Re-renders
-Check with React DevTools Profiler

------------------💎 Interview Level Question--------------
Q: Why React faster than traditional DOM?
Answer:
Because React updates Virtual DOM first, compares changes, then updates only necessary real DOM parts.


======================== Advanced Level =====================

🔹 31. What is Concurrent Rendering (React 18)?
Ans:Concurrent Rendering allows React to prepare multiple UI versions without blocking the main thread.

🧠 Why need it?
Ans:To keep UI responsive during heavy rendering.
🌍 Real Example:
Ans:Typing in search while large list updates — UI stays smooth.

----------------------------------------------


```
