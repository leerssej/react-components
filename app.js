// TODO

// level 1 - just a sample
var App = () => (
  <div>Some cliche salutation</div>
);

ReactDOM.render(<App />, document.getElementById("app"));

// level 2 - add complexity
var GroceryList = () => (
  <ul>
    <li>Tea</li>
    <li>Milk</li>
  </ul>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));

// level 3 - nest components
// base level - items
var Kale = () => (
  <li>Kale</li>
)

var Cucumber = () => (
  <li>Cucumber</li>
)

// 2nd level - unordered list
var ToDoList = () => (
  <ul>
    <Cucumber />
    <Kale />
  </ul>
)

// 3rd level - App
var App = () => (
  <div>
    <h2>My Todo List</h2>
    <ToDoList />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));


// var GroceryList = () => (
//   <ul>Grocery List
//     <li></li>
//   </ul>
// );