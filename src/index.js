const Gamedig = require('gamedig');
let fs = require('fs')
const getRawServerStatus = function (type, ip, port) {
//	const types = ['tf2','csgo','css','garrysmod','cs16','dod','dods','hl2dm','hldm','hldms','left4dead','left4dead2','tfc']
//	if (types.includes(type)){
	const srv = Gamedig.query({type: type, host: ip, port: port}).then(state => {fs.writeFile('./RawServerStatus.json', JSON.stringify(state), err => { if (err) {console.log(err)}})})
	let filebuffer = fs.readFileSync('RawServerStatus.json', {encoding: 'utf8'});
	let returns = JSON.parse(filebuffer)
	return returns
}
//}
const ResolveSourceGame = function (folder) {
	let sourcegames = ['tf','csgo','css','garrysmod'];
	let names = ['Team Fortress 2', 'Counter-Strike: Global Offensive', 'Counter-Strike: Source', "Garry's Mod"];
	return names[sourcegames.indexOf(folder)]
	};
const getGameImage = function (game) {
	let sourcegames = ['Team Fortress 2', 'Counter-Strike: Global Offensive', 'Counter-Strike: Source', "Garry's Mod"];
	let images = ['https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/7ad21446-0af2-4334-ac21-c5a0b6308d04/d78kp9s-07d61235-7c6a-4faf-a76f-1b0b1bf8dfc4.png','https://i.imgur.com/JP5mOFP.png','https://cdn.discordapp.com/attachments/740914107653292134/754424775501152256/pngwing.com.png','https://logos-download.com/wp-content/uploads/2016/05/Garrys_Mod_logo_logotype_icon.png']
	return images[sourcegames.indexOf(game)]
}
module.exports = {
	getRawServerStatus: getRawServerStatus,
	ResolveSourceGame: ResolveSourceGame,
	getGameImage: getGameImage
}