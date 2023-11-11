
import { useEffect, useState } from 'react'
import './App.css'
import { apiUrl } from './api/urlConfig'

interface Recipe {
    id: number
    name: string
}

export const App = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([])

    const getRecipes = async () => {
        const url = `${apiUrl}/recipe`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const jsonData = await response.json()
        setRecipes(jsonData)
    }
    
    useEffect(() => {
        getRecipes()
    }, [])

    return (
        <>
        <h1>Oppskrifter</h1>
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
