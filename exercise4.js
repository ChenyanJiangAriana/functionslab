fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const totalCompleted = json.reduce(
         (i,todo) => todo.completed ? i+1 : i
     ,0
     )
     console.log(totalCompleted)
  })
  .catch(function(err){ 
    console.log(err);
  });
