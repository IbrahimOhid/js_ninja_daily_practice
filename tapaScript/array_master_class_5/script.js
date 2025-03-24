// filter 💛💛💛

const arr = ['I', 'Love', 'Programming'];

const arrLen = arr.filter((el)=>{
   return el.length > 3 
})
console.log(arrLen);

const filterString = arr.filter((text)=>{
   return text.includes('mm') 
})
console.log(filterString);

// filter 💛💛💛

const findArr = arr.find((elm)=>{
   return elm.length > 3;
})
console.log(findArr);

// The Customer Array
let customers = [
   {
      'id': 1,
      'f_name': 'Abby',
      'l_name': 'Thomas',
      'gender': 'M',
      'married': true,
      'age': 32,
      'expense': 500,
      'purchased': ['Shampoo', 'Toys', 'Book']
   },
   {
      'id': 2,
      'f_name': 'Jerry',
      'l_name': 'Tom',
      'gender': 'M',
      'married': true,
      'age': 64,
      'expense': 100,
      'purchased': ['Stick', 'Blade']
   },
   {
      'id': 3,
      'f_name': 'Dianna',
      'l_name': 'Cherry',
      'gender': 'F',
      'married': true,
      'age': 22,
      'expense': 1500,
      'purchased': ['Lipstik', 'Nail Polish', 'Bag', 'Book']
   },
   {
      'id': 4,
      'f_name': 'Dev',
      'l_name': 'Currian',
      'gender': 'M',
      'married': true,
      'age': 82,
      'expense': 90,
      'purchased': ['Book']
   },
   {
      'id': 5,
      'f_name': 'Maria',
      'l_name': 'Gomes',
      'gender': 'F',
      'married': false,
      'age': 7,
      'expense': 300,
      'purchased': ['Toys']
   }
];



// filtering senior & non senior customer 💛💛💛

const seniorCustomer = customers.filter((customer) => {
   return customer.age >= 60;
})
console.log(seniorCustomer);

const nonSeniorCustomer = customers.filter((customer) => {
   return customer.age < 60;
})
console.log(nonSeniorCustomer);

// filtering product buying upto 2 item 💛💛💛

const uptoTwoItem = customers.filter((customer) => {
   return customer.purchased.length >= 2;
})
console.log(uptoTwoItem);

// filtering expense upto 100 taka 💛💛💛

const uptoExpense = customers.filter((customer)=>{
   return customer.expense >= 200;
})
console.log(uptoExpense);