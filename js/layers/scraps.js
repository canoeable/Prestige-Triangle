addLayer('s', {
    name: "scraps",
    symbol: "S",
    position: 0,
    row: 1,
    startData() {return{
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#3221a3",
    requires() { return new Decimal(10000) },
    resource: "scraps",
    baseResource: "tier points",
    baseAmount() {return player.t.points},
    type: "normal",
    exponent: 0.33,
    gainMult() { 
        mult = new Decimal(1)
        return mult
    },
    gainExp() { 
        return new Decimal(1)
    },
    hotkeys: [
        {key: "s", description: "s: Reset for scraps.", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
})