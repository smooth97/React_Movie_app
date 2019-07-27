import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const APP_ID = 'cbfa4a51';
  const APP_KEY = '265022bfb73fab5921c24922f22f52fd';
  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, [query]);

  
  const getRecipes = async () => {
    const response = await fetch(exampleReq);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
     <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button">Search</button>
     </form>
     {recipes.map(recipe => (
       <Recipe
       key={recipe.recipe.label}
       title={recipe.recipe.label}
       calories={recipe.recipe.calories}
       image={recipe.recipe.image}/>
     ))}
    </div>
  );
}

export default App;
