import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {

    const { heroeId } = useParams();

    const hero =  useMemo(() => getHeroById(heroeId), [heroeId])

    

    const handleBack = () => {
        if (history.length <= 2) {
            history.push('./');
        } else {
            history.goBack();

        }
    }

    if (!hero) {
        return <Redirect to="./" />
    }

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;



    return (
        <div className="row mt-5">
            <div className="col-4 ">
                <img src={`../assets/heroes/${id}.jpg`}
                    alt={superhero}
                    className="img-thumbnail
                    animate__animated animate__fadeInLeft"  />
            </div>
            <div className="col-8  animate__animated animate__fadeIn">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter Ego :</b>{alter_ego} </li>
                    <li className="list-group-item"> <b> Publisher :</b>{publisher} </li>
                    <li className="list-group-item"> <b> Fisrt Appearance :</b>{first_appearance} </li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>
                <button onClick={handleBack} className="btn btn-outline-info ">
                    Back
                </button>
            </div>




        </div>
    )
}
