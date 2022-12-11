import './App.css';
import image from './Photo1.png';
import image1 from './321.png';
import { GroceryList } from './Script';


function App() {
return(
<div className="App">
<div className="contaner">
<img src={image} width="200px" alt="photos"/>
</div>
<div className="contaner">
<h1>Grocery List</h1>
</div>
<GroceryList />
<div className="contaner">
<img src={image1} width="200px" alt="photos"/>
</div>
</div>
);
}
export default App;

