let modInfo = {
	name: "Prestige Triangle",
	id: "trianglefunny",
	author: "canoeable",
	pointsName: "points",
	modFiles: ["layers/tiers.js", "layers/levels.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 0,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "v0.11 (upd 2)",
	name: "Scrap this, with the scrap layer!",
}

let changelog = `<h1>Changelog:</h1><br>
<h4>v0.11 (upd 2)</h4><br>
Added T3, and the scrap layer.<br>
<h4>v0.1a</h4><br>
First 2 tiers added.<br>
Endgame: 5 T2 Prestiges.`

let winText = `Congratulations! You have reached the end and beaten this game, well.. for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	gain = gain.mul(buyableEffect('t', 15))
	if (gain.lte(1)) gain = new Decimal(1)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [ function() {}
]

// Determines when the game "ends"
function isEndgame() {
	return false
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}

function buyMaxBuyable(base, growth) {
	let max = Decimal.affordGeometricSeries(player[this.layer].points, base, growth, getBuyableAmount(this.layer, this.id))
	let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
	player[this.layer].points = player[this.layer].points.sub(cost)
	setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
}

let dev = {
	isEnabled: false
}

function calcGain(tier) {
	act = tier*10
	return buyableEffect('t', act+1).add(buyableEffect('t', act+2)).add(buyableEffect('t', act+3)).add(buyableEffect('t', act+4))
}

function calcGainFormat(tier) {
	act = tier*10
	amt = buyableEffect('t', act+1).add(buyableEffect('t', act+2)).add(buyableEffect('t', act+3)).add(buyableEffect('t', act+4))
	return format(amt)
}

function resetBuyableAmt(tier) {
	act = tier*10
	setBuyableAmount('t', act+1, new Decimal(0))
	setBuyableAmount('t', act+2, new Decimal(0))
	setBuyableAmount('t', act+3, new Decimal(0))
	setBuyableAmount('t', act+4, new Decimal(0))
}