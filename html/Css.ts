/**
 * 
 * 
 * 
 * CSS Interview Q&A (20 Questions)
 * 
 * What is CSS?
En: Cascading Style Sheets, used to style the layout and appearance of a website.
Bn: সিএসএস হলো স্টাইল শিট ল্যাঙ্গুয়েজ যা দিয়ে ওয়েবসাইটের ডিজাইন এবং লেআউট নিয়ন্ত্রণ করা হয়।

*How to include CSS in HTML?
En: Inline, Internal, and External.
Bn: তিনভাবে করা যায়: ইনলাইন, ইন্টারনাল এবং এক্সটারনাল।

*What is the CSS Box Model?
En: It consists of Content, Padding, Border, and Margin.
Bn: এটি কন্টেন্ট, প্যাডিং, বর্ডার এবং মার্জিনের সমন্বয়ে গঠিত একটি বক্স।

*Difference between id and class?
En: id is unique to one element; class can be used for multiple elements.
Bn: id শুধুমাত্র একটি এলিমেন্টে ব্যবহার করা যায়, কিন্তু class অনেকগুলো এলিমেন্টে ব্যবহার করা যায়।

*What is Specificity?
En: It determines which CSS rule is applied by the browser when multiple rules target the same element.
Bn: একই এলিমেন্টে একাধিক স্টাইল থাকলে ব্রাউজার কোনটিকে প্রাধান্য দেবে তা স্পেসিফিসিটি ঠিক করে।

*What are Pseudo-classes?
En: Used to define a special state of an element (e.g., :hover, :active).
Bn: এলিমেন্টের বিশেষ অবস্থা বোঝাতে ব্যবহৃত হয়, যেমন মাউস হোভার করা।

* Difference between display: none and visibility: hidden?
En: display: none removes the element from the layout; visibility: hidden hides it but keeps the space.
Bn: display: none এলিমেন্টটিকে লেআউট থেকে সরিয়ে ফেলে, কিন্তু visibility: hidden শুধুমাত্র অদৃশ্য করে, জায়গাটি দখল করে রাখে।

* What is Z-index?

En: Controls the stack order of elements (which one is on top).
Bn: এলিমেন্টগুলো একটির ওপর আরেকটি থাকলে কোনটি উপরে থাকবে তা নির্ধারণ করে।

* What are Media Queries?

En: Used to create responsive designs for different screen sizes.
Bn: বিভিন্ন স্ক্রিন সাইজের জন্য রেসপন্সিভ ডিজাইন তৈরি করতে এটি ব্যবহৃত হয়।

** Explain CSS Flexbox.

En: A layout model for providing an easy way to align and distribute space among items in a container.
Bn: এটি কন্টেইনারের ভেতর এলিমেন্টগুলোকে সহজে সাজাতে এবং অ্যালাইন করতে সাহায্য করে।

#,Question & English Answer,Bengali Answer,Reality / Example
11,What is a Model in Mongoose? A wrapper on the Schema that provides an interface to the database (CRUD).,মডেল কি? স্কিমার ওপর ভিত্তি করে তৈরি একটি ইন্টারফেস যা দিয়ে ডাটাবেজে কাজ করা হয়।,"const User = mongoose.model('User', userSchema);"
12,What is Middleware (Hooks) in Mongoose? Functions which are passed control during execution of asynchronous functions.,Mongoose মিডলওয়্যার কি? ডাটা সেভ বা ডিলিট করার আগে বা পরে অটোমেটিক কোনো কাজ করার ফাংশন।,"Encrypting passwords using userSchema.pre('save', ...)."
13,Explain Virtuals in Mongoose? Properties that you can get/set but are NOT persisted in the database.,ভার্চুয়ালস কি? এমন প্রপার্টি যা ডাটাবেজে সেভ হয় না কিন্তু কোডে ব্যবহারের সময় পাওয়া যায়।,Combining firstName and lastName into a fullName.
14,"What is Validation in Mongoose? Rules defined in the Schema to ensure data quality (e.g., required, min).",ভ্যালিডেশন কি? ডাটা সেভ করার আগে সেটি সঠিক কি না তা যাচাই করার নিয়ম।,"email: { type: String, required: true }."
15,Difference between .find() and .findOne()? find returns an array of all matches; findOne returns only the first object.,find বনাম findOne? find সব ম্যাচিং ডাটা (অ্যারে) দেয়; findOne শুধু প্রথমটি দেয়।,Use findOne for login or specific profile viewing.
 * 
 * 
 * 
 */
