import React from 'react'
import style from "./Recipe.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../store/favorites/favorites.slice'


export default function Recipeitem({ recipe }) {
    const fevorites = useSelector(state => state)

    const dispatch = useDispatch()

    console.log(dispatch);

    console.log(fevorites);

    return (
        <div className={style.item}>
            {/* <img src="" alt="" /> */}
            <h2>{recipe.name}</h2>
            <button onClick={actions
                .toggleFavorites(recipe)
            }>submmit</button>
        </div>
    )
}
