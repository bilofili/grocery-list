import { Component } from "react";
import check from './cart.png';
export class GroceryList extends Component {
state = {
userInput: " ",
groceryList: []
}
onChange(e) {
this.setState({userInput: e})
}
addItem(input) {
if(this.state.userInput === '') {
alert("Please enter anitem");
}
else{
let listArray = this.state.groceryList;
listArray.push(input);
this.setState({groceryList: listArray, userInput: ''});
console.log(listArray);
}
}
deleteIte() {
let deletArray = this.state.groceryList;
deletArray = [];
this.setState({groceryList: deletArray});
}
crossedWord(event) {
const lii = event.target;
lii.classList.toggle('crossed');
}
enterForm(e) {
e.preventDefault();
}
render() {
return(
<div>
<form onSubmit={this.enterForm}>
<div className="contaner">
<input type="text"
placeholder="What do want to buy today?"
onChange={(e) => { this.onChange(e.target.value) }}
value={this.state.userInput} />
</div>
<div className="contaner">
<button className="btn-add" onClick={() => this.addItem(this.state.userInput)}>Add</button>
</div>
<div>
<ul>
{this.state.groceryList.map((item, index) => (
<li onClick={this.crossedWord} key={index}>
<img src={check} className="logo" alt="checkpng" width="40px"/>
{item}</li>
))}
</ul>
<div className="contaner">
<button className="btn-delete" onClick={ () => this.deleteIte()}>Delete</button>
</div>
</div>
</form>
</div>
);
}
}
