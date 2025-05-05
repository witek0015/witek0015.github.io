```statblock
layout: Basic 5e Layout
image: 
name: White Dragon Wyrmling
size: Medium
type: dragon
subtype: chromatic
alignment: chaotic evil
ac: 16
hp: 32
hit_dice: 5d8+10
speed: "30 ft., burrow 15ft., fly 60 ft., swim 30 ft."
stats: [14, 10, 14, 5, 10, 11]
saves:
  - streght: 2
  - dexterity: 2
  - constitution: 2
  - intelligence: -3
  - wisdom: 2
  - charisma: 0
skillsaves:
  - perception: 4
  - stealth: 2
senses: "blindsight 10 ft., darkvision 60 ft., passive Perception 14"
languages: "Draconic"
damage_resistances: 
damage_immunities: "cold"
condition_immunities:
cr: 2
traits:
  - name: "Ice Walk"
    desc: "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, Difficult Terrain composed of ice or snow doesn't cost it extra movement."
actions:
  - name: Multiattack
    desc: "The dragon makes two Rend attacks."
  - name: Rend
    desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: `dice: 1d8+2` Slashing damage plus `dice: 1d4` Cold damage."
  - name: Cold Breath (Recharge 5–6).
    desc: "**Constitution Saving Throw**: DC 15, each creature in a 15-foot Cone. **Failure:** 22 (or `dice: 5d8`) Cold damage. **Success**: Half damage."
```