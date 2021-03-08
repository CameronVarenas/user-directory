import React, {Component} from 'react';


class Flashcard extends Component {
    constructor() {
        super();
    }

    render() {
        const dataMapped = this.props.flashCards.map((card) => {
            if(card.id === this.props.cardNum && card.employer !== null && card.title !== null) {
                return (
                    <div className='flash-card'>
                        <h1>{card.name.first} {card.name.last}</h1>
                        <h3>From: {card.city}, {card.country}</h3>
                        <h3>Job Title: {card.title}</h3>
                        <h3>Employer: {card.employer}</h3>
                        <h3>Favorite Movies:</h3>
                        <ul>
                            <h3>    {card.favoriteMovies[0]}</h3>
                            <h3>    {card.favoriteMovies[1]}</h3>
                            <h3>    {card.favoriteMovies[2]}</h3>
                        </ul>
                        <h1>{card.id}/25</h1>
                    </div>
                );
            } else if (card.id === this.props.cardNum){
                return (
                    <div className='flash-card'>
                        <h1>{card.name.first} {card.name.last}</h1>
                        <h3>From: {card.city}, {card.country}</h3>
                        <h3>Favorite Movies:</h3>
                        <ul>
                            <h3>    {card.favoriteMovies[0]}</h3>
                            <h3>    {card.favoriteMovies[1]}</h3>
                            <h3>    {card.favoriteMovies[2]}</h3>
                        </ul>
                        <h1>{card.id}/25</h1>
                    </div>
                );
            }
        });

        return (
            <section>
                {dataMapped}
            </section>
        )
    }
}

export default Flashcard