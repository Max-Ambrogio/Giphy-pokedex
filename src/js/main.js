/**
 * Fetches GIFs from the Giphy API
 *
 * @param {String} searchTerm what you want to search giphy for
 * @param {Function} callback the function to call when giphy replies with some gifs
 */
let getGif = function(searchTerm, callback) {
	// learn about how the giphy API wants you to construct your URLs to make a request here:
	// https://developers.giphy.com/docs/api/endpoint#search
	const GIPHY_API = 'https://api.giphy.com/v1/gifs/search?api_key=' + GIPHY_API_KEY + '&rating=G&';
	
	// axios is a package for fetching data via ajax.
	axios.get(GIPHY_API + 'q=' + searchTerm)
		.then(function(response) {
			callback(response.data.data)
		})
		.catch(function (error) {
			console.warn(error);
		})
}



/*
 * simple example of how to get cat gifs and console log the results
 */

let nameInput = document.querySelector('.text')
let display = document.querySelector('.img')
let parent = document.querySelector('.main-pokedex')
let type = document.querySelector('.type h1')
let height = document.querySelector('.height h1')
let dpad = document.querySelector('.dpad')
let poke = pokedex.pokemon

console.log(nameInput.value)

function logKey(e) {
	console.log(nameInput.value)
  }

let refresh = function(){
	
	getGif( nameInput.value , function(gifData){
		console.log(gifData)
		let NewImage = document.createElement("img")
		NewImage.setAttribute('src' , gifData[0].images.original.url)
		NewImage.classList.add('created-img')
		parent.append (NewImage)

		type.innerText = pokedex.pokemon[0].type
		
		height.innerText = pokedex.pokemon[0].height
	})

	getGif( nameInput.value , function(gifData){
		NewImage.setAttribute('src' , gifData[9].images.original.url) 
	})
	// pokedex.pokemon.name(nameInput.value)
}

	let pokeName = poke.find(function(pokemon){
		return pokemon.name.includes('Charizard')
	})
	console.log(pokeName)

refresh()
nameInput.addEventListener('keypress' , refresh);
dpad.addEventListener('click' , refresh)


