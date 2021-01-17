/*
  Metadata for the song 'Bohemian Rhapsody' (Queen, 1975).
  Used data types: string, number, boolean, null, undefined, array, object, function
*/

const song = 'Bohemian Rhapsody'; // string
const year = 1975; // number
const author = 'Freddie Mercury' // string
const bandMembers = ['Freddie Mercury', 'Brian May', 'Roger Taylor', 'John Deacon'];

// function
const printSongData = () => {
  console.log(`Song: ${name}\n Year released: ${year}\n; author(s): ${author}.`);
};

// constructor
function BandForSong(name, isActive=true, members=[], song) {
  this.name = name;
  this.isActive = isActive;
  this.members = members;
  this.song = song;
  //member function
  this.printBandData = () => {
    console.log(`Band: ${this.name}\nis Active:${this.isActive}\nMember(s): ${this.members}\nSong: ${this.song} `);
  };
};

// creating instance of object
const band = new BandForSong('Queen', false, bandMembers, song)

const seconds=(min,sec) =>{return 60*min + sec;};

const duration = seconds(5,56); // calls a function
var awards; // undefined


// logging
console.log(song);
console.log(year);
console.log(author);
console.log(bandMembers);
console.log(typeof bandMembers); // array
console.log(bandMembers[0] == 'Freddie Mercury');
console.log(printSongData); //function
console.log(band.printBandData());
console.log(awards);
