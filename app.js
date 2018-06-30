// // 1) create simple component
// var App = () => <div>Bonjour</div>;
// ReactDOM.render(<App />, document.getElementById("app"));



// // // 2a) create single component nodes
// var Cucumber = () => <li>Cucumber</li>;
// var Kale = () => <li>Kale</li>;

// // // 2b) create tree for component additions
// var App = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     <Cucumber />
//     <Kale />
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById("app"));



// 3 creating props (passing properties into components)
// var GroceryList = (props) => (
//   <ul>
//     <li>{props.items[0]}</li>
//     <li>{props.items[1]}</li>
//     <li>{props.items[2]}</li>
//   </ul>
// );

// var App = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     <GroceryList items={['Cucumber', 'Kale', 'Tomato']} />
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById("app"));





// // // 3b Dynamically generating props (passing properties into components)
var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['Cucumber', 'Kale', 'Tomatoes']} />
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
       <li>{item}</li>
    )}
  </ul>
);

ReactDOM.render(<App />, document.getElementById("app"));



