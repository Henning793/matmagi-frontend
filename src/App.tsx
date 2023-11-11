
import { useState } from 'react'
import './App.css'

export const App = () => {
    const [recipes, setRecipes] = useState([{id: 1, name: "korean fired chicken"}, {id: 2, name: "hot temper"}])
    return (
        <>
            {recipes.map(recipe => {
                return (
                    <div key={recipe.id}>
                        {recipe.name}
                    </div>                    
                )
            })}
        </>
    )
}
