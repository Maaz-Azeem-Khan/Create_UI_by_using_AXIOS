const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

const getTodos = () => {
  axios
    .get(BASE_URL)
    .then((response) => {
        if(response.status === 200){
          // console.log(response.data);  
          const todosDiv = document.getElementById("todosDiv");
          todosDiv.innerHTML = response.data.map((todo)=>{
            return `<div id="main">
                    <p>UserId: ${todo.userId}</p>
                    <p>title: ${todo.title}</p>
                    <p>completed: ${todo.completed}</p>
                    </div>`
          }).join("");
        }
    else{
        console.log("Error", response.status);
        alert("Error fateching data!")
    }
    })
    .catch((error) => console.log(error));
};
getTodos();

const createTodoBtn = document.getElementById("createTodo");
const formDiv = document.getElementById("formDiv");
formDiv.style.display = "none";

let isFormVisible = false;

createTodoBtn.addEventListener("click", () => {
  if (isFormVisible) {
    formDiv.style.display = "none";
  } else {
    formDiv.style.display = "block";
  }

  isFormVisible = !isFormVisible;
});

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  const userId = document.getElementById("userId").value;
  const title = document.getElementById("title").value;

  const data = {
    userId: userId,
    title: title,
    completed: false
  }

  createTodo(data)
})

const createTodo = (data) => {
    // const data = {
    //     userId: 420,
    //     title: "New Todo",
    //     completed: false,
    // }

    axios
      .post(BASE_URL, data)
      .then((response) => {
          if(response.status === 201){
            console.log(response.data);  
          }
      else{
          console.log("Error", response.status);
      }
      })
      .catch((error) => console.log(error));
  };
