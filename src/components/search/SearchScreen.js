import React, { useMemo } from 'react';
import { useForm } from '../../Hooks/useForm';
import { HeroeCard } from '../heroes/HeroeCard';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { getHeroByName } from '../../selectors/getHeroByName';



export const SearchScreen = ({ history }) => {


    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [{ query }, handleInputChange] = useForm({
        query: q
    });

    const heroesFiltered = useMemo(() => getHeroByName(q), [q]);


    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${query}`);
    }



    return (
        <div className="row">
            <div className="col-6">
                <h4>Search Hero</h4>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="query"
                        value={query}
                        onChange={handleInputChange}
                        className="form-control"
                    />

                    <button className="btn btn-outline-primary btn-block mt-2">
                        Search
                    </button>
                </form>
            </div>
            <div className="col-6">
                <h4>Results</h4>
                <hr></hr>
                {
                    (q === '') &&
                    <div className="alert alert-primary" role="alert">
                        Search a Hero
                  </div>
                }
                 {
                    (q !== '' && heroesFiltered.length===0 ) &&
                    <div className="alert alert-danger" role="alert">
                        There is no a Hero with {q}
                  </div>
                }
                {
                    heroesFiltered.map((hero) => {
                        return <HeroeCard
                            key={hero.id}
                            {...hero}
                        />
                    })
                }
            </div>
        </div>
    )
}
