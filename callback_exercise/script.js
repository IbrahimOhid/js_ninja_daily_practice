const users = [
  {
    id: 1,
    name: "Adnan",
    profession: "Web Developer",
  },
  {
    id: 2,
    name: "samim",
    profession: "Software Developer",
  },
  {
    id: 3,
    name: "Anis",
    profession: "Designer",
  },
];

const coursesList = [
  {
    id: 1,
    courses: ["javascript", "python", "php"],
    userId: 1,
  },
  {
    id: 2,
    courses: ["Aws", "python", "javascript", "DSA"],
    userId: 2,
  },
  {
    id: 3,
    courses: ["photoShop", "inDesign", "illustrator"],
    userId: 3,
  },
];

const coursesPrice = {
  javascript: 5000,
  react: 4000,
  node: 5000,
  python: 2500,
  php: 2500,
  illustrator: 2000,
  photoShop: 2500,
  inDesign: 2000,
  Aws: 5000,
  DSA: 5000,
};

// Getting user: 2s
// Course Enrolled: 2s
// Price of the Course: 2s

// async await method 💛💛💛

function getUser(id){
  const user = users.find((user)=> user.id === id);
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve(user)
    }, 2000);
  })
}

function getCourseList(userId){
  const course = coursesList.find((course)=> course.userId === userId );
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve(course);
    }, 2000);
  })
}


function price(courses){
  let totalPrice = 0;
  courses.forEach((total)=> {
    totalPrice += coursesPrice[total];
  })
  return new Promise((resolve, reject)=>{
    resolve(totalPrice);
  })
}


async function result(){
  const users = await getUser(1);
  console.log(users);
  const course = await getCourseList(users.id);
  console.log(course);
  const courserPrice = await price(course.courses);
  console.log(courserPrice);
}
result();