fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    
     const completed = json.reduce((i, todo) => {
         todo.completed
           ? i.push({ userId : todo.userId, title : todo.title })
        : i;
     return i;
     },[]);
     console.log(completed);
    })
  .catch(function(err) { 
    console.log(err);
  });
