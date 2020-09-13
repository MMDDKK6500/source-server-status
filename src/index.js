const Gamedig = require('gamedig');
const getServerState = function (type, ip, port, callback) {
Gamedig.query({type: type, host: ip, port: port})
.then((state) => {callback(state)})
.catch((error) => {callback(error)});
}

const ResolveSourceGame = function (GameFolder, callback) {
	let sourcegames = ['tf2','csgo','css','garrysmod','cstrike','dod','dods','hl2dm','hldm','hldms','left4dead','left4dead2','tfc']
	let names = ['Team Fortress 2', 'Counter-Strike: Global Offensive', 'Counter-Strike: Source', "Garry's Mod",'Counter-Strike','Day of Defeat','Day of Defeat: Source','Half-Life 2: Deathmatch','Half-Life: Deathmatch','Half-Life: Deathmatch: Source','Left 4 Dead', 'Left 4 Dead 2', 'Team Fortress Classic'];
	if (sourcegames.indexOf(GameFolder)===-1) {
		callback("That's not a supported game!")
	}else if(sourcegames.indexOf(GameFolder)!==-1){
		callback(names[sourcegames.indexOf(GameFolder)])
	}
}
const getGameImage = function (game) {
	let sourcegames = ['Team Fortress 2', 'Counter-Strike: Global Offensive', 'Counter-Strike: Source', "Garry's Mod",'Counter-Strike','Day of Defeat','Day of Defeat: Source','Half-Life 2: Deathmatch','Half-Life: Deathmatch','Half-Life: Deathmatch: Source','Left 4 Dead', 'Left 4 Dead 2', 'Team Fortress Classic'];
	let images = ['https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7ad21446-0af2-4334-ac21-c5a0b6308d04/d78kp9s-07d61235-7c6a-4faf-a76f-1b0b1bf8dfc4.png','https://i.imgur.com/JP5mOFP.png','https://cdn.discordapp.com/attachments/740914107653292134/754424775501152256/pngwing.com.png','https://logos-download.com/wp-content/uploads/2016/05/Garrys_Mod_logo_logotype_icon.png', 'https://icons.iconarchive.com/icons/hopstarter/software/256/Counter-Strike-icon.png','https://cdn.discordapp.com/attachments/653410062366146571/754760391736950856/d5ug0l2-2395dfcc-994e-48ca-a902-3731b3ce4fcc.png','https://cdn.discordapp.com/attachments/653410062366146571/754760391736950856/d5ug0l2-2395dfcc-994e-48ca-a902-3731b3ce4fcc.png','https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Half-Life_2_Logo.svg/1184px-Half-Life_2_Logo.svg.png','https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Half-Life_2_Logo.svg/1184px-Half-Life_2_Logo.svg.png','https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Half-Life_2_Logo.svg/1184px-Half-Life_2_Logo.svg.png','https://icon-library.com/images/left-4-dead-icon/left-4-dead-icon-24.jpg','https://cdn.discordapp.com/attachments/653410062366146571/754761284456677457/pngbarn.png']
	return images[sourcegames.indexOf(game)]
}
const getRandomGame = function () {
	let names = ['Team Fortress 2', 'Counter-Strike: Global Offensive', 'Counter-Strike: Source', "Garry's Mod",'Counter-Strike','Day of Defeat','Day of Defeat: Source','Half-Life 2: Deathmatch','Half-Life: Deathmatch','Half-Life: Deathmatch: Source','Left 4 Dead', 'Left 4 Dead 2', 'Team Fortress Classic'];
	var rnumber = Math.floor(Math.random() * (12 - 0 + 1)) + 0;
	return names[rnumber]
}
module.exports = {
	getServerState: getServerState,
	getRandomGame: getRandomGame,
	ResolveSourceGame: ResolveSourceGame,
	getGameImage: getGameImage
}