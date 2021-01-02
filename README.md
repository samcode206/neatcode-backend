# neatcodeapi

<h3>general End Points</h3>

<a>https://neatcode-backend.herokuapp.com/questions/</a>
gives access to a list of all questions 

to query based on category example 
<a>https://neatcode-backend.herokuapp.com/questions/?category=Array</a>

to query based on difficulty example
<a>https://neatcode-backend.herokuapp.com/questions/?difficulty=Easy</a>

to query based on both 
https://neatcode-backend.herokuapp.com/questions/?category=Array&difficulty=Easy

available queries
<ul>
  <li>
    Array
   </li>
    <li>
      Bits
   </li>
    <li>
      Dynamic%20Programming
   </li>
  <li>
    Graph
  </li>
    <li>
      Linked%20List
  </li>
  <li>
    matrix
  </li>
    <li>
      String
  </li>
    <li>
      Tree
  </li>
    <li>
      Heap
  </li>
    <li>
      Interval
  </li>
    <li>
      Easy
  </li>
    <li>
      Medium
  </li>
    <li>
      Hard
  </li>
</ul>

<h3>Accessing restricted endpoints</h3>

<p>to access restricted endpoints you will need to have a token, and the username provided </p>

<a>https://neatcode-backend.herokuapp.com/entry/register</a>

<p>provide in the body the username, password and email</p>

<a>https://neatcode-backend.herokuapp.com/entry/login</a>

<p>provide in the body the username, and password 
this will return an object that has the username and the token those will need to be saved to access protected endpoints</p>


```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDk1NDMwOTl9.IfasNGRKM,VO43NMq5H0",
    "username": "example"
}
```

<h3>adding/removing/getting a todo question to the user</h3>

<p>to add a todo you will need to provide the id of the question in the url like the below example:</p>

<a>https://neatcode-backend.herokuapp.com/user/todos/5febee33c2b0b24630013b18</a>
<p>in the headers sections provide the token and the username for the current user to access their acount</p>
<p>the return value will be an array containing the todo questions for that current user</p>


<p>to remove a question you will follow the same format making sure to provide in the headers the authorization token and the username,
this will return an array containing the todos with the one deleted </p>
 <a>https://neatcode-backend.herokuapp.com/user/todos/5febee33c2b0b24630013b18</a>

```
{
  username : "example",
  Authorization : "token goes here"
  
}
```
<p>to make a get request to get the todo just provide the authorization and username and it to this endpoint</p>
<a>https://neatcode-backend.herokuapp.com/user/todos</a>



