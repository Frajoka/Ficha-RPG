//importacoes
const express=require("express")
const fs=require("fs")
var db=require("./data_base.js")
var jidn=require("./JIDN.js")
const randomPlayer=require("./randomPlayer.js")
const HOST='192.168.1.118'

//Iniciando o apps
var app=express()
app.use(express.json())

//Lista de jogadores logados
var jogadores=[]
var fichas_fora_db={}

//ip do mestre
var dm_ip=HOST
var testIP=''

//Methodos

//retorna um player.json a partir de um ip
function getPlayer(ip,c){
	for(var i=0;i<db.length;i++){
		if(db[i].id==jidn[ip]){
			return db[i]
		}
	}
	if(c=='p'){
		jidn[ip]=db.length
		var ret=randomPlayer()
		fichas_fora_db[ip]=ret
		return ret
	}
	else if(c=="m"){
		if(fichas_fora_db[ip]){
			return fichas_fora_db[ip]
		}
	}
}

//OOO SSS  GGG  EEE TTT
//O O S    G    EE   T
//O O   S  G G  E    T
//OOO SSS  GGG  EEE  T

//ENVIANDO INDEX.HTML AO CLIENT
app.get('/',(req,res)=>{
	if(req.socket.remoteAddress == dm_ip || req.socket.remoteAddress == testIP){
		var index=fs.readFileSync('../dashboard/index.html',{encoding:"utf-8"})
	}
	else{
		var index=fs.readFileSync('../client/index.html',{encoding:"utf-8"})
		
		var pode=true
		
		for(var i=0;i<jogadores.length;i++){
			if(jogadores[i]==req.socket.remoteAddress){
				pode=false
			}
		}
		if(pode){
			jogadores.push(req.socket.remoteAddress)
		}
	}
	
	res.statusCode=200
	res.send(index)
	res.end()
	
	console.log('Enviado index.html ao Cliente ---',req.socket.remoteAddress)
})

//PEDIDO DE player.json
app.get("/personagem",(req,res)=>{
	res.statusCode=200
	res.json(getPlayer(req.socket.remoteAddress,'p'))
	res.end()
})

//ENVIANDO JOGADORES AO MESTRE
app.get("/jogadores",(req,res)=>{
	res.statusCode=200
	if(jogadores.length==0){
		res.json([])
		res.end()
	}
	else{
		index=[]
		for(var i=0;i<jogadores.length;i++){
			index.push(getPlayer(jogadores[i],'m'))
		}
		res.json(index)
		res.end()
	}
})

//ENVIANDO favincon.png AO CLIENT
app.get('/assets/favicon-client.png',(req,res)=>{
	var index=fs.readFileSync('../assets/favicon-client.png')
	
	res.statusCode=200
	res.send(index)
	res.end()
	
	console.log('Enviado favicon.png ao Cliente ---',req.socket.remoteAddress)
})

//ENVIANDO favincon.png AO MESTRE
app.get('/assets/favicon-dm.jpg',(req,res)=>{
	var index=fs.readFileSync('../assets/favicon-dm.jpg')
	
	res.statusCode=200
	res.send(index)
	res.end()
	
	console.log('Enviado favicon.png ao Cliente ---',req.socket.remoteAddress)
})

//ENVIANDO MAIN.JS AO CLIENT
app.get('/main.js',(req,res)=>{
	if(req.socket.remoteAddress == dm_ip || req.socket.remoteAddress == testIP){
		var index=fs.readFileSync('../dashboard/main.js',{encoding:"utf-8"})
	}
	else{
		var index=fs.readFileSync('../client/main.js')
	}
	
	res.statusCode=200
	res.send(index)
	res.end()
	
	console.log('Enviado main.js ao Cliente ---',req.socket.remoteAddress)
})

//ENVIANDO colors.png AO CLIENT
app.get('/assets/colors.png',(req,res)=>{
	var index=fs.readFileSync('../assets/colors.png')
	
	res.statusCode=200
	res.send(index)
	res.end()
	
	console.log('Enviado colors.png ao Cliente ---',req.socket.remoteAddress)
})

//ENVIANDO heart.png AO CLIENT
app.get('/assets/heart.png',(req,res)=>{
	var index=fs.readFileSync('../assets/heart.png')
	
	res.statusCode=200
	res.send(index)
	res.end()
	
	console.log('Enviado heart.png ao Cliente ---',req.socket.remoteAddress)
})

//ENVIANDO shield.png AO CLIENT
app.get('/assets/shield.png',(req,res)=>{
	var index=fs.readFileSync('../assets/shield.png')
	
	res.statusCode=200
	res.send(index)
	res.end()
	
	console.log('Enviado shield.png ao Cliente ---',req.socket.remoteAddress)
})

//ENVIANDO boot.png AO CLIENT
app.get('/assets/boot.png',(req,res)=>{
	var index=fs.readFileSync('../assets/boot.png')
	
	res.statusCode=200
	res.send(index)
	res.end()
	
	console.log('Enviado boot.png ao Cliente ---',req.socket.remoteAddress)
})

//ENVIANDO default_item.png AO CLIENT
app.get('/assets/default_item.png',(req,res)=>{
	var index=fs.readFileSync('../assets/default_item.png')
	
	res.statusCode=200
	res.send(index)
	res.end()
	
	console.log('Enviado default_item.png ao Cliente ---',req.socket.remoteAddress)
})

//OOO   SSS   PPP  OOO  
//O  O S      P  P O  O
//O  O  SS    PPP  O  O
//O  O    S   P    O  O
//OOOO SSS    P    OOOO

app.post("/anotas",(req,res)=>{
	if(jidn[req.socket.remoteAddress]!=undefined){
		getPlayer(req.socket.remoteAddress).anotas=req.body.anotas
		res.statusCode=200
		res.end()
	}
	else{
		res.statusCode=400
		res.send("Usuario nao cadastrado no banco de dados")
		res.end()
	}
})

app.post("/vida",(req,res)=>{
	if(jidn[req.socket.remoteAddress]!=undefined){
		getPlayer(req.socket.remoteAddress).vida=req.body.hp
		res.statusCode=200
		res.end()
	}
	else{
		res.statusCode=400
		res.send("Usuario nao cadastrado no banco de dados")
		res.end()
	}
})

app.post("/inventario",(req,res)=>{
	if(jidn[req.socket.remoteAddress]!=undefined){
		getPlayer(req.socket.remoteAddress).inventario=req.body.items
		res.statusCode=200
		res.end()
	}
	else{
		res.statusCode=400
		res.send("Usuario nao cadastrado no banco de dados")
		res.end()
	}
})

app.post("/magias",(req,res)=>{
	if(jidn[req.socket.remoteAddress]!=undefined){
		getPlayer(req.socket.remoteAddress).magias_usadas=req.body.mags
		res.statusCode=200
		res.end()
	}
	else{
		res.statusCode=400
		res.send("Usuario nao cadastrado no banco de dados")
		res.end()
	}
})

app.post("/salvarSessao",(req,res)=>{
	for(var i=0;i<req.body.jogadores.length;i++){
		delete fichas_fora_db[req.socket.remoteAddress]
		req.body.jogadores[i].id=db.length
		jidn[req.socket.remoteAddress]=db.length
		db.push(req.body.jogadores[i])
	}
})
app.post("/salvarDB",(req,res)=>{
	for(var i=0;i<req.body.jogadores.length;i++){
		delete fichas_fora_db[req.socket.remoteAddress]
		req.body.jogadores[i].id=db.length
		jidn[req.socket.remoteAddress]=db.length
		db.push(req.body.jogadores[i])
	}
	fs.writeFileSync('data_base.js','var DB='+JSON.stringify(db)+'\nmodule.exports = DB',{encoding:'utf-8',flag:'w+'})
})



//RODANDO O SERVIDOR
app.listen(8000,HOST,()=>{console.log("Servindo Localmente ---",HOST)})
