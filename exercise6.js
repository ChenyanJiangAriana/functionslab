fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const totalCompleted = json.reduce((i, todo) => {
         if(todo.completed){
           i[todo.userId] === undefined
            ? (i[todo.userId] = 1)
            : (i[todo.userId] += 1);  
      }
     return i;
     },{});
     console.log(totalCompleted)
  })
  .catch(function(err) { 
    console.log(err);
  });