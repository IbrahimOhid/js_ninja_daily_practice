const myName = /mohammad/;
const text1 = 'I am mohammad';
const newText = text1.replace(myName, 'ahmed');
console.log(newText);
console.log(text1.match(myName));
console.log(newText.match(myName));

//=> /.../i 
// i — যেটা আমরা এখানে উদাহরণে ব্যবহার করেছি। এই মডিফায়ার ব্যবহার করা হলে রেগুলার এক্সপ্রেশন কেস-ইনসেন্সিটিভ হয়ে কাজ করবে। মানে লেখা বড় হাতের ছোটো হাতের যাই হউক, লেখা মিললেই এটা ম্যাচ করে ফেলবে
const text = 'i am Mohammad';
console.log(text.match(/mohammad/i));
console.log(text.match(/mohammad/));

//=> /.../g
// g — এটা পুরো স্ট্রিং এর গ্লোবাললি সার্চ করার জন্যে ব্যবহার করা হয়। এটার মানে কি? এটার মানে হচ্ছে আপনি যদি নিচের স্ট্রিং থেকে is খুঁজেন কোনো মডিফায়ার ব্যবহার না করে তাহলে এটা শুধুমাত্র প্রথম is টাই ম্যাচ করবেঃ
const para = 'this is my pen is';
console.log(para.match(/is/g));
console.log(para.match(/is/));

// Brackets 💛💛 : ব্র্যাকেটস এ সাধারনত ব্র্যাকেটসএর ভিতরে কিছু ক্যারেক্টার থাকে, আর এগুলো বিভিন্ন রেঞ্জের ক্যারেক্টার ম্যাচ করতে ব্যবহার করা হ
//=> /[...]/ [abc] — এটা দ্বারা বুঝানো হয় যে আমরা a অথবা b অথবা c এর মধ্যে যেকোনো একটা ক্যারেক্টার ম্যাচ করাতে চাচ্ছি।
 const bText = 'A Normal Text'
 console.log(bText.match(/[aoxt]/));
 console.log(bText.match(/[aoxt]/g));
 console.log(bText.match(/[aoxt]/gi));

 //=> /[^...]/ [^abc] — এটা ঠিক উল্টো, এর দ্বারা বুঝানো হয় যে আমরা a অথবা b অথবা c ছাড়া যেকোনো একটা ক্যারেক্টার ম্যাচ করাতে চাচ্ছিঃ
 const cText = 'A Normal Text'
 console.log(cText.match(/[^aoxt]/));
 console.log(cText.match(/[^aoxt]/g));
console.log(cText.match(/[^aoxt]/gi));

//=> /[a-z]/ [0–9] বা [a-z] — [0–9]মানে হচ্ছে 0 থেকে 9 এর মধ্যে কোনো নাম্বার থাকলেই ম্যাচ করবে, ঠিক বাকীগুলোই এরকম [a-z] মানে হচ্ছে a থেকে z এরমধ্যে কোনো ক্যারেক্টার থাকলেই সেটা ম্যাচ করবেঃ
const dText = 'A Normal Text';
console.log(dText.match(/[a-z]/));
console.log(dText.match(/[a-z]/g));
console.log(dText.match(/[a-z]/gi));

//=> /[0-9]/  
const bText2 = '0123456789';
console.log(bText2.match(/[0-9]/));
console.log(bText2.match(/[0-9]/g));

//=> /[^a-z]/=[^0–9] বা [^a-z] — এটাও হয়তো ধরতে পেরেছেন, ঠিক আগেরটার উল্টো। এই রেঞ্জের ক্যারেক্টারগুলো ছাড়া বাকি সব ম্যাচ করবে।
const dText2 = 'A Normal Text 023';
console.log(dText2.match(/[^a-z]/g))

//=> /[^0-9]/
const cText2 = '0123456789 abcdf0';
console.log(cText2.match(/[^0-9]/g));
//=> /(ab|bc)/ (ab|bc) — সোজা বাংলায় ab অথবা bc ম্যাচ করবেঃ
const bText3 = 'ab on bc, no meaning';
console.log(bText3.match(/(ab|bc)/));
console.log(bText3.match(/(ab|bc)/g));

// Metacharacter 💛💛 : মেটাক্যারেক্টার হচ্ছে স্পেশাল কিছু ক্যারেক্টার, যেগুলোর স্পেশাল মিনিং আছে। একই টাইপের কোনো ক্যারেক্টার ম্যাচ করানোর জন্যেই সাধারণত এই মেটাক্যারেক্টারগুলো ব্যবহার করা হয়
//=> /./ .— নতুন লাইন ছাড়া সব ধরনের ক্যারেক্টার একটা একটা করে সিলেক্ট করার জন্যেঃ
const mText = 'ABCDEFGHIJK abcdefghijk\n\t01234567890!@#$%^&()';
console.log(mText.match(/./g));

//=> /\w. — ওয়ার্ড ক্যারেক্টার a-z, A-Z এবং 0–9 সহ _(আন্ডারস্কোর) ম্যাচ করতে ব্যবহার করা হয়ঃ
const nText = 'ABCDE abcde _ 0123e @ ! ^';
console.log(nText.match(/\w/g));
 
// \W — ওয়ার্ড ক্যারেক্টারগুলো ছাড়া বাকী সব ম্যাচ করতে ব্যবহার করা হয়ঃ
const aText = 'ABCDE abcde _ 0123e @ ! ^';
console.log(aText.match(/\W/g));

// \d — এটা ডিজিট ম্যাচ করার জন্যে ইউজ করা হয়ঃ
const eText = 'ABCDEFGHIJK abcdefghijk\n\t01234567890!@#$%^&()';
console.log(eText.match(/\d/g))

// \D — এটা ডিজিট ছাড়া বাকি সব ম্যাচ করানোর জন্যেঃ
const fText = 'ABCDEFGHIJK abcdefghijk\n\t01234567890!@#$%^&()';
console.log(fText.match(/\D/g))

// \s — যতরকমের White space আছে যেমন স্পেস, ট্যাব বা নিউলাইন ম্যাচ করার জন্যে ইউজ করা হয়ঃ
const sText = 'I am Mohammad  Ibrahim       ohid';
console.log(sText.match(/\s/g))

// \b — একটা ওয়ার্ডের শুরুর বা শেষের কোনো ক্যারেক্টার ম্যাচ করানো জন্যে/ যেমন আমাদের উপরের টেক্সট টাতে দ্বিতীয় ওয়ার্ড i দিয়ে শুরু হয়েছেঃ
const bText1 = 'ibrahim';
console.log(bText1.match(/\bi/));
console.log(bText1.match(/m\b/));

// \B — আগেরটার উল্টো, কোনো ওয়ার্ডের শুরুতে বা শেষে নাই এমনকিছু ম্যাচ করানোর জন্যে ব্যবহার করা হয়।
//   \0 — নাল ক্যারেক্টার ম্যাচ করানোর জন্যে ব্যবহৃত হয়।
//  \n — নিউ লাইন ক্যারেক্টার ম্যাচ করানোর জন্যে ব্যবহৃত হয়

//  💛💚💛 মনে রাখবেন এখানে উদাহরণগুলোতে আমরা g ফ্ল্যাগ ব্যবহার করেছি। এই ফ্ল্যাগ ব্যবহার না করলে শুধুমাত্র প্রথম ম্যাচটাই পাবেন সবসময়। গ্লোবাললি সবগুলো ম্যাচ পাবেন না।

// Quantifiers 💛💛 : কোয়ান্টিফায়ারের কাজ হচ্ছে পরিমাণটা নির্ধারণ করা। আপনি যে অমুক অমুক প্যাটার্নের ক্যারেক্টার চাচ্ছেন, এখন সেটা কেমন পরিমানে চাচ্ছেন সেটাই নির্ধারণ করা যায় কোয়ান্টিফায়ার দিয়ে

// a+ — অন্তত একবার a এমন ক্যারেক্টার ম্যাচ করে। একবার থেকে শুরু করে যতবার থাকবে পুরোটা একসাথে করবেঃ
const qText = 'aaaabcdefghij109823456';
console.log(qText.match(/a+/g));
//a* — সেইম আগেরটার মতোই, তবে না থাকলেও ম্যাচ করবে।
console.log(qText.match(/d7*/g));
// a? — a থাকতেও পারে আবার নাও থাকতে পারে এমন সিচুয়েশনে এটা ব্যবহার করা যায়ঃ
console.log(qText.match(/jk?1/));
// a$ — a স্ট্রিং এর শেষে আছে এমন। আমাদের উদাহরণের টেক্সট এ 6 শেষে আছেঃ
console.log(qText.match(/6$/));
// ^a — a শুরুতে আছে এমন স্ট্রিং ম্যাচ করবে। আমাদের এখানেও শুরুতে a ই আছেঃ
console.log(qText.match(/^a/));

// BD Phone Number Validation 💛💛💛
const phoneNum = "i am mohammad ibrahim +880183-459-8910, 0192-542-5923, 880133-888-8000, 8801380989392, +88016829829829"
const result = phoneNum.match(/\+?(88)?0\d{3}-?\d{3}-?\d{4}\b/gi);
const result2 = phoneNum.match(/\+?(88)?01[3-9]\d-?\d{3}-?\d{4}\b/gi)
console.log(result);
console.log(result2);

// Email Validation 💛💛💛
const email = 'ibrahimohid77@gmail.com, ibrahim@webdeveloper.netbd';
const resultEmail = email.match(/\w{2,20}@\w{2,20}\.\w{2,5}/gi);
console.log(resultEmail);

// website address validation 💛💛💛
const website = 'https://ibrahim.com, www.ibrahim.com, ibrahim.com, http://ibrahim.com';
const resultWeb = website.match(/(https:\/\/|http:\/\/|www\.)?\w{2,10}\.\w{2,5}/gi);
console.log(resultWeb);

// strong Password Validation 💛💛💛
const password = 'abA124@1ab'
const passResult = password.match(/^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*()\-=+\|\[\]{};:?.>]).{8,10}$/g)
console.log(passResult)