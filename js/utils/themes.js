// ************ Themes ************
var themes = ["default", "red", "orange", "light green", "dark green", "dark blue", "purple"]

var colors = {
	default: {
		1: "#ffffff",//Branch color 1
		2: "#bfbfbf",//Branch color 2
		3: "#7f7f7f",//Branch color 3
		color: "#dfdfdf",
		points: "#ffffff",
		locked: "#bf8f8f",
		background: "#0f0f0f",
		background_tooltip: "rgba(0, 0, 0, 0.75)",
	},
	"dark blue": {
		1: "#bfdfff",
		2: "#8fa7bf",
		3: "#5f6f7f",
		color: "#bfdfff",
		points: "#dfefff",
		locked: "#c4a7b3",
		background: "#001f3f",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	red: {
		1: "#4d0505",
		2: "#4d0505",
		3: "#4d0505",
		color: "#bfdfff", 
		points: "#c93838", //change
		locked: "#4d0505",
		background: "#4d0505",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	purple: {
		1: "#2f0457",
		2: "#2f0457",
		3: "#2f0457",
		color: "#bfdfff", 
		points: "#9d78bf", //change
		locked: "#2f0457",
		background: "#2f0457",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	orange: {
		1: "#8a3601",
		2: "#8a3601",
		3: "#8a3601",
		color: "#bfdfff", 
		points: "#bd8d6f", //change
		locked: "#8a3601",
		background: "#8a3601",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	"light green": {
		1: "#55ba30",
		2: "#55ba30",
		3: "#55ba30",
		color: "#bfdfff", 
		points: "#185901", //change
		locked: "#55ba30",
		background: "#55ba30",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	"dark green": {
		1: "#185901",
		2: "#185901",
		3: "#185901",
		color: "#bfdfff", 
		points: "#55ba30", //change
		locked: "#185901",
		background: "#185901",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
}

function changeTheme() {

	colors_theme = colors[options.theme || "default"];
	document.body.style.setProperty('--background', colors_theme["background"]);
	document.body.style.setProperty('--background_tooltip', colors_theme["background_tooltip"]);
	document.body.style.setProperty('--color', colors_theme["color"]);
	document.body.style.setProperty('--points', colors_theme["points"]);
	document.body.style.setProperty("--locked", colors_theme["locked"]);
}
function getThemeName() {
	return options.theme? options.theme : "default";
}

function switchTheme() {
	let index = themes.indexOf(options.theme)
	if (options.theme === null || index >= themes.length-1 || index < 0) {
		options.theme = themes[0];
	}
	else {
		index ++;
		options.theme = themes[index];
	}
	changeTheme();
	resizeCanvas();
}
