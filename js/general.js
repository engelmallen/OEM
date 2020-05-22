/*Status*/
console.log('JavaScript ON')

function consoleIt(status) {
	console.log(status+'ON')
}

/*Plan and Prepare Vars*/
// Buttons:
var winter = document.getElementById('winter')
var hot = document.getElementById('hot')
var floods = document.getElementById('floods')
var lighting = document.getElementById('lighting')
var tornado = document.getElementById('tornado')


// Buttons:

var winterContent = document.getElementById('winter-content')
var hotContent = document.getElementById('hot-content')
var floodsContent = document.getElementById('floods-content')
var lightingContent = document.getElementById('lighting-content')
var tornadoContent = document.getElementById('tornado-content')

//functions:

function togglePlan(makeVisible)
{
	winterContent.style.display = "none"
	hotContent.style.display = "none"
	floodsContent.style.display = "none"
	lightingContent.style.display = "none"
	tornadoContent.style.display = "none"

	makeVisible.style.display = "block"

/*	winterContent.classList.remove("d-block");
	hotContent.classList.remove("d-block");
	floodsContent.classList.remove("d-block");
	lightingContent.classList.remove("d-block");
	tornadoContent.classList.remove("d-block");

	winterContent.classList.remove("d-none");
	hotContent.classList.remove("d-none");
	floodsContent.classList.remove("d-none");
	lightingContent.classList.remove("d-none");
	tornadoContent.classList.remove("d-none");

	winterContent.classList.add("d-none");
	hotContent.classList.add("d-none");
	floodsContent.classList.add("d-none");
	lightingContent.classList.add("d-none");
	tornadoContent.classList.add("d-none");
	
	makeVisible.classList.add("d-block");*/
}


winter.addEventListener("click", function()
	{
		consoleIt(winter)
		togglePlan(winterContent)
	}
)

hot.addEventListener("click", function()
	{
		consoleIt(hot)
		togglePlan(hotContent)
	}
)
floods.addEventListener("click", function()
	{
		consoleIt(floods)
		togglePlan(floodsContent)
	}
)
lighting.addEventListener("click", function()
	{
		consoleIt(lighting)
		togglePlan(lightingContent)
	}
)
tornado.addEventListener("click", function()
	{
		consoleIt(tornado)
		togglePlan(tornadoContent)
	}
)