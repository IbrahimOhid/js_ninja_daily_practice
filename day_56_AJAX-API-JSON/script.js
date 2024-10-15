// javascript object
// const data = {
//     name: 'ibrahim',
//     age: 27,
//     profession: 'web Engineer',
//     toBeDesigner: null
// }

// JSON Object
// new Date, undefined, function are not support as valid json value
// const userData = {
//     'name': 'ibrahim',
//     'age': 27,
//     'profession': 'web Engineer',
//     'toBeDesigner': null;
// }

// json stringify & json parse
// const data = {
//   name: "ibrahim",
//   age: 27,
//   profession: "web Engineer",
//   toBeDesigner: null,
// };
// const dataResult = JSON.stringify(data);
// console.log(dataResult);
// console.log(typeof dataResult);

// const dataResult2 = JSON.parse(dataResult);
// console.log(dataResult2);
// console.log(typeof dataResult2);
// console.log(dataResult2.name);
// console.log(dataResult2.profession);

// fetch
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))

// fetch use await

// async function findUser() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// findUser()

// async function receiveUser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// receiveUser();

// getting all posts
async function getPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

// adding single post
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  const data = await res.json();
  return data;
}
getData();

// adding Post
async function addPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      name: "Mohammad",
      age: 27,
      profession: "Web Engineer",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await res.json();
  return data;
}
addPost();

// // updating post
async function updatePost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      title: "Ibrahim OHid",
      profession: "Front End Developer",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await res.json();
  return data;
}
updatePost();

// // delete post
async function deletePost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });
  const data = await res.json();
  return data;
}
deletePost();

async function run() {
  try{
    const posts = await getPost();
    const singlePost = await getData();
    const addedPost = await addPost();
    const updatedPost = await updatePost();
    const deletedPost = await deletePost();
    console.log(deletedPost);
  }
  catch(err){
    console.log(err);
  }
}
run();
