# Full Stack Development Q&A & Problem Solving Guide

html & css 20 interview questions

````base

# 1.what is html?

## Ans: html (hper text markup language) is used to structure content on the web elements like headings,paragraphs,links,images and forms.

*2.what are semantic elements in html?
##Ans: semantic elements clearly describe their meaning in a human and machine-readable way.Examples of semantic elements include <header>,<footer>,<article>,<section>,<nav> etc.

3. Difference between <div> and <section>?

##Ans: <div> → non-semantic, used for styling/layout

<section> → semantic, represents a meaningful section of content

**Example:**
```html
<div class="container"></div>
<section>
  <h2>About Us</h2>
  <p>Information about the company.</p>
</section>

4. What are common HTML5 form input types?
Answer: text, password, email, number, date, checkbox, radio, file, submit, tel, url, color, range.

5. How do you make a form input required?
Answer: Use the required attribute:
<input type="text" required>

6. Difference between <ul>, <ol>, and <dl>?
Answer:
<ul> → unordered list
<ol> → ordered list
<dl> → description list (<dt> = term, <dd> = description)

7. Difference between id and class in CSS?
Answer:
id → unique element (#id {})
class → reusable style (.class {})

8. What is CSS specificity?
Answer: Specificity determines which CSS rule applies. Order: Inline > ID > Class > Element.
#menu {}  /* highest */
.nav {}    /* lower */
div {}     /* lowest *

9. What are pseudo-classes in CSS?
Answer: Pseudo-classes style elements in a specific state. Examples: :hover, :focus, :first-child, :nth-child(2).

10. Difference between relative, absolute, fixed, and sticky positioning?
Answer:
relative → relative to normal position
absolute → relative to nearest positioned ancestor
fixed → stays fixed on viewport
sticky → toggles between relative and fixed based on scroll

11. What is Flexbox in CSS?
Answer: Flexbox is a layout model for arranging items in a row or column with alignment and space distribution.


.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

12. Flexbox properties for container and items?
Answer:
Container: display, flex-direction, justify-content, align-items, flex-wrap
Items: flex, align-self, order

13. What is CSS Grid?
Answer: Grid is a 2D layout system for rows and columns.
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
}

14. What are media queries?
Answer: Media queries apply styles based on device width or features.
@media (max-width: 768px) {
  body { font-size: 14px; }
}

15. How to make an image responsive?
Answer:
img {
  max-width: 100%;
  height: auto;
}

16.How to include a Google Font?
Answer:
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">

17. Difference between inline, block, and inline-block?
Answer:
inline → no line break, ignores width/height
block → full-width, line break
inline-block → inline but respects width/height

18. What are CSS transitions?
Answer: Animate property changes over time.
button {
  transition: background 0.3s;
}
button:hover {
  background: blue;
}

19. How to create a CSS animation?
Answer:
@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}
.box {
  animation: slide 2s infinite alternate;
}

20. Difference between em, rem, %, and px?
Answer:
px → fixed pixels
% → relative to parent
em → relative to parent font size
rem → relative to root font size


````

## 2.JavaScript (60 Q&A + 20 Problem Solving)

```
Variables and Data Types

1. Difference between var, let, and const?

var: function-scoped, can be redeclared, hoisted
let: block-scoped, cannot be redeclared, hoisted but  not initialized.
const: block-scoped, cannot be redeclared or reassigned

2. What are the data types in JavaScript?
Answer:
* Primitive:string ,number ,boolean,null ,undefined,symbol,bigint.
* Non-primitive:object,array,function.

3.What are the coercion in js?
Answer:Autonatic conversion between types.
console.log('5' - 2); // 3 (string to number)
console.log('5' + 2); // '52' (number to string)

4. Difference between == and ===?
* ==: checks value after type coercion
* ===: checks value and type strictly


5. How do you declare a template literal?
let name = "Mahabub";
console.log(`Hello, ${name}!`);


6. Difference between function declaration and expression?
Declaration: hoisted, can be called before definition
function sum(a,b){return a+b;}


7. What is an arrow function?
Concise syntax, no this binding:
const add = (a,b) => a + b;

8. What is a callback function?
A function passed as an argument to another function:
function greet(name, callback){
    callback(name);
}
greet('Mahabub', name => console.log(`Hello ${name}`));

9. What are default parameters?
function greet(name="Guest"){
    console.log(`Hello ${name}`);
}

10. What is rest and spread operator?

*Rest: collects multiple arguments into an array
function sum(...nums){ return nums.reduce((a,b)=>a+b,0); }
*Spread: expands an array/object

let arr1=[1,2]; let arr2=[...arr1,3,4]; // [1,2,3,4]


11. Difference between map, filter, and reduce?
map → transforms array
filter → returns filtered array
reduce → reduces array to single value

12. How to find an element in an array?
[1,2,3].find(el => el>1); // 2


13. Difference between forEach and map?
forEach: executes a function, returns undefined
map: executes a function, returns new array

14. How to remove duplicates from an array?
let arr = [1,1,2,3];
let unique = [...new Set(arr)]; // [1,2,3]

15. How to check if a variable is an array?
Array.isArray(arr);

16. How to destructure an object?
const person = {name:"Mahabub", age:25};
const {name, age} = person;


17. How to clone an object?
let clone = {...person};

18. What is optional chaining?
Safely access nested properties:
console.log(person?.address?.city);

19. Difference between for...in and for...of?
for...in: iterates object keys
for...of: iterates iterable values (array, string)

20. How to merge objects?
let obj1={a:1}, obj2={b:2};
let merged = {...obj1, ...obj2}; // {a:1,b:2}
```

## DOM and Events

```
21. How to select an element in JS?
document.getElementById('id')
document.querySelector('.class')
document.querySelectorAll('div')

22. How to add an event listener?
element.addEventListener('click', () => console.log('clicked'));


23. What is event delegation?
Attaching one event to a parent to handle children:
document.getElementById('list').addEventListener('click', e => {
    if(e.target.tagName==='LI') console.log(e.target.textContent);
});
24. How to change element content?
document.getElementById('demo').textContent = "Hello";

25. How to change element style?
element.style.color = "red";

26.var, let, এবং const-এর মধ্যে পার্থক্য কী?
উত্তর: var হলো পুরনো (Function scoped), let এবং const আধুনিক (Block scoped)। const-এর মান পরিবর্তন করা যায় না।

**বাস্তব উদাহরণ: var হলো পাড়ার ক্লাব (সবাই ব্যবহার করতে পারে), let হলো আপনার নিজের ঘর, আর const হলো আপনার জন্মতারিখ (যা বদলানো যায় না)।


## JavaScript Mastery Plan
Day 1: The Foundation & Execution Context
Focus on how JS actually runs. Understand that JS is single-threaded but non-blocking.

Topics: Data types (primitive vs. reference), var/let/const, Hoisting, and the Execution Context.

Interview Q: What is the difference between undefined and not defined?

A: undefined is a placeholder for a variable that has been declared but not assigned a value. not defined is a ReferenceError thrown when the engine can't find the variable in the scope chain at all.

Day 2: Scope & Closures
This is where most beginners get tripped up. Master the "backpack" of variables.

Topics: Lexical Scope, Scope Chain, and Closures.

Interview Q: What is a Closure and give a practical use case?

A: A closure is a function that remembers its outer variables even after the outer function has finished executing. Use cases include data privacy (private variables) and function factories.

Day 3: The "this" Keyword & Prototypes
Stop guessing what this refers to.

Topics: this binding (Implicit, Explicit, New, Global), Prototypes, and Prototypal Inheritance.

Interview Q: Explain the difference between .call(), .apply(), and .bind().

A: All three change the context of this. .call() and .apply() invoke the function immediately (call takes comma-separated args, apply takes an array). .bind() returns a new function for later use.

Day 4: Asynchronous JS (The Event Loop)
This is the heart of modern JavaScript.

Topics: Callbacks, Promises, async/await, and the Event Loop (Macro-tasks vs. Micro-tasks).

Interview Q: What is the output of console.log(1); setTimeout(() => console.log(2), 0); Promise.resolve().then(() => console.log(3)); console.log(4);?

A: 1, 4, 3, 2. Micro-tasks (Promises) execute before macro-tasks (setTimeout), even if the timeout is 0ms.

Day 5: Modern ES6+ & Functional Concepts
Write clean, professional code.

Topics: Destructuring, Rest/Spread, Arrow functions (and how they handle this), Map/Filter/Reduce.

Interview Q: How do arrow functions differ from regular functions regarding the this keyword?

A: Arrow functions do not have their own this. They inherit this from the enclosing lexical scope.

Day 6: DOM, Events & Performance
How JS interacts with the browser.

Topics: Event Bubbling vs. Capturing, Event Delegation, Debouncing, and Throttling.

Interview Q: What is Event Delegation?

A: It’s a technique where you attach a single event listener to a parent element to manage events for all its children, leveraging event bubbling. It saves memory and handles dynamic elements.

Day 7: Design Patterns & Practice
Topics: Module Pattern, Factory Pattern, Singleton, and solving 2-3 "Medium" LeetCode JS problems.

Interview Q: What is the difference between Deep Copy and Shallow Copy?

A: A shallow copy copies the top-level structure but keeps references to nested objects. A deep copy (like using structuredClone()) creates a completely independent duplicate of every level of the object

## .the fundations(1-25)
1.JavaScript-এ Data Types কী কী?

উত্তর: ২ প্রকার।
 ১. Primitive (String, Number, Boolean, Undefined, Null, Symbol, BigInt)
 ২. Non-Primitive (Object, Array)।

বাস্তব উদাহরণ: একটি রান্নাঘরে চিনির বয়াম (String), ডিমের সংখ্যা (Number), লাইট অন না অফ (Boolean)—এগুলো আলাদা আলাদা ডেটা।

২. var, let, এবং const-এর মধ্যে পার্থক্য কী?

উত্তর: var হলো পুরনো (Function scoped), let এবং const আধুনিক (Block scoped)। const-এর মান পরিবর্তন করা যায় না।

বাস্তব উদাহরণ: var হলো পাড়ার ক্লাব (সবাই ব্যবহার করতে পারে), let হলো আপনার নিজের ঘর, আর const হলো আপনার জন্মতারিখ (যা বদলানো যায় না)।

৩. Hoisting কী?

উত্তর: ডিক্লারেশনের আগে ভেরিয়েবল ব্যবহার করার ক্ষমতা। JS কম্পাইল করার সময় ডিক্লারেশনগুলোকে উপরে তুলে নেয়।

বাস্তব উদাহরণ: ক্লাসে শিক্ষক আসার আগেই কোনো ছাত্রের হাত তুলে রাখা যে সে উত্তর জানে।

৪. Temporal Dead Zone (TDZ) কী?

উত্তর: let বা const ডিক্লেয়ার করার আগে সেই ভেরিয়েবল অ্যাক্সেস করতে চাইলে যে এরর দেয়, সেই সময়টুকুই TDZ।

৫. null এবং undefined-এর পার্থক্য কী?

উত্তর: undefined মানে মান দেওয়া হয়নি। null মানে আপনি ইচ্ছা করে খালি রেখেছেন।

বাস্তব উদাহরণ: একটি ওষুধের কৌটা খালি থাকা মানে null, আর কৌটাটি আছে কি না তা না জানলে সেটি undefined।

৬. == বনাম ===?

উত্তর: == শুধু মান চেক করে, === মান এবং ডেটা টাইপ দুটোই চেক করে।

বাস্তব উদাহরণ: == দেখে আপনি মানুষ কি না, আর === দেখে আপনার ভোটার আইডি কার্ড আছে কি না।

৭. Closure কী? (খুবই ইম্পর্ট্যান্ট)

উত্তর: যখন কোনো ফাংশন তার বাইরের স্কোপের ভেরিয়েবলকে মনে রাখে, তখন তাকে Closure বলে।

বাস্তব উদাহরণ: আপনি স্কুল শেষ করে বেরিয়ে গেছেন, কিন্তু স্কুলের বন্ধুদের নাম আপনার মাথায় এখনো আছে। এই "মনে রাখাটাই" ক্লোজার।

৮. Arrow Function এবং Normal Function-এর পার্থক্য কী?
উত্তর: অ্যারো ফাংশনের নিজস্ব this নেই, এটি তার চারপাশের স্কোপ থেকে this ধার করে।

৯. Higher Order Function কী?
উত্তর: যে ফাংশন অন্য কোনো ফাংশনকে ইনপুট হিসেবে নেয় বা আউটপুট হিসেবে রিটার্ন করে। যেমন: map(), filter(), reduce()।

১০. this কি-ওয়ার্ড কীভাবে কাজ করে?
উত্তর: এটি মূলত বর্তমান অবজেক্টকে নির্দেশ করে। এটি কোথায় কল করা হচ্ছে তার ওপর ভিত্তি করে এর মান বদলায়।


১১. Call, Apply এবং Bind-এর পার্থক্য কী?
উত্তর: তিনটিই this কন্ট্রোল করে। call তখনি রান করে, apply অ্যারো ইনপুট নেয়, আর bind পরে রান করার জন্য ফাংশনটি কপি করে রাখে।

---অ্যাসিনক্রোনাস জাভাস্ক্রিপ্ট---

১২. Event Loop কী?

উত্তর: জাভাস্ক্রিপ্ট সিঙ্গেল থ্রেডেড হয়েও কীভাবে একসাথে অনেক কাজ করে, তার ইঞ্জিন হলো ইভেন্ট লুপ।

বাস্তব উদাহরণ: একটি ব্যাংকের ক্যাশ কাউন্টার। লাইন অনেক বড় হলে ক্যাশিয়ার আপনার চেক জমা নিয়ে আপনাকে ওয়েটিং রুমে বসিয়ে দেয় এবং অন্য কাজ সারে। চেক রেডি হলে আপনাকে আবার ডাকে।

১৩. Promise কী?

উত্তর: ভবিষ্যতে কোনো কাজ সফল হবে না ব্যর্থ হবে, তার একটি নিশ্চয়তা।

বাস্তব উদাহরণ: অনলাইনে খাবার অর্ডার দেওয়া। তারা আপনাকে একটি রশিদ দেয় (Promise), খাবার এলে সেটি পূর্ণ হয় (Resolve), আর খাবার না থাকলে অর্ডার ক্যান্সেল হয় (Reject)।

১৪. Async/Await কী?

উত্তর: প্রমিজ হ্যান্ডেল করার সহজ ও আধুনিক উপায়। এটি কোডকে দেখতে সিঙ্ক্রোনাস কোডের মতো করে দেয়।

১৫. Callback Hell কী?

উত্তর: একটি ফাংশনের ভেতর আরেকটি ফাংশন, তার ভেতর আরেকটা—এভাবে কোড যখন অনেক জটিল হয়ে যায়।

১৬. Debouncing বনাম Throttling কী?

উত্তর: Debouncing হলো বারবার কাজ না করে একটা বিরতির পর কাজ করা (যেমন: সার্চ বার)। Throttling হলো নির্দিষ্ট সময় পর পর কাজ করা (যেমন: স্ক্রল ইভেন্ট)।

বাস্তব উদাহরণ: লিফটের দরজার কথা ভাবুন। কেউ বারবার বোতাম টিপলে দরজা বন্ধ হয় না, শেষবার টেপার কয়েক সেকেন্ড পর বন্ধ হয় (Debouncing)।

১৭. Spread (...) এবং Rest (...) অপারেটরের পার্থক্য কী?

Spread: অ্যারে বা অবজেক্টকে ভেঙে আলাদা করা।
Rest: অনেকগুলো আর্গুমেন্টকে এক জায়গায় জড়ো করা।

১৮. Pure Function কী?
উত্তর: একই ইনপুটের জন্য যা সবসময় একই আউটপুট দেয় এবং বাইরের কিছু পরিবর্তন করে না।

বাস্তব উদাহরণ: একটি ক্যালকুলেটর। আপনি $2 + 2$ দিলে এটি সবসময় $4$-ই দিবে।

১৯. Prototype কী?

উত্তর: জাভাস্ক্রিপ্টের প্রতিটি অবজেক্টের একটি ইন-বিল্ট বৈশিষ্ট্য যা অন্য অবজেক্টের বৈশিষ্ট্য ধার করতে সাহায্য করে।

২০. Memoization কী?

উত্তর: একই ক্যালকুলেশন বারবার না করে রেজাল্ট ক্যাশে জমা রাখা যাতে পারফরম্যান্স বাড়ে।

```

## 1. Node.js (30 Q&A + 10 Problem Solving)

**Focus:** Backend runtime, server-side JS
**Key Points:** Event loop, modules, HTTP, file system, asynchronous programming

### **Top Questions (বাংলায়)**

1. Node.js কী?
2. Node.js vs Browser JS পার্থক্য
3. Event Loop কী?
4. Callback, Promise, Async/Await ব্যাখ্যা
5. Global Object কী?
6. **dirname, **filename কী?
7. Module Types: CommonJS vs ES Modules
8. require vs import পার্থক্য
9. process object কী?
10. Buffer ও Stream ব্যাখ্যা
    ... _(30 পর্যন্ত)_

### **10 Problem Solving Examples**

- Create HTTP server
- File system read/write
- EventEmitter use
- Async API call
- Path module example
- etc...

---

## 2. Express.js (30 Q&A + 10 Problem Solving)

**Focus:** Node.js web framework
**Key Points:** Routing, middleware, request & response, REST API

### **Top Questions (বাংলায়)**

1. Express.js কী?
2. Middleware কী?
3. Routing কী?
4. GET, POST, PUT, DELETE পার্থক্য
5. app.use() কী?
6. req, res, next ব্যাখ্যা
7. Static files serve কিভাবে?
8. JSON data parse কিভাবে?
9. Router module কী?
10. Error handling middleware কিভাবে?
    ... _(30 পর্যন্ত)_

### **10 Problem Solving Examples**

- Simple server setup
- JSON response
- URL parameters & Query
- POST request handling
- Middleware logging
- Router example
- CRUD example

---

## 3. React.js (30 Q&A + 10 Problem Solving)

**Focus:** Frontend UI library
**Key Points:** JSX, components, props, state, hooks, router, portals

### **Top Questions (বাংলায়)**

1. React.js কী?
2. JSX ব্যাখ্যা
3. Functional vs Class Component
4. Props ও State ব্যাখ্যা
5. setState & Lifting state
6. useState, useEffect, useRef, useContext
7. Conditional rendering
8. List rendering & key prop
9. React Router কী?
10. Error boundaries, portals
    ... _(30 পর্যন্ত)_

### **10 Problem Solving Examples**

- Functional component
- Props example
- useState counter
- useEffect timer
- Conditional rendering
- List rendering
- useRef focus
- Lifting state up
- React Router example
- Portal example

---

## 4. Next.js (50 Q&A + 10 Problem Solving)

**Focus:** React framework for SSR & SSG
**Key Points:** Pages, routing, dynamic routes, API routes, getStaticProps, getServerSideProps, ISR, next/image, next/head, middleware

### **Top Questions (বাংলায়)**

1. Next.js কী?
2. Pages folder & routing
3. Dynamic routes
4. getStaticProps, getServerSideProps
5. getStaticPaths
6. API routes কী?
7. next/link, next/router
8. next/image, next/head
9. ISR & Middleware
10. Redirects, Rewrites, Deployment optimization
    ... _(50 পর্যন্ত)_

### **10 Problem Solving Examples**

- Simple page
- Dynamic route
- getStaticProps example
- getServerSideProps example
- API route
- next/image
- next/link
- getStaticPaths
- Middleware auth
- ISR example

---

## 5. MongoDB + Mongoose (20 Q&A + 10 Problem Solving)

**Focus:** NoSQL DB, schema, CRUD
**Key Points:** Database, collection, document, CRUD queries, Mongoose schema, model, validation, middleware, relations, population

### **Top Questions (বাংলায়)**

1. MongoDB কী?
2. Database, collection, document ব্যাখ্যা
3. MongoDB vs SQL
4. CRUD operations
5. Mongoose কী?
6. Schema & Model
7. Model ব্যাখ্যা (Q7)
8. Validation & Middleware
9. Population কী?
10. ObjectId, find(), findOne()
    ... _(20 পর্যন্ত)_

### **10 Problem Solving Examples**

- Connect MongoDB
- Create Schema & Model
- Insert single & multiple documents
- Find documents
- Update single & multiple
- Delete document
- Populate example

---

## 6. Prisma (30 Q&A + 10 Problem Solving)

**Focus:** Type-safe ORM for SQL/NoSQL
**Key Points:** Prisma client, schema, models, CRUD, relations, transactions, upsert, aggregate, groupBy, migrations, raw queries

### **Top Questions (বাংলায়)**

1. Prisma কী?
2. Prisma Client & Schema
3. Model, CRUD operations
4. findMany, findUnique, create, update, delete
5. Relations & Transactions
6. Upsert & Aggregation
7. Soft Delete
8. Migrations, Generate client
9. Raw queries
10. Nested writes, include, select
    ... _(30 পর্যন্ত)_

### **10 Problem Solving Examples**

- Connect Prisma Client
- Create User
- Find all & findUnique
- Update & Delete
- Upsert
- Create related Post
- Aggregate & GroupBy

---

## 🔹 Usage

এই README ফাইলটি ব্যবহার করে আপনি:

- Node.js backend development শেখতে পারবেন
- Express.js API তৈরি করতে পারবেন
- React.js frontend components ও hooks প্র্যাকটিস করতে পারবেন
- Next.js SSR/SSG অ্যাপ্লিকেশন তৈরি করতে পারবেন
- MongoDB + Mongoose database CRUD এবং relations ব্যবহার করতে পারবেন
- Prisma দিয়ে type-safe ORM ব্যবহার করতে পারবেন

---

## 🔹 References

- [Node.js Official](https://nodejs.org/)
- [Express.js Official](https://expressjs.com/)
- [React.js Official](https://reactjs.org/)
- [Next.js Official](https://nextjs.org/)
- [MongoDB Official](https://www.mongodb.com/)
- [Mongoose Official](https://mongoosejs.com/)
- [Prisma Official](https://www.prisma.io/)

---

**Author:** Mahabub Alam
**Date:** 2026-01-29
**Purpose:** Full Stack Q&A & Problem Solving Guide

```

```
