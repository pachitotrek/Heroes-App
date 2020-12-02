import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroeCard } from './HeroeCard';

export const HeroesList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);    

    return (
        <div>
            <div className="card-columns  animate__animated animate__fadeIn">
                {
                    heroes.map(heroe => {

                       return <HeroeCard
                            key={heroe.id}
                            {...heroe}
                        />

                    })
                }

            </div>

        </div>
    )
}
