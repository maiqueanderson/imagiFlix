import cover1 from '../assets/movie1.jpg';
import cover2 from '../assets/movie2.jpg';
import cover3 from '../assets/movie3.jpg';

import { Movie } from '../interfaces/Movie';
// criação de uma tipagem no type script


// aqui estou usando a tipagem que defini acima
const movies: Movie[] = [
    {
        title: 'Avengers',
        cover: cover1
    },

    {
        title: 'Missão Impossivel',
        cover: cover2
    },

    {
        title: 'Mega Tubarão',
        cover: cover3
    },

    {
        title: 'Avengers',
        cover: cover1
    },

    {
        title: 'Missão Impossivel',
        cover: cover2
    },

    {
        title: 'Mega Tubarão',
        cover: cover3
    },

    {
        title: 'Avengers',
        cover: cover1
    },

    {
        title: 'Missão Impossivel',
        cover: cover2
    },

    {
        title: 'Mega Tubarão',
        cover: cover3
    },
    {
        title: 'Avengers',
        cover: cover1
    },

    {
        title: 'Missão Impossivel',
        cover: cover2
    },

    {
        title: 'Mega Tubarão',
        cover: cover3
    },
];

export default movies;