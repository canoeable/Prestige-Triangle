addLayer("t", {
    name: "tier", 
    symbol: "T", 
    position: 0, 
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        bonus: {
            tier1: new Decimal(0),
        }
    }},
    /*
    TODO:
    t2 buyables
    */
    color: "#59ab78",
    requires() { return new Decimal(10) },
    resource: "tier points",
    baseResource: "points", 
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.5,
    gainMult() {
        mult = new Decimal(1)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        {key: "t", description: "t: Reset for tier points.", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    buyables: {
        11: {
            display() {return format(new Decimal(1).mul(buyableEffect('t', 25))) + ` T1 Prestige(s) for
            1 tier point.`},
            cost() {return new Decimal(1)},
            effect() {return new Decimal(1).mul(getBuyableAmount(this.layer, this.id)).mul(buyableEffect('t', 25))},
            buy() {
                player.t.points = new Decimal(0)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            canAfford() {return player.t.points.gte(this.cost())},
            style: {
                "font-size": "13px",
                height: "110px",
                width: "110px",
                "border-radius": "0px"
            }
        },
        12: {
            display() {return format(new Decimal(2.5).mul(buyableEffect('t', 25))) + ` T1 Prestiges for
            5.62 tier points.`},
            cost() {return new Decimal(5.62)},
            effect() {return new Decimal(2.5).mul(getBuyableAmount(this.layer, this.id)).mul(buyableEffect('t', 25))},
            buy() {
                player.t.points = new Decimal(0)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            canAfford() {return player.t.points.gte(this.cost())},
            style: {
                "font-size": "13px",
                height: "110px",
                width: "110px",
                "border-radius": "0px"
            }
        },
        13: {
            display() {return format(new Decimal(6.33).mul(buyableEffect('t', 25))) + ` T1 Prestiges for
            83.5 tier points.`},
            cost() {return new Decimal(83.5)},
            effect() {return new Decimal(6.33).mul(getBuyableAmount(this.layer, this.id)).mul(buyableEffect('t', 25))},
            buy() {
                player.t.points = new Decimal(0)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            canAfford() {return player.t.points.gte(this.cost())},
            style: {
                "font-size": "13px",
                height: "110px",
                width: "110px",
                "border-radius": "0px"
            }
        },
        14: {
            display() {return format(new Decimal(32.8).mul(buyableEffect('t', 25))) + ` T1 Prestiges for
            714 tier points.`},
            cost() {return new Decimal(714)},
            effect() {return new Decimal(32.8).mul(getBuyableAmount(this.layer, this.id)).mul(buyableEffect('t', 25))},
            buy() {
                player.t.points = new Decimal(0)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            canAfford() {return player.t.points.gte(this.cost())},
            style: {
                "font-size": "13px",
                height: "110px",
                width: "110px",
                "border-radius": "0px"
            }
        },
        15: {
            display() {return format(calcGain(1).add(player.t.bonus.tier1)) + " T1 Prestiges, increasing point gain x " + format(buyableEffect(this.layer, this.id))},
            effect() {return new Decimal(2).mul(calcGain(1).add(player.t.bonus.tier1))},
            style: {
                "font-size": "13px",
                height: "110px",
                width: "110px",
                "border-radius": "0px"
            }
        },
        21: {
            display() {return format(new Decimal(1).mul(buyableEffect('t', 35))) + ` T2 Prestige for
            100 T1 Prestiges.`},
            cost() {return new Decimal(100)},
            effect() {return new Decimal(1).mul(getBuyableAmount(this.layer, this.id)).mul(buyableEffect('t', 35))},
            buy() {
                resetBuyableAmt(1)
                player.t.bonus.tier1 = new Decimal(0)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            canAfford() {return calcGain(1).add(player.t.bonus.tier1).gte(this.cost())},
            style: {
                "font-size": "13px",
                height: "110px",
                width: "110px",
                "border-radius": "0px"
            }
        },
        22: {
            display() {return format(new Decimal(4).mul(buyableEffect('t', 35))) + ` T2 Prestiges for
            614 T1 Prestiges.`},
            cost() {return new Decimal(614)},
            effect() {return new Decimal(4).mul(getBuyableAmount(this.layer, this.id)).mul(buyableEffect('t', 35))},
            buy() {
                resetBuyableAmt(1)
                player.t.bonus.tier1 = new Decimal(0)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            canAfford() {return calcGain(1).add(player.t.bonus.tier1).gte(this.cost())},
            style: {
                "font-size": "13px",
                height: "110px",
                width: "110px",
                "border-radius": "0px"
            }
        },
        23: {
            display() {return format(new Decimal(13.5).mul(buyableEffect('t', 35))) + ` T2 Prestiges for
            3,154 T1 Prestiges.`},
            cost() {return new Decimal(3154)},
            effect() {return new Decimal(13.5).mul(getBuyableAmount(this.layer, this.id)).mul(buyableEffect('t', 35))},
            buy() {
                resetBuyableAmt(1)
                player.t.bonus.tier1 = new Decimal(0)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            canAfford() {return calcGain(1).add(player.t.bonus.tier1).gte(this.cost())},
            style: {
                "font-size": "13px",
                height: "110px",
                width: "110px",
                "border-radius": "0px"
            }
        },
        24: {
            display() {return format(new Decimal(62.5).mul(buyableEffect('t', 35))) + ` T2 Prestiges for
            27,017 T1 Prestiges.`},
            cost() {return new Decimal(27017)},
            effect() {return new Decimal(62.5).mul(getBuyableAmount(this.layer, this.id)).mul(buyableEffect('t', 35))},
            buy() {
                resetBuyableAmt(1)
                player.t.bonus.tier1 = new Decimal(0)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            canAfford() {return calcGain(1).add(player.t.bonus.tier1).gte(this.cost())},
            style: {
                "font-size": "13px",
                height: "110px",
                width: "110px",
                "border-radius": "0px"
            }
        },
        25: {
            display() {return calcGainFormat(2) + " T2 Prestiges, increasing T1 Prestiges by x " + format(buyableEffect(this.layer, this.id))},
            effect() {
                eff =  new Decimal(2)
                eff = eff.mul(calcGain(2))
                if (eff.lte(1)) eff = new Decimal(1)
                return eff
            },
            style: {
                "font-size": "13px",
                height: "110px",
                width: "110px",
                "border-radius": "0px"
            }
        },
        31: {
            display() {return format(new Decimal(1)) + ` T3 Prestige(s) for
            300 T2 Prestiges.`},
            cost() {return new Decimal(300)},
            effect() {return new Decimal(1).mul(getBuyableAmount(this.layer, this.id))},
            buy() {
                player.points = new Decimal(0)
                player.t.points = new Decimal(0)
                player.t.bonus.tier1 = new Decimal(0)
                resetBuyableAmt(1)
                resetBuyableAmt(2)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            canAfford() {return calcGain(2).gte(this.cost())},
            style: {
                "font-size": "13px",
                height: "110px",
                width: "110px",
                "border-radius": "0px"
            }
        },
        32: {
            display() {return format(new Decimal(4)) + ` T3 Prestiges for
            4,710 T2 Prestiges.`},
            cost() {return new Decimal(4710)},
            effect() {return new Decimal(4).mul(getBuyableAmount(this.layer, this.id))},
            buy() {
                player.points = new Decimal(0)
                player.t.points = new Decimal(0)
                player.t.bonus.tier1 = new Decimal(0)
                resetBuyableAmt(1)
                resetBuyableAmt(2)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            canAfford() {return calcGain(2).gte(this.cost())},
            style: {
                "font-size": "13px",
                height: "110px",
                width: "110px",
                "border-radius": "0px"
            }
        },
        33: {
            display() {return format(new Decimal(12)) + ` T3 Prestiges for
            21,539 T2 Prestiges.`},
            cost() {return new Decimal(21539)},
            effect() {return new Decimal(12).mul(getBuyableAmount(this.layer, this.id))},
            buy() {
                player.points = new Decimal(0)
                player.t.points = new Decimal(0)
                player.t.bonus.tier1 = new Decimal(0)
                resetBuyableAmt(1)
                resetBuyableAmt(2)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            canAfford() {return calcGain(2).gte(this.cost())},
            style: {
                "font-size": "13px",
                height: "110px",
                width: "110px",
                "border-radius": "0px"
            }
        },
        34: {
            display() {return format(new Decimal(104)) + ` T3 Prestiges for
            2,041,583 T2 Prestiges.`},
            cost() {return new Decimal(2041583)},
            effect() {return new Decimal(104).mul(getBuyableAmount(this.layer, this.id))},
            buy() {
                player.points = new Decimal(0)
                player.t.points = new Decimal(0)
                player.t.bonus.tier1 = new Decimal(0)
                resetBuyableAmt(1)
                resetBuyableAmt(2)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            canAfford() {return calcGain(2).gte(this.cost())},
            style: {
                "font-size": "13px",
                height: "110px",
                width: "110px",
                "border-radius": "0px"
            }
        },
        35: {
            display() {return calcGainFormat(3) + " T3 Prestiges, increasing T2 Prestige gain x " + format(buyableEffect(this.layer, this.id)) + " and generating " + format(calcGain(3).div(10).mul(buyableEffect(this.layer, 25))) + " T1 Prestiges/s."},
            effect() {
                eff = new Decimal(2)
                eff = eff.mul(calcGain(3))
                if (eff.lte(1)) eff = new Decimal(1)
                return eff
            },
            style: {
                "font-size": "13px",
                height: "110px",
                width: "110px",
                "border-radius": "0px"
            }
        },
    },
    automate() {
        if (calcGain(3).gte(1)) player.t.bonus.tier1 = player.t.bonus.tier1.add(calcGain(3).div(10).mul(buyableEffect(this.layer, 25)).div(20))
    }
})
//.mul(buyableEffect('l', 15))