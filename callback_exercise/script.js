const users = [
  {
    id: 1,
    name: 'Adnan',
    profession: 'Web Developer'
  },
  {
    id: 2,
    name: 'samim',
    profession: 'Software Developer'
  },
  {
    id: 3,
    name: 'Anis',
    profession: 'Designer'
  }
]


const coursesList = [
  {
    id: 1,
    courses: ['javascript', 'python', 'php'],
    userId: 1
  },
  {
    id: 2,
    courses: ['Aws', 'python', 'javascript', 'DSA'],
    userId: 2
  },
  {
    id: 3,
    courses: ['photoShop', 'inDesign', 'illustrator'],
    userId: 3
  }
]


const coursesPrice = {
  javascript: 5000,
  react: 4000,
  node: 5000,
  python: 2500,
  php: 2500,
  illustrator: 2000,
  photoShop: 2500,
  inDesign: 2000,
  aws: 5000,
  DSA: 5000
}



// Getting user: 2s
// Course Enrolled: 2s
// Price of the Course: 2s


// callback method 💛💛💛

function getUser(id, fn){
  const user = users.find((user)=> user.id === id);
  setTimeout(() => {
    fn(user);
  }, 2000);
}

function getCourseList(userId, courses){
  const userCourses = coursesList.find((course)=> course.userId === userId)
  setTimeout(() => {
    courses(userCourses);
  }, 2000);
}

function totalCoursePrice(courses, fn){
  let total = 0;
  courses.forEach((course)=>{
    total += coursesPrice[course]
  })
  setTimeout(() => {
    fn(total);
  }, 2000);
}

getUser(3, (user)=>{
  console.log(user);
  getCourseList(user.id, (userCourse)=>{
    console.log(userCourse);
    totalCoursePrice(userCourse.courses, (price)=>{
      console.log(price);
    })
  })
})

