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
// var App = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     <GroceryList items={['Cucumber', 'Kale', 'Tomatoes']} />
//   </div>
// );

// var GroceryList = (props) => (
//   <ul>
//     {props.items.map(item =>
//        <li>{item}</li>
//     )}
//   </ul>
// );

// ReactDOM.render(<App />, document.getElementById("app"));



// // // // 4 User events
// var GroceryList = props => {
//   var onListItemClick = event => console.log(`I got clicked`);
  
//   return (
//     <ul>
//       {props.items.map(item =>
//         <li onClick={onListItemClick}>{item}</li>
//       )}
//     </ul>
//   );
// }

// var App = () => (
//   <div>
//   <h2>My Grocery List</h2>
//   <GroceryList items={['Cucumber', 'Kale', 'Tomatoes']} />
// </div>
// );

// ReactDOM.render(<App />, document.getElementById("app"));


// // // // 5 State Handling
// class GroceryListItem extends React.component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return(
//       <li>{this.props.item}</li>
//     );

//   }

// }

// var GroceryList = props => {
//   var onListItemClick = event => console.log(`I got clicked`);

//     <ul>
//       {props.items.map(item =>
//         <li onClick={onListItemClick}>{item}</li>
//       )}
//     </ul>

// }

// var App = () => (
  //   <div>
//   <h2>My Grocery List</h2>
//   <GroceryList items={['Cucumber', 'Kale', 'Tomatoes']} />
// </div>
// );

// ReactDOM.render(<App />, document.getElementById("app"));

// // // 6 State
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    
    // `state is just an object literal
    this.state = {
      done: false,
      hovering: false
    }
  }
  
  onListItemMouseEnter() {
    this.setState({
      hovering: true
    });
  }

  onListItemMouseLeave() {
    this.setState({
      hovering: false
    })
  }
  
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  
  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontweight: this.state.hovering ? 'bold' : 'normal'
    };
    
    return (
      <h1>Grocery List</h1>
      <li 
        style={style}
        onClick={this.onListItemClick.bind(this)}
        onMouseLeave={this.onListItemMouseLeave.bind(this)}
        onMouseEnter={this.onListItemMouseEnter.bind(this)}
        >
        {this.props.item}
      </li>
    )
  }
}

// var onListItemClick = event => console.log(`I got clicked`);
var GroceryList = props => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);
ReactDOM.render(<GroceryList items = { ['kale', 'cucumbers']}/>, document.getElementById("app"));