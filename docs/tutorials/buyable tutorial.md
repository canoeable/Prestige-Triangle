Buyable Tutorial

(a buyable i use)

```
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
  canAfford() {return calcGain(2).gte(this.cost())}
  style: {
  "font-size": "13px",
  height: "110px",
  width: "110px",
  "border-radius": "0px"
  },
},
```

title() {return "title"}: (optional) Buyable title. Displayed in a larger font at the top of the buyable.

display() {return "description"}: (required) Buyable display. Displayed after the title. Should display cost and amount.

cost() {return new Decimal(2)} (required) Buyable cost. Typically has some sort of scaling based on the amount, typically using .pow().

effect() {return new Decimal(1.1)} (optional) Buyable effect. Also usually has some sort of scaling.

buy() {player[this.layer].points = player[this.layer].points.sub(this.cost())}: (required) [ADVANCED] Triggers when you buy the
buyable. Useful for adding to a value on purchase.

canAfford() {return true}: (required) Should return true if you can afford the buyable.

style: {height: "130px"}: (optional) [ADVANCED] Styling for the buyable, in the tabFormat format.
