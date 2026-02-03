const input = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('#taskList');

// ১. নতুন টাস্ক যোগ করার ইভেন্ট
addBtn.addEventListener('click', () => {
    const taskValue = input.value.trim();

    if (taskValue === "") {
        alert("আগে কিছু লিখুন!");
        return;
    }

    // নতুন li তৈরি করা
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskValue}</span>
        <button class="delete-btn">মুছে ফেলুন</button>
    `;

    taskList.appendChild(li);
    input.value = ""; // ইনপুট খালি করা
});

// ২. Event Delegation: লিস্টের ভেতর যেকোনো ডিলিট বাটনে ক্লিক হ্যান্ডেল করা
// আমরা প্রতিটি বাটনে লিসেনার না বসিয়ে মেইন 'ul' এ লিসেনার বসাবো
taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const itemToRemove = event.target.parentElement; // li-টি খুঁজে বের করা
        taskList.removeChild(itemToRemove); // রিমুভ করা
    }
});