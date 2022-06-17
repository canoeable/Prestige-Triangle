addLayer('s', {
    name: "scraps",
    symbol: "S",
    position: 0,
    row: 1,
    startData() {return{
        unlocked: false,
        points: new Decimal(0),
        best: new Decimal(0),
        total: new Decimal(0),
        bots: {
            knowledge: new Decimal(0),
            knowledgegain: new Decimal(0),
            generation: {
                t1: new Decimal(0),
                t2: new Decimal(0),
                t3: new Decimal(0),
            },
        },
        effects: {
            e31a: new Decimal(0),
            e31b: new Decimal(0),
            e32a: new Decimal(0),
            e32b: new Decimal(0),
        },
    }},
    color: "#8a8a8a",
    requires() { return new Decimal(10000)},
    resource: "scraps",
    baseResource: "tier points",
    baseAmount() {return player.t.points},
    type: "normal",
    exponent: 0.19,
    branches: ['t'],
    gainMult() { 
        mult = new Decimal(1)
        return mult
    },
    gainExp() { 
        exp = new Decimal(1)
        return exp
    },
    directMult() {
        dir = new Decimal(1)
        if(hasUpgrade('s', 31)) dir = dir.mul(player.s.effects.e31a)
        if(hasUpgrade('s', 32)) dir = dir.mul(player.s.effects.e32a)
        if(hasUpgrade('s', 35)) dir = dir.mul(upgradeEffect('s', 33))
        if(hasUpgrade('p', 11)) dir = dir.mul(upgradeEffect('p', 11))
        dir = dir.mul(buyableEffect('s', 21))
        return dir
    },
    hotkeys: [
        {key: "s", description: "s: Reset for scraps.", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){
        shown = player.t.best.gte(1)
        if (player.s.unlocked) shown = true
        return shown
    },
    upgrades: {
        11: {
            fullDisplay() {return `Purchase the T1 Prestigebot for 2 scraps.`},
            cost() {return new Decimal(2)},
            style: {
                width: "256px",
                "font-size": "13px",
                "border-radius": "25px",
            },
        },
        12: {
            fullDisplay() {return `Purchase the T2 Prestigebot for 7.5 scraps.`},
            cost() {return new Decimal(7.5)},
            style: {
                width: "256px",
                "font-size": "13px",
                "border-radius": "25px",
            },
        },
        13: {
            fullDisplay() {return `Purchase the T3 Prestigebot for 22.5 scraps.`},
            cost() {return new Decimal(22.5)},
            style: {
                width: "256px",
                "font-size": "13px",
                "border-radius": "25px",
            },
        },
        21: {
            fullDisplay() {return `Gain more knowledge based on knowledge.<br>Currently: ` + format(upgradeEffect(this.layer, this.id)) + `x<br><br> Requires 100 knowledge`},
            canAfford() {return player.s.bots.knowledge.gte(100)},
            effect() {return Decimal.min(player.s.bots.knowledge.pow(0.05), new Decimal('ee100'))},
            style: {
                "font-size": "12px"
            }
        },
        22: {
            fullDisplay() {return `Knowledge boosts itself again.<br>Currently: ` + format(upgradeEffect(this.layer, this.id)) + `x<br><br> Requires 666 knowledge`},
            canAfford() {return player.s.bots.knowledge.gte(666)},
            effect() {return Decimal.min(player.s.bots.knowledge.pow(0.1), new Decimal('ee100'))},
            style: {
                "font-size": "12px"
            }
        },
        23: {
            fullDisplay() {return `Scraps boost knowledge.<br>Currently: ` + format(upgradeEffect(this.layer, this.id)) + `x<br><br> Requires 2500.1 knowledge`},
            canAfford() {return player.s.bots.knowledge.gte(2500.1)},
            effect() {return Decimal.min(player.s.points.add(2), new Decimal(1e100))},
            style: {
                "font-size": "12px"
            }
        },
        24: {
            fullDisplay() {return `Increase base knowledge gain, based on knowledge.<br>Currently: +` + format(upgradeEffect(this.layer, this.id)) + `<br><br> Requires 9,999.99 knowledge`},
            canAfford() {return player.s.bots.knowledge.gte(9999.9)},
            effect() {return Decimal.min(player.s.bots.knowledge.pow(0.01).sub(1), new Decimal('ee1000'))},
            style: {
                "font-size": "12px"
            }
        },
        25: {
            fullDisplay() {return `Knowledge is boosted based on tier points.<br>Currently: ^` + format(upgradeEffect(this.layer, this.id)) + `<br><br> Requires 25000.0001 knowledge`},
            canAfford() {return player.s.bots.knowledge.gte(25000.0001)},
            effect() {return Decimal.min(player.t.points.pow(0.02), new Decimal(1000))},
            style: {
                "font-size": "12px"
            }
        },
        31: {
            title: "Scraps-Point Synergy",
            description() { return `Points and Scraps boost each other.<br> Scraps: ` + format(player.points.log10().pow(0.3)) + `x<br> Points: ` + format(player.s.points.add(2)) + `x`},
            cost: new Decimal(1000),
            unlocked() {return hasMilestone('s', 2)}
        },
        32: {
            title: "Scraps-Tier Point Synergy",
            description() { return `Tier Points and Scraps boost each other.<br> Scraps: ` + format(player.t.points.pow(0.2).add(2)) + `x<br> Tier Points: ` + format(player.s.points.pow(0.6).add(2)) + `x`},
            cost: new Decimal(2e12),
            unlocked() {return hasMilestone('s', 3)}
        },
        33: {
            title: "Point Self-Synergy",
            description() { return `Points boost themselves.<br> Currently: ` + format(player.points.pow(0.05).add(2)) + `x`},
            cost: new Decimal(1e56),
            effect() {return player.points.pow(0.05)},
            unlocked() {return hasMilestone('s', 3)},
        },
        34: {
            title: "Tier Point Self-Synergy",
            description() { return `Tier Points boost themselves.<br> Currently: ` + format(player.t.points.pow(0.07).add(2)) + `x`},
            cost: new Decimal(1e60),
            effect() {return player.points.pow(0.07)},
            unlocked() {return hasMilestone('s', 3)},
        },
        35: {
            title: "Scraps Self-Synergy",
            description() { return `Scraps boost themselves.<br> Currently: ` + format(player.s.points.pow(0.3).add(2)) + `x`},
            cost: new Decimal(4.20e69),
            effect() {return player.s.points.pow(0.4)},
            unlocked() {return hasMilestone('s', 3)},
        },
        35: {
            title: "Scraps Self-Synergy",
            description() { return `Scraps boost themselves.<br> Currently: ` + format(player.s.points.pow(0.3).add(2)) + `x`},
            cost: new Decimal(4.20e69),
            effect() {return player.s.points.pow(0.4)},
            unlocked() {return hasMilestone('s', 3)},
        },
        41: {
            title: "Buy and buy again",
            description() { return `Unlock 2 buyables`},
            cost: new Decimal(1e105),
            unlocked() {return hasMilestone('s', 3)},
        },
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",
        ["display-text", function() {return "You have " + format(player.s.bots.knowledge) + " knowledge (+" + format(player.s.bots.knowledgegain) + "/s)"}],
        ["display-text", function() {return"Bots are capped at 1e20/s"}],
        ["microtabs", "tabs"]
    ],
    microtabs: {
        tabs: {
            Bots: {
                content: [
                    ["row", [["upgrade", 11], ["upgrade", 12], ["upgrade", 13]]],
                    ["row", [["buyable", 11], ["buyable", 12], ["buyable", 13], ["buyable", 14], ["buyable", 15], ["buyable", 16]]]
                ]
            },
            Upgrades: {
                content: [
                    ["row", [["upgrade", 21], ["upgrade", 22], ["upgrade", 23], ["upgrade", 24], ["upgrade", 25]]],
                    ["row", [["upgrade", 31], ["upgrade", 32], ["upgrade", 33], ["upgrade", 34], ["upgrade", 35]]],
                    ["row", [["upgrade", 41]]]
                ]
            },
            Buyables: {
                content: [
                    ["row", [["buyable", 21], ["buyable", 22]]],
                ]
            },
            Milestones: {
                content: [
                    "milestones",
                ]
            },
        }
    },
    automate() {
        player.s.bots.knowledgegain = calcKnowledge()
        player.s.bots.knowledge = player.s.bots.knowledge.add(player.s.bots.knowledgegain.div(20))
        player.s.bots.generation.tier1 = calcBots(1)
        player.s.bots.generation.tier2 = calcBots(2)
        player.s.bots.generation.tier3 = calcBots(3)
        player.s.effects.e31a = player.points.log10().pow(0.3)
        player.s.effects.e31b = player.s.points.add(2)
        player.s.effects.e32a = player.t.points.pow(0.2).add(2)
        player.s.effects.e32b = player.s.points.add(2)
    },
    buyables: {
        11: {
            display() {return "x" + format(buyableEffect(this.layer, 12)) + " gain/s. Currently +" + format(buyableEffect(this.layer, this.id)) + `/s. Cost: ` + format(this.cost()) + " knowledge."},
            cost() {return new Decimal(5).pow(getBuyableAmount(this.layer, this.id).pow(1.4))},
            effect() {return Decimal.min(buyableEffect(this.layer, 12).pow(getBuyableAmount(this.layer, this.id)), new Decimal(1e20))},
            buy() {player[this.layer].bots.knowledge = player[this.layer].bots.knowledge.sub(this.cost()); setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            style: {
                height: "128px",
                width: "128px",
                "font-size": "13px",
                "border-radius": "25px",
            },
            canAfford() {return player.s.bots.knowledge.gte(this.cost()) && !buyableEffect(this.layer, this.id).eq(1e20)}
        },
        12: {
            display() {return `+1 to previous buyables base. Cost: ` + format(this.cost()) + " knowledge."},
            cost() {return new Decimal(12.5).pow(getBuyableAmount(this.layer, this.id).pow(1.4))},
            effect() {return getBuyableAmount(this.layer, this.id).add(2)},
            buy() {player[this.layer].bots.knowledge = player[this.layer].bots.knowledge.sub(this.cost()); setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            style: {
                height: "128px",
                width: "128px",
                "font-size": "13px",
                "border-radius": "25px",
            },
            canAfford() {return player.s.bots.knowledge.gte(this.cost()) && !buyableEffect(this.layer, 11).eq(1e20)}
        },
        13: {
            display() {return "x" + format(buyableEffect(this.layer, 14)) + " gain/s. Currently +" + format(buyableEffect(this.layer, this.id)) + `/s. Cost: ` + format(this.cost()) + " knowledge."},
            cost() {return new Decimal(10).pow(getBuyableAmount(this.layer, this.id).pow(1.4))},
            effect() {return Decimal.min(buyableEffect(this.layer, 14).pow(getBuyableAmount(this.layer, this.id)), new Decimal(1e20))},
            buy() {player[this.layer].bots.knowledge = player[this.layer].bots.knowledge.sub(this.cost()); setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            style: {
                height: "128px",
                width: "128px",
                "font-size": "13px",
                "border-radius": "25px",
            },
            canAfford() {return player.s.bots.knowledge.gte(this.cost()) && !buyableEffect(this.layer, this.id).eq(1e20)}
        },
        14: {
            display() {return `+1 to previous buyables base. Cost: ` + format(this.cost()) + " knowledge."},
            cost() {return new Decimal(19).pow(getBuyableAmount(this.layer, this.id).pow(1.4))},
            effect() {return getBuyableAmount(this.layer, this.id).add(2)},
            buy() {player[this.layer].bots.knowledge = player[this.layer].bots.knowledge.sub(this.cost()); setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            style: {
                height: "128px",
                width: "128px",
                "font-size": "13px",
                "border-radius": "25px",
            },
            canAfford() {return player.s.bots.knowledge.gte(this.cost()) && !buyableEffect(this.layer, 13).eq(1e20)}
        },
        15: {
            display() {return "x" + format(buyableEffect(this.layer, 16)) + " gain/s. Currently +" + format(buyableEffect(this.layer, this.id)) + `/s. Cost: ` + format(this.cost()) + " knowledge."},
            cost() {return new Decimal(15).pow(getBuyableAmount(this.layer, this.id).pow(1.4))},
            effect() {return Decimal.min(buyableEffect(this.layer, 16).pow(getBuyableAmount(this.layer, this.id)), new Decimal(1e20))},
            buy() {player[this.layer].bots.knowledge = player[this.layer].bots.knowledge.sub(this.cost()); setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            style: {
                height: "128px",
                width: "128px",
                "font-size": "13px",
                "border-radius": "25px",
            },
            canAfford() {return player.s.bots.knowledge.gte(this.cost()) && !buyableEffect(this.layer, this.id).eq(1e20)}
        },
        16: {
            display() {return `+1 to previous buyables base. Cost: ` + format(this.cost()) + " knowledge."},
            cost() {return new Decimal(25).pow(getBuyableAmount(this.layer, this.id).pow(1.4))},
            effect() {return getBuyableAmount(this.layer, this.id).add(2)},
            buy() {player[this.layer].bots.knowledge = player[this.layer].bots.knowledge.sub(this.cost()); setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            style: {
                height: "128px",
                width: "128px",
                "font-size": "13px",
                "border-radius": "25px",
            },
            canAfford() {return player.s.bots.knowledge.gte(this.cost()) && !buyableEffect(this.layer, 15).eq(1e20)}
        },
        21: {
            display() {return `x10.0 scraps.<br> Cost: ` + format(this.cost()) + ` scraps<br>Effect: ` + format(buyableEffect(this.layer, this.id)) + `x`},
            cost() {return new Decimal(1e100).mul(new Decimal(1e5).pow(getBuyableAmount(this.layer, this.id).pow(1.4).add(1)))},
            effect() {return new Decimal(10).pow(getBuyableAmount(this.layer, this.id))},
            buy() {player[this.layer].points = player[this.layer].points.sub(this.cost()); setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            style: {
                height: "128px",
                width: "128px",
                "font-size": "13px",
                "border-radius": "25px",
            },
            canAfford() {return player[this.layer].points.gte(this.cost())},
            unlocked() {return hasUpgrade('s', 41)}
        },
        22: {
            display() {return `x50.0 tier points.<br> Cost: ` + format(this.cost()) + ` scraps<br>Effect: ` + format(buyableEffect(this.layer, this.id)) + `x`},
            cost() {return new Decimal(1e100).mul(new Decimal(1e8).pow(getBuyableAmount(this.layer, this.id).pow(1.5).add(1)))},
            effect() {return new Decimal(50).pow(getBuyableAmount(this.layer, this.id))},
            buy() {player[this.layer].points = player[this.layer].points.sub(this.cost()); setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            style: {
                height: "128px",
                width: "128px",
                "font-size": "13px",
                "border-radius": "25px",
            },
            canAfford() {return player[this.layer].points.gte(this.cost())},
            unlocked() {return hasUpgrade('s', 41)}
        },
    },
    milestones: {
        1: {
            requirementDescription: "15 Total Scraps",
            effectDescription: "Gain 10.1% of your tier point gain per second.",
            done() {return player.s.total.gte(15)},
        },
        2: {
            requirementDescription: "200 Total Scraps",
            effectDescription: "Unlock a scrap upgrade. Just one.",
            done() {return player.s.total.gte(200)},
        },
        3: {
            requirementDescription: "2e12 Total Scraps",
            effectDescription: "Unlock 5 scrap upgrades.",
            done() {return player.s.total.gte(200)},
        },
    },
    effect() {return Decimal.min(player.s.best.add(1).pow(1.6), new Decimal('1e150'))},
    effectDescription() {
        if(tmp['s'].effect.eq('1e150')) {return "boosting T3 Prestiges by <h2 style='color:"+tmp.s.color+";text-shadow:0px 0px 10px;'>"+format(tmp['s'].effect)+"</h2>x [capped]"} else {
            return "boosting T3 Prestiges by <h2 style='color:"+tmp.s.color+";text-shadow:0px 0px 10px;'>"+format(tmp['s'].effect)+"</h2>x"
    }},
    softcapStart: new Decimal(1e300),
    softcapPower: 0.2,
})