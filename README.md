# source-server-status

This is a package to help with gamedig Source Engine and GoldSrc game servers(Only works with these)

Example:
```javascript
const helper = require('source-server-status')
helper.getServerState('csgo', '189.1.173.122', '27058', state => {
	console.log(state)
	helper.ResolveSourceGame(state.raw.folder, game => {  //returns Counter-Strike: Global Offensive
	console.log(game)
	console.log(helper.getRandomGame())// gets a random game from the list
	console.log(helper.getGameImage(game)) // give a GameName from ResolveSourceGame and gives an icon from the game
	})
})
```

| GameFolder | Game | Type(If different)
|---|---|---
| csgo | Counter-Strike: Global Offense
| cstrike | Counter-Strike 1.6
| css | Counter-Strike: Source | cs16
| dod | Day of Defeat
| dods | Day of Defeat: Source
| garrysmod | Garry's Mod
| hl2dm | Half-Life 2: Deathmatch
| hldm  | Half-Life Deathmatch
| hldms | Half-Life Deathmatch: Source
| left4dead | Left 4 Dead
| left4dead2 | Left 4 Dead 2
| tf2 | Team Fortress 2
| tfc | Team Fortress Classic
