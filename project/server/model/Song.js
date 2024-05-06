const getId = require("../utils/getId");

/* 
This class provides an interface for managing Fellow data. 
Instances of this class can't do much really. They just store data.

The class itself provides static methods for CRUD actions on 
the collection of fellows.
*/
class Song {
  static #all = [];

  constructor(title, artist) {
    // Create
    this.id = getId();
    this.title = title;
    this.artist = artist;

    Song.#all.push(this);
  }

  static list() {
    // Get all
    return [...Song.#all];
  }

  static find(id) {
    // Get one
    return Song.#all.find((song) => song.id === id);
  }

  static editTitle(id, newTitle) {
    // Update
    const song = Song.find(id);
    if (!song) return null;
    song.title = newTitle;
    return song;
  }

  static editArtist(id, newArtist) {
    // Update
    const song = Song.find(id);
    if (!song) return null;
    song.artist = newArtist;
    return song;
  }

  static delete(id) {
    // Delete
    const fellowIndex = Song.#all.findIndex((fellow) => fellow.id === id);
    if (fellowIndex < 0) return null;

    Song.#all.splice(fellowIndex, 1);
    return true;
  }

  static deleteAll() {
    // Delete All
    if (!Song.#all.length) return null;

    Song.#all.length = 0;
    return Song.#all;
  }
}

/* 
Take a moment and play with these class methods. Try the following and
run this file with `node Fellow.js`:

*/
const kDot = new Song("Euphoria", "Kendrick Lamar");
const drizzy = new Song("Family Matters", "Drake");
const richKid = new Song("K", "Jaden Smith");
const richTheKid = new Song("New Freezer", "Rich The Kid");

console.log(Song.list());
console.log(Song.find(1));
console.log(Song.editTitle(1, "Alright"));
console.log(Song.delete(2));
console.log(Song.list());

module.exports = Song;
