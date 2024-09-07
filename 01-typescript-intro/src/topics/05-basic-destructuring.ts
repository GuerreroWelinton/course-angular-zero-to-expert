interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

//* En la desestructuración también podemos renombrar las propiedades del objeto
// const song = 'New Song';
// const { song:anotherSong, songDuration:duration,  } = audioPlayer;
// const { author } = audioPlayer.details;
// const { song:anotherSong, songDuration:duration, details: { author }   } = audioPlayer;
// const { song: anotherSong, songDuration:duration, details } = audioPlayer;
// const { author } = details
// console.log('Song:', anotherSong);
// console.log('Duration:', duration);
// console.log('Author:', author);

//* Desestructuración de arreglos
// const [ , , trunk]: string[] = ['Goku', 'Vegeta', 'Trunk'];
const [ , , trunk = 'Not Found']: string[] = ['Goku', 'Vegeta', ];

// const trunk = dbz[2] || 'No hay personaje';
console.log('Personaje 3:', trunk);


export {}