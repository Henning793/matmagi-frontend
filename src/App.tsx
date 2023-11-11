
import { useEffect, useState } from 'react'
import './App.css'
import { apiUrl } from './api/urlConfig'

interface Recipe {
    id: number
    name: string
}

export const App = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([])
    
    useEffect(() => {
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
        getRecipes()
    }, [])

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
