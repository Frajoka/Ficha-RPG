//VARIAVEIS GLOBAIS
var spans=document.querySelectorAll(".stats_span")
var stats_buttons=document.querySelectorAll(".stats_button")
var $info=document.querySelector("#info_div")
var $vida=document.querySelector("#vida")
var $armadura=document.querySelector("#armadura")
var $movimento=document.querySelector("#velocidade")
var $atrib=document.querySelector("#stats_div").children[1]
var $skills=spans
var $inventario=document.querySelector("#inventario")
var $magias=document.querySelector("#magias_div")
var img=""
var nome="nome"
var info="raca origem classe nivel"
var vida=99
var maxvida=99
var armadura=99
var movimento="99m(99q)"
var stats=[10,10,10,10,10,10]
var skills=[
	[10,10,10],
	[10,10,10,10,10],
	[10],
	[10,10,10,10,10,10,10],
	[10,10,10,10,10],
	[10,10,10,10,10]
]
var $anotas=document.querySelector("#anotas")
var anotas=''
var magias_atk=99
var magias_cd=99
var magias_lista=[
	['Luz','Mensagem','Raio de Fogo'],
	['Orbe Cromatica','Escudo Arcano'],
	['vou jogar na sua cobra','essa','magiasona FODA']
	
]
var magias_dia=[3,2]
var magias_usadas=[0]
var inventario=[
	{img:'../assets/favicon-client.png',nome:'nome',props:'propriedades',peso:99.99},
	{img:'../assets/shield.png',nome:'Escudo M&aacute;gicuzão',props:'Quando for atacado role 1d6, se cair 6 você devolve o dano que ia receber',peso:3.0}
]
var healing=false
var globaltemp
var taking=false
var trash=[]
var checkbox_magias=[]

//EVENTOS

window.onload=()=>{
	fetch("/personagem",{method:"GET",
	headers:{'Accept':'application/json'}})
		.then((res)=>{res.json()
			.then(data=>{
				img=data.img
				nome=data.nome
				info=data.info
				vida=data.vida
				maxvida=data.maxvida
				armadura=data.ca
				movimento=data.vel
				stats=data.atrib
				skills=data.skills
				anotas=data.anotas
				inventario=data.inventario
				magias_atk=data.magias_atk
				magias_cd=data.magias_cd
				magias_lista=data.magias_lista
				magias_dia=data.magias_dia
				magias_usadas=data.magias_usadas
				
				fillInfo()
				fillCombate()
				fillAtrib()
				fillAnotas()
				fillInventario()
				fillMagias()
			})
		})
	
	
}



document.addEventListener("click",(e)=>{
	for(var i=0;i<stats_buttons.length;i++){
		if(e.target==stats_buttons[i]){
			spans[i].style.display="block"
			spans[i].style.left=e.x + "px"
			spans[i].style.top=(e.y+window.scrollY) + "px"
		}
		else{
			spans[i].style.display="none"
		}
	}
},false)

document.addEventListener("mousemove",healDamage,false)
document.addEventListener("mouseup",endHealDamage,false)

document.addEventListener("scroll",(e)=>{
	document.querySelector("#filtro_de_tela").style.top=window.scrollY + "px"
},false)


//MEthodos
function changeCharPic(e){
	//COPIEI DA INTERNET HAHAHA
    var tgt = e.target,
    files = tgt.files;
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            document.querySelector("#info_img_div").children[0].src = fr.result;
			img=fr.result
        }
        fr.readAsDataURL(files[0]);
    }
}
function beginHealDamage(e){
	if(e.target==$vida.parentNode){
		healing=true
		if(e.touches){
			globaltemp=e.touches[0].clientX
		}
		else{
			globaltemp=e.clientX
		}
	}
}
function endHealDamage(){
	if(healing){
		postVida()
		healing=false
		$vida.style.color="black"
	}
}
function healDamage(e){
	if(healing){
		if(e.touches){
			if(e.touches[0].clientX<globaltemp &&  vida>0){
				$vida.style.color="red"
				vida-=.1
			}
			else if(e.touches[0].clientX>globaltemp && vida<maxvida){
				$vida.style.color="green"
				vida+=.1
			}
			globaltemp=e.touches[0].clientX
		}
		else{
			if(e.clientX<globaltemp &&  vida>0){
				$vida.style.color="red"
				vida-=.15
			}
			else if(e.clientX>globaltemp && vida<maxvida){
				$vida.style.color="green"
				vida+=.15
			}
			globaltemp=e.clientX
		}
		$vida.innerHTML=Math.floor(vida) +'/'+ maxvida
	}
}
function showChangeFiltro(){
	if(document.querySelector("#filtro_tela_slider").style.display!="block"){
		document.querySelector("#filtro_tela_slider").style.display="block"
		document.querySelector("#shower_filtro").style.display="inline-block"
	}
	else{
		document.querySelector("#filtro_tela_slider").style.display="none"
		document.querySelector("#shower_filtro").style.display="none"	
	}
}
function changeFiltro(){
	document.querySelector("#filtro_de_tela").style.opacity=document.querySelector("#filtro_tela_slider").value
}

//OS POST

function postAnotas(e){
	$anotas=e.target
	anotas=$anotas.value
	const init={
		method:'POST',
		headers:{
			'Content-Type':'application/json'
		},
		body:JSON.stringify({anotas})
	}
	
	fetch('/anotas',init)
		.then((res)=>{
			if(!res.ok){ 
				console.log(res)
			}
		})
}

function postVida(){
	var hp=Math.floor(vida)
	const init={
		method:'POST',
		headers:{
			'Content-Type':'application/json'
		},
		body:JSON.stringify({hp})
	}
	
	fetch('/vida',init)
		.then((res)=>{
			if(!res.ok){ 
				console.log(res)
			}
		})
}

function postInventario(){
	var items=inventario
	const init={
		method:'POST',
		headers:{
			'Content-Type':'application/json'
		},
		body:JSON.stringify({items})
	}
	
	fetch('/inventario',init)
		.then((res)=>{
			if(!res.ok){ 
				console.log(res)
			}
		})
}

function postMagias(e){
	if(e.target.checked){
		magias_usadas[Number(e.target.dataset.nivel)]++
	}
	else{
		magias_usadas[Number(e.target.dataset.nivel)]--
	}
	
	var mags=magias_usadas
	const init={
		method:'POST',
		headers:{
			'Content-Type':'application/json'
		},
		body:JSON.stringify({mags})
	}
	
	fetch('magias',init)
		.then((res)=>{
			if(!res.ok){ 
				console.log(res)
			}
		})
}




//OS FILL

function fillInfo(){
	document.querySelector("#info_img_div").children[0].src=img
	document.querySelector("#info_nome").innerHTML=nome
	document.querySelector("#info").innerHTML=info
}
function fillCombate(){
	$vida.innerHTML=vida + "/" + maxvida
	$armadura.innerHTML=armadura
	$movimento.innerHTML=movimento
	$armadura.innerHTML=armadura
}
function fillAtrib(){
	for(var i=0;i<6;i++){
		$atrib.children[i].children[1].innerHTML=stats[i]
		if(stats[i]<0){
			$atrib.children[i].children[1].style.color="red"
		}
		else{
			$atrib.children[i].children[1].style.color="black"
		}
		
		for(var j=0;j<$skills[i].children[0].children.length;j++){
			$skills[i].children[0].children[j].children[1].innerHTML=skills[i][j]
			if(skills[i][j]<0){
				$skills[i].children[0].children[j].children[1].style.color="red"
			}
			else{
				$skills[i].children[0].children[j].children[1].style.color="black"
			}
		}
	}
}
function fillInventario(){
	$inventario.textContent = '';
	for(var i=0;i<inventario.length;i++){
		var item_li=document.createElement("LI")
		var up_down_div=document.createElement("DIV")
		var up=document.createElement("BUTTON")
		var down=document.createElement("BUTTON")
		var img=document.createElement("IMG")
		var item=document.createElement("TEXTAREA")
		var close=document.createElement("BUTTON")
		
		up.innerHTML="^"
		down.innerHTML="v"
		img.src=inventario[i].img
		item.innerHTML=inventario[i].item
		close.innerHTML='X'
		
		up_down_div.setAttribute('class','up_down')
		up.setAttribute('class','up_down_buttons')
		down.setAttribute('class','up_down_buttons')
		img.setAttribute('class','item_img')
		item.setAttribute('class','item_text')
		up_down_div.setAttribute('data-index',i)
		item.setAttribute('data-index',i)
		close.setAttribute('class','close_button')
		
		item.contentEditable=true
		
		up.addEventListener('click',moveItemUp,false)
		down.addEventListener('click',moveItemDown,false)
		item.addEventListener('change',renameItem,false)
		close.addEventListener('click',removeItem,false)
		
		up_down_div.appendChild(up)
		up_down_div.appendChild(down)
		
		item_li.appendChild(up_down_div)
		item_li.appendChild(img)
		item_li.appendChild(item)
		item_li.appendChild(close)
		
		$inventario.appendChild(item_li)
	}
}
function fillAnotas(){
	$anotas.innerHTML=anotas
}

function fillMagias(){
	$magias.children[1].textContent = '';
	$magias.children[0].children[2].innerHTML=magias_atk
	$magias.children[0].children[4].innerHTML=magias_cd
	
	for(var i=0;i<magias_lista.length;i++){
		var newNivel=document.createElement("UL")
		
		var title_li=document.createElement("LI")
		var title=document.createElement("H3")
		title.innerHTML="N&iacute;vel "+i
		title_li.appendChild(title)
		if(i>0){
			checkbox_magias.push([])
			for(var j=0;j<magias_dia[i-1];j++){
				var check=document.createElement("INPUT")
				check.setAttribute('type','checkbox')
				check.setAttribute('data-nivel',i-1)
				checkbox_magias[i-1].push(check)
				check.addEventListener('change',postMagias,false)
				title_li.appendChild(check)
			}
			var check_temp=checkbox_magias[i-1]
			for(var j=0;j<magias_usadas[i-1];j++){
				check_temp[j].checked=true
			}
		}
		title_li.setAttribute('class',"magia_niveis")
		$magias.children[1].appendChild(title_li)
		for(var j=0;j<magias_lista[i].length;j++){
			var mag_li=document.createElement("LI")
			var mag=document.createElement("P")
			mag.innerHTML=magias_lista[i][j]
			if(i>0){
				var marcador=document.createElement("INPUT")
				marcador.setAttribute('type','checkbox')
				mag_li.appendChild(marcador)
			}
			mag_li.appendChild(mag)
			newNivel.appendChild(mag_li)
		}
		$magias.children[1].appendChild(newNivel)
	}
}


//OS CHANGE
function renameItem(e){
	inventario[e.target.dataset.index].item=e.target.value
	postInventario()
	fillInventario()
}

function addItem(){
	inventario.push({img:'../assets/default_item.png',item:"Nome\n  propriedades"})
	postInventario()
	fillInventario()
}
function moveItemUp(e){
	if(inventario[Number(e.target.parentNode.dataset.index)-1]){
		var temp0=inventario[Number(e.target.parentNode.dataset.index)]
		var temp1=inventario[Number(e.target.parentNode.dataset.index)-1]
		
		inventario[Number(e.target.parentNode.dataset.index)]=temp1
		inventario[Number(e.target.parentNode.dataset.index)-1]=temp0
		
		postInventario()
		fillInventario()
	}
}
function moveItemDown(e){
	if(inventario[Number(e.target.parentNode.dataset.index)+1]){
		var temp0=inventario[Number(e.target.parentNode.dataset.index)]
		var temp1=inventario[Number(e.target.parentNode.dataset.index)+1]
		
		inventario[Number(e.target.parentNode.dataset.index)]=temp1
		inventario[Number(e.target.parentNode.dataset.index)+1]=temp0
		
		postInventario()
		fillInventario()
	}
}

function removeItem(e){
	trash.push([e.target.parentNode.children[1].dataset.index,inventario[e.target.parentNode.children[2].dataset.index]])
	inventario.splice(Number(e.target.parentNode.children[2].dataset.index),1)
	postInventario()
	fillInventario()
}
function recoverItem(){
	if(trash.length>0){
		inventario.splice(trash[trash.length-1][0],0,trash[trash.length-1][1])
		trash.splice(trash.length-1,1)
		postInventario()
		fillInventario()
	}
}
