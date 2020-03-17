const farmAnimals = 'cow horse sheep pig chicken'.split(" ")

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const muppet = {
  name: 'Kermit',
  color: 'green',
  song: 'The Rainbow Connection',
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

const k_muppet = {
  k_name: 'Kermit',
  k_color: 'green',
  k_album: {
    the_muppet_movie: {
      song_1: 'Rainbow Connection',
      song_2: 'Moving Right Along',
      song_3: 'Never Before, Never Again',
      song_4: 'I Hope That Something Better Comes Along',
    },
  },
  k_job: 'Host of The Muppet Show',
  k_partner: 'Miss Piggy'
};

// Strings
// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
// document.addEventListener('DOMContentLoaded', () => {
// debugger;
  // console.log(farmAnimals.split(""));
  console.log(farmAnimals)
  const [moo, neigh, baa, oink, cluck] = farmAnimals
  // const sounds = ['moo', 'neigh', 'baa', 'oink', 'cluck' ] = farmAnimals.split(" ");
  // console.log(sounds)
  // const {farmAnimals,
  //        sounds        
  // }
// 2. Bolt the horse wandered off, so just give us four animals, andh let's name them Bessie, Dolly, Babe, and Little.
  farmAnimals.splice(1, 1)
  const [Bessie, Dolly, Babe, Little] = farmAnimals

//const index = array.indexOf(5);
// if (index > -1) {
//   array.splice(index, 1);
// }

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of black_and_white, black, and pink.
  const [black_and_white, black, pink] = farmAnimals.slice(0,-1)

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
const [red, orange, yellow, green, blue, indigo, violet] = colors
// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
  const temp = colors.splice(5,1);
  const [r, o, y, g, b, v] = colors
  // console.log(colors)
// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
const indg = temp[0]
// Objects

// 7. Use destructuring to assign all appropriate variables using the keys as the variable names
  const {name, color, song, job, partner} = muppet; 
// })


// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
const {song_2, song_4} = k_muppet.k_album.the_muppet_movie;
const{k_job, k_partner} = k_muppet;


// const k_muppet = {
//   k_name: 'Kermit',
//   k_color: 'green',
//   k_album: {
//     the_muppet_movie: {
//       song_1: 'Rainbow Connection',
//       song_2: 'Moving Right Along',
//       song_3: 'Never Before, Never Again',
//       song_4: 'I Hope That Something Better Comes Along',
//     },
//   },
//   k_job: 'Host of The Muppet Show',
//   k_partner: 'Miss Piggy'
// };