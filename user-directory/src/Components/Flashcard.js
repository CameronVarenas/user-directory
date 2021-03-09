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
                        <h1 className='counter'>{card.id}/25</h1>
                        <h1 className='text' className='name'>{card.name.first} {card.name.last}</h1>
                        <h3 className='from'>From: {card.city}, {card.country}</h3>
                        <h3 className='text'>Job Title: {card.title}</h3>
                        <h3 className='text'>Employer: {card.employer}</h3>
                        <h3 className='fav-movies'>Favorite Movies:</h3>
                        <ol>
                            <li className='movies'>{card.favoriteMovies[0]}</li>
                            <li className='movies'>{card.favoriteMovies[1]}</li>
                            <li className='movies'>{card.favoriteMovies[2]}</li>
                        </ol>
                    </div>
                );
            } else if (card.id === this.props.cardNum){
                return (
                    <div className='flash-card'>
                        <h1 className='counter'>{card.id}/25</h1>
                        <h1 className='name'>{card.name.first} {card.name.last}</h1>
                        <h3 className='from'>From: {card.city}, {card.country}</h3>
                        <h3 className='text'>Job Title: N/A</h3>
                        <h3 className='text'>Employer: N/A</h3>
                        <h3 className='fav-movies'>Favorite Movies:</h3>
                        <ol>
                            <li className='movies'>{card.favoriteMovies[0]}</li>
                            <li className='movies'>{card.favoriteMovies[1]}</li>
                            <li className='movies'>{card.favoriteMovies[2]}</li>
                        </ol>
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