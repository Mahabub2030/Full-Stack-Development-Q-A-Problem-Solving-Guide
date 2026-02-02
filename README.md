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
