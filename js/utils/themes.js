// ************ Themes ************

var themes = ["default", "light red", "red", "dark red", "dark orange", "orange", "light orange", "light yellow", "yellow", "dark yellow", "dark green", "green", "light green", "light blue", "blue", "dark blue", "dark purple", "purple", "light purple", "light pink", "pink", "dark pink"]

var colors = {
	default: {
		1: "#ffffff",
		2: "#bfbfbf",
		3: "#7f7f7f",
		color: "#dfdfdf",
		points: "#ffffff",
		locked: "#bf8f8f",
		background: "#0f0f0f",
		background_tooltip: "rgba(0, 0, 0, 0.75)",
	},
	"light red": {
		1: "#ffffff",
		2: "#bfbfbf",
		3: "#7f7f7f",
		color: "#bfdfff", 
		points: "#4d0505", //change
		locked: "#d93636",
		background: "#d93636",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	"red": {
		1: "#ffffff",
		2: "#bfbfbf",
		3: "#7f7f7f",
		color: "#bfdfff", 
		points: "#4d0505", //change
		locked: "#b00c0c",
		background: "#b00c0c",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	"dark red": {
		1: "#ffffff",
		2: "#bfbfbf",
		3: "#7f7f7f",
		color: "#bfdfff", 
		points: "#c93838", //change
		locked: "#4d0505",
		background: "#4d0505",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	"dark orange": {
		1: "#ffffff",
		2: "#bfbfbf",
		3: "#7f7f7f",
		color: "#bfdfff", 
		points: "#bd8d6f", //change
		locked: "#3d1b06",
		background: "#3d1b06",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	"orange": {
		1: "#ffffff",
		2: "#bfbfbf",
		3: "#7f7f7f",
		color: "#bfdfff", 
		points: "#3d1b06", //change
		locked: "#8a3601",
		background: "#8a3601",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	"light orange": {
		1: "#ffffff",
		2: "#bfbfbf",
		3: "#7f7f7f",
		color: "#bfdfff", 
		points: "#3d1b06", //change
		locked: "#c46021",
		background: "#c46021",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	"light yellow": {
		1: "#ffffff",
		2: "#bfbfbf",
		3: "#7f7f7f",
		color: "#bfdfff", 
		points: "#636002", //change
		locked: "#e3dc12",
		background: "#e3dc12",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	"yellow": {
		1: "#ffffff",
		2: "#bfbfbf",
		3: "#7f7f7f",
		color: "#bfdfff", 
		points: "#636002", //change
		locked: "#9c9705",
		background: "#9c9705",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	"dark yellow": {
		1: "#ffffff",
		2: "#bfbfbf",
		3: "#7f7f7f",
		color: "#bfdfff", 
		points: "#e3dc12", //change
		locked: "#636002",
		background: "#636002",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	"dark green": {
		1: "#ffffff",
		2: "#bfbfbf",
		3: "#7f7f7f",
		color: "#bfdfff", 
		points: "#55ba30", //change
		locked: "#185901",
		background: "#185901",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	"green": {
		1: "#ffffff",
		2: "#bfbfbf",
		3: "#7f7f7f",
		color: "#bfdfff", 
		points: "#185901", //change
		locked: "#228200",
		background: "#228200",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	"light green": {
		1: "#ffffff",
		2: "#bfbfbf",
		3: "#7f7f7f",
		color: "#bfdfff", 
		points: "#185901", //change
		locked: "#55ba30",
		background: "#55ba30",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	"light blue": {
		1: "#ffffff",
		2: "#bfbfbf",
		3: "#7f7f7f",
		color: "#bfdfff",
		points: "#001f3f",
		locked: "#026ede",
		background: "#026ede",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	"blue": {
		1: "#ffffff",
		2: "#bfbfbf",
		3: "#7f7f7f",
		color: "#bfdfff",
		points: "#001f3f",
		locked: "#01468c",
		background: "#01468c",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	"dark blue": {
		1: "#ffffff",
		2: "#bfbfbf",
		3: "#7f7f7f",
		color: "#bfdfff",
		points: "#026ede",
		locked: "#001f3f",
		background: "#001f3f",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	"dark purple": {
		1: "#ffffff",
		2: "#bfbfbf",
		3: "#7f7f7f",
		color: "#bfdfff",
		points: "#5e19ff",
		locked: "#17004d",
		background: "#17004d",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	"purple": {
		1: "#ffffff",
		2: "#bfbfbf",
		3: "#7f7f7f",
		color: "#bfdfff", 
		points: "#17004d", //change
		locked: "#2f0457",
		background: "#2f0457",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	"light purple": {
		1: "#ffffff",
		2: "#bfbfbf",
		3: "#7f7f7f",
		color: "#bfdfff",
		points: "#17004d",
		locked: "#5e19ff",
		background: "#5e19ff",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	"light pink": {
		1: "#ffffff",
		2: "#bfbfbf",
		3: "#7f7f7f",
		color: "#bfdfff",
		points: "#4d004b",
		locked: "#fa14f6",
		background: "#fa14f6",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	"pink": {
		1: "#ffffff",
		2: "#bfbfbf",
		3: "#7f7f7f",
		color: "#bfdfff",
		points: "#4d004b",
		locked: "#8c008a",
		background: "#8c008a",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	"dark pink": {
		1: "#ffffff",
		2: "#bfbfbf",
		3: "#7f7f7f",
		color: "#bfdfff",
		points: "#fa14f6",
		locked: "#4d004b",
		background: "#4d004b",
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
