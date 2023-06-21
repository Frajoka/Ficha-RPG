var $players=document.querySelectorAll(".player")
var $players_stats=document.querySelectorAll(".atributos")
var $players_inventario=document.querySelectorAll(".inventario")
var $players_magias=document.querySelectorAll(".magias")
var $players_div=document.querySelector("#players")

var jogadores=[]

//Eventos
document.addEventListener('click',(e)=>{
	var foi=false
	for(var i=0;i<$players.length;i++){
		if(e.target==$players[i] || 
		e.target==$players[i].children[0] || 
		e.target==$players[i].children[1] ||
		e.target==$players[i].children[3] ||
		e.target==$players[i].children[4] ||
		e.target==$players[i].children[5] ||
		e.target==$players[i].children[6]
		){
			showPlayerInfo(i)
			foi=true
		}
	}
	if(!foi){
		vanishPlayers()
	}
},false)

//Fetches
fetch('jogadores',{
	method:"GET",
	headers:{"Accept":'application/json'}
})
	.then(res=>{
		if(res.ok){
			res.json()
			.then(data=>{
				jogadores=data
				
				document.querySelector("#player_num").innerHTML=jogadores.length
				
				fillJogadores()
			})
		}
		else{console.log(res.text)}
	})



//Methods
function salvarPlayersSessao(){
	fetch('/salvarSessao',{
	method:"POST",
	headers:{"Content-Type":'application/json'},
	body:JSON.stringify({jogadores})
})
	.then(res=>{
		if(res.ok){
			alert("Salvo")
		}
		else{console.log(res.text)}
	})

}

function salvarPlayersDB(){
	fetch('/salvarDB',{
	method:"POST",
	headers:{"Content-Type":'application/json'},
	body:JSON.stringify({jogadores})
})
	.then(res=>{
		if(res.ok){
			alert("Salvo")
		}
		else{console.log(res.text)}
	})

}

function fillJogadores(){
	for(var i=0;i<jogadores.length;i++){
		var div=document.createElement("DIV")
		div.setAttribute('class','player')
		
		var img=document.createElement("IMG")
		img.setAttribute('class','pic')
		
		var nome_info_div=document.createElement("DIV")
		nome_info_div.setAttribute('class','nome_info')
		
		var span_vida=document.createElement("SPAN")
		var span_ca=document.createElement("SPAN")
		
		span_vida.setAttribute('class','hp_div')
		span_ca.setAttribute('class','ca_div')
		
		var stats_div=document.createElement("DIV")
		stats_div.setAttribute('class','atributos')
		
		var inventario_div=document.createElement("DIV")
		inventario_div.setAttribute('class','inventario')
		
		var magias_div=document.createElement("DIV")
		magias_div.setAttribute('class','magias')
		
		img.src=jogadores[i].img
		
		
		fillInfo(nome_info_div,jogadores[i])
		fillCombate(span_vida,span_ca,jogadores[i])
		fillAtrib(stats_div,jogadores[i])
		fillInventario(inventario_div,jogadores[i])
		fillMagias(magias_div,jogadores[i])
		
		
		div.appendChild(img)
		div.appendChild(nome_info_div)
		div.appendChild(document.createElement("BR"))
		div.appendChild(span_vida)
		div.appendChild(span_ca)
		div.appendChild(stats_div)
		div.appendChild(inventario_div)
		div.appendChild(magias_div)
		
		$players_div.appendChild(div)
		
		
		$players=document.querySelectorAll(".player")
		$players_stats=document.querySelectorAll(".atributos")
		$players_inventario=document.querySelectorAll(".inventario")
		$players_magias=document.querySelectorAll(".magias")
		
	}
}

function fillInfo(elemento,jogador){
	var nome=document.createElement("H4")
	var info=document.createElement("P")
	
	nome.setAttribute('class','nome')
	info.setAttribute('class','info')
	
	nome.innerHTML=jogador.nome
	info.innerHTML=jogador.info
	
	elemento.appendChild(nome)
	elemento.appendChild(info)
}


function fillCombate(elemento_vida,elemento_ca,jogador){
	var vida=document.createElement("P")
	var armadura=document.createElement("P")
	
	vida.setAttribute('class','vida')
	armadura.setAttribute('class','armadura')
	
	vida.innerHTML=jogador.vida+'/'+jogador.maxvida
	armadura.innerHTML=jogador.ca
	
	elemento_vida.appendChild(vida)
	elemento_ca.appendChild(armadura)
}

function fillAtrib(elemento,jogador){
	var nome=document.createElement("H4")
	var stats=document.createElement("UL")
	
	var for_li=document.createElement("LI")
	var des_li=document.createElement("LI")
	var con_li=document.createElement("LI")
	var int_li=document.createElement("LI")
	var sab_li=document.createElement("LI")
	var car_li=document.createElement("LI")
	
	var for_p1=document.createElement("P")
	var des_p1=document.createElement("P")
	var con_p1=document.createElement("P")
	var int_p1=document.createElement("P")
	var sab_p1=document.createElement("P")
	var car_p1=document.createElement("P")
	
	var for_p2=document.createElement("P")
	var des_p2=document.createElement("P")
	var con_p2=document.createElement("P")
	var int_p2=document.createElement("P")
	var sab_p2=document.createElement("P")
	var car_p2=document.createElement("P")
	
	
	nome.innerHTML="Atributos"
	
	for_p1.innerHTML="For&ccedil;a"
	des_p1.innerHTML="Destresa"
	con_p1.innerHTML="Constitui&ccedil;&atilde;o"
	int_p1.innerHTML="Intelig&ecirc;ncia"
	sab_p1.innerHTML="Sabedoria"
	car_p1.innerHTML="Carisma"
	
	for_p2.innerHTML=jogador.atrib[0]
	des_p2.innerHTML=jogador.atrib[1]
	con_p2.innerHTML=jogador.atrib[2]
	int_p2.innerHTML=jogador.atrib[3]
	sab_p2.innerHTML=jogador.atrib[4]
	car_p2.innerHTML=jogador.atrib[5]
	
	
	for_li.appendChild(for_p1)
	for_li.appendChild(for_p2)
	
	des_li.appendChild(des_p1)
	des_li.appendChild(des_p2)
	
	con_li.appendChild(con_p1)
	con_li.appendChild(con_p2)
	
	int_li.appendChild(int_p1)
	int_li.appendChild(int_p2)
	
	sab_li.appendChild(sab_p1)
	sab_li.appendChild(sab_p2)
	
	car_li.appendChild(car_p1)
	car_li.appendChild(car_p2)
	
	stats.appendChild(for_li)
	stats.appendChild(des_li)
	stats.appendChild(con_li)
	stats.appendChild(int_li)
	stats.appendChild(car_li)
	
	elemento.appendChild(nome)
	elemento.appendChild(stats)
	
}
function fillInventario(elemento,jogador){
	var nome=document.createElement("H4")
	var inventario=document.createElement("UL")
	
	nome.innerHTML="Invent&aacute;rio"
	
	for(var i=0;i<jogador.inventario.length;i++){
		var item=document.createElement("LI")
		
		item.innerHTML=jogador.inventario[i].item
		
		inventario.appendChild(item)
	}
	
	elemento.appendChild(nome)
	elemento.appendChild(inventario)
}
function fillMagias(elemento,jogador){
	var nome=document.createElement("H4")
	var magias=document.createElement("UL")
	
	nome.innerHTML="Magias"
	
	for(var i=0;i<jogador.magias_lista.length;i++){
		var nivel=document.createElement("LI")
		
		var temp=jogador.magias_usadas
		
		for(var j=0;j<jogador.magias_dia[i];j++){
			if(temp>0){
				nivel.innerHTML+='[X]'
				temp--
			}
			else{
				nivel.innerHTML+='[ ]'
			}
		}
		
		magias.appendChild(nivel)
	}
	
	elemento.appendChild(nome)
	elemento.appendChild(magias)
}

function showPlayerInfo(i){
	if($players_stats[i].style.display="none"){
		$players_stats[i].style.display="block"
		$players_inventario[i].style.display="block"
		$players_magias[i].style.display="block"
	}
}

function showHidden(){
	if(document.querySelector('#hidden').style.display=='block'){
		document.querySelector('#showHidden').innerHTML="&darr;"
		document.querySelector('#hidden').style.display='none'
	}
	else{
		document.querySelector('#showHidden').innerHTML="&uarr;"
		document.querySelector('#hidden').style.display='block'
	}
}

function vanishPlayers(){
	for(var i=0;i<$players.length;i++){
		$players_stats[i].style.display="none"
		$players_inventario[i].style.display="none"
		$players_magias[i].style.display="none"
	}
}