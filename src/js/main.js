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
let red = document.querySelector('.glow-red')
let green = document.querySelector('.glow-green')
let yellow = document.querySelector('.glow-yellow')
let title = document.querySelector('.main-title')

function getRandom(max) {
	return Math.floor(Math.random() * max);
  }

console.log(nameInput.value)

// function logKey(e) {
// 	console.log(nameInput.value)
//   }

parent.classList.add('load')
title.classList.add('load')

let glow = setTimeout( function(){
	 red.classList.add('show')
	 yellow.classList.add('show')
	 green.classList.add('show')
} , 1000 )




let refresh = function(){
	
	getGif( nameInput.value , function(gifData){
		console.log(gifData)
		let NewImage = document.createElement("img")
		NewImage.setAttribute('src' , gifData[0].images.original.url)
		NewImage.classList.add('created-img')
		parent.append (NewImage)
	})

	let pokeName = poke.find(function(pokemon){
		return pokemon.name.toLowerCase().includes(nameInput.value.toLowerCase())
	})

	type.innerText = pokeName.type
	height.innerText = pokeName.height
	
	console.log(pokeName)
}

let random = function(){
	getGif( nameInput.value , function(gifData){
		let randomImage = document.createElement("img")
		randomImage.setAttribute('src' , gifData[getRandom(50)].images.original.url)
		randomImage.classList.add('created-img')
		parent.append (randomImage) 
	})
}

let nextEvolution = function(){
	poke.find(function(pokemon){
		return pokemon.name.toLocaleLowerCase().includes(nameInput.value.toLocaleLowerCase())
	})
	console.log(nextEvolution.next_evolution.name)
}

nameInput.addEventListener('keypress' , refresh);
dpad.addEventListener('click' , random)
// dpad.addEventListener('click' , nextEvolution)


