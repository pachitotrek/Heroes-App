import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const MarvelScreen = () => {
    return (
        <div>
            <h1 className="text-center">Marvel </h1>
            <hr></hr>
            <HeroesList publisher={'Marvel Comics'} />
        </div>
    )
}
