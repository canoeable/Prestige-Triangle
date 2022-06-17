addLayer("p", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#00aeff",
    requires: new Decimal('e808'), // Can be a function that takes requirement increases into account
    resource: "prestige points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.002, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    displayRow: 1,
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){
        shown = false
        if(player.s.best.gte(1)) shown = true
        if(player.p.unlocked == true) shown = true
        return shown
    },
    branches: ['t', 's'],
    effect() {return player.p.total.add(1).pow(1.6)},
    effectDescription() {return "multiplying tier points by <h2 style='color:"+tmp.p.color+";text-shadow:0px 0px 10px;'>"+'x'+format(tmp['p'].effect)+"</h2>"},
    upgrades: {
        11: {
            title: "Scrapped Upgrade",
            description() {return `Gain a boost to scraps based on total prestige points.<br>` + format(upgradeEffect(this.layer, this.id)) +  `x to scraps`},
            cost: new Decimal(1),
            effect() {return new Decimal(1e10).pow(player.p.total)},
        },
    },
    milestones: {
        0: {
            requirementDescription: "1 Prestige Point",
            effectDescription: "Gain 500% of tier point gain per second",
            done() {return player.p.best.gte(1)}
        }
    }
})