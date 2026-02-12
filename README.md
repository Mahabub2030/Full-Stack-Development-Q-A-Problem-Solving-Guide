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




```
