import video from './food.mp4';
import './App.css';
import { useEffect, useState } from 'react';
import ShowComponent from './ShowComponent';


function App() {


  const [mySearch, setMySearch] = useState('');
  const [myRecipe, setMyRecipe] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('egg');

useEffect(() => {
getRecipe()
}, [wordSubmitted])

const getRecipe = async() => {
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=cfeb9f82&app_key=26d085a79167c00b8a678e07217ab135`);
  const data = await response.json();
  console.log(data.hits);
  setMyRecipe(data.hits);
}

const MyRecipesSearch = (e) => {
  console.log(e.target.value)
  setMySearch(e.target.value);
}

const finalSearch = (e) => {
  e.preventDefault();
  setWordSubmitted(mySearch);
}

  return (
    <div className="App">
  <div className='container'>
    <video autoPlay muted loop>
    <source src={video} type="video/mp4" />
    </video>
    <h1>Find a recipe:</h1>
  </div>

<div className='container'>
  <form onSubmit ={finalSearch}>
    <input className='search' placeholder='search...' onChange={MyRecipesSearch} value={mySearch} />
  </form>
  <div className='container'>
    <button><img src='https://img.icons8.com/cotton/344/search--v1.png' className='icon' /></button>
  </div>
</div>

<div className='containerComponent'>
{myRecipe.map((element,id) => (
  <ShowComponent  key={id} 
  label={element.recipe.label}
  image={element.recipe.image}
  ingredient={element.recipe.ingredientLines}
  calories={element.recipe.calories}
  url={element.recipe.url}
  />
))}
 </div>
    </div>
  );
}

export default App;
