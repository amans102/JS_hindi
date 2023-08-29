const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "spiderman"]

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

//spread
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

//array inside array
//use flat

//is, of from