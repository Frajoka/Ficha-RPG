//Variaveis Globais
var vogais=['a','&acirc;','e','&ecirc;','i','y','o','&ocirc;','&oacute;','u','&uuml;','']
var plosivas=['b','p','k','g','t','d','kh','c','qh','qu','q']
var nasal=['m','n','nh']
var vibrantes=['br','r','rr']
var frictativas=['f','v','th','dh','s','z','h','&ccedil;','x','j']
var clicks=['bh','djh']

var linguagens=[
	'Anao',
	'Draconico',
	'Elfico',
	'Gigante',
	'Gnomico',
	'Halfling',
	'Orc',
	'Silvestre Florestal',
	'Silvestre Aquatico',
	'Subcomum'
]
var linguagens_exoticas=[
	'Abissal',
	'Celestial',
	'Infernal',
	'Terran',
	'Aquan',
	'Ignan',
	'Auran',
	'Feerico'
]



function randomName(lang){
	switch(lang){
		case 'Anao':
			var nome=''
			
			var array = []
			array=array.concat(plosivas)
			array=array.concat(nasal)
			array=array.concat(vibrantes)
			array=array.concat(frictativas)
			
			for(var i=0;i<Math.round(Math.random()*3)+1;i++){
				nome+= array[Math.round(Math.random()*(array.length-1))] + vogais[Math.round(Math.random()*(vogais.length-1))]
			}
			return nome.charAt(0).toUpperCase() + nome.slice(1)
			break
		case 'Draconico':
			var nome=''
			
			var array = []
			array=array.concat(plosivas)
			array=array.concat(vibrantes)
			array=array.concat(vibrantes)
			array=array.concat(frictativas)
			
			for(var i=0;i<Math.round(Math.random()*3)+1;i++){
				nome+= array[Math.round(Math.random()*(array.length-1))] + vogais[Math.round(Math.random()*(vogais.length-1))]
			}
			return nome.charAt(0).toUpperCase() + nome.slice(1)
			break
		case 'Elfico':
			var nome=''
			
			var array = []
			array=array.concat(nasal)
			array=array.concat(frictativas)
			
			for(var i=0;i<Math.round(Math.random()*3)+1;i++){
				nome+= array[Math.round(Math.random()*(array.length-1))] + vogais[Math.round(Math.random()*(vogais.length-1))]
			}
			return nome.charAt(0).toUpperCase() + nome.slice(1)
			break
		case 'Gigante':
			var nome=''
			
			var array = []
			array=array.concat(plosivas)
			array=array.concat(vibrantes)
			array=array.concat(vibrantes)
			array=array.concat(frictativas)
			
			for(var i=0;i<Math.round(Math.random()*3)+1;i++){
				nome+= array[Math.round(Math.random()*(array.length-1))] + vogais[Math.round(Math.random()*(vogais.length-1))]
			}
			return nome.charAt(0).toUpperCase() + nome.slice(1)
			break
		case 'Gnomico':
			var nome=''
			
			var array = []
			array=array.concat(plosivas)
			array=array.concat(nasal)
			array=array.concat(nasal)
			array=array.concat(nasal)
			array=array.concat(vibrantes)
			array=array.concat(frictativas)
			
			for(var i=0;i<Math.round(Math.random()*3)+1;i++){
				nome+= array[Math.round(Math.random()*(array.length-1))] + vogais[Math.round(Math.random()*(vogais.length-1))]
			}
			return nome.charAt(0).toUpperCase() + nome.slice(1)
			break
		case 'Halfling':
			var nome=''
				
			var array = []
			array=array.concat(nasal)
			array=array.concat(vibrantes)
			array=array.concat(frictativas)
			
			for(var i=0;i<Math.round(Math.random()*3)+1;i++){
				nome+= array[Math.round(Math.random()*(array.length-1))] + vogais[Math.round(Math.random()*(vogais.length-1))]
			}
			return nome.charAt(0).toUpperCase() + nome.slice(1)
			break
		case 'Orc':
			var nome=''
				
			var array = []
			array=array.concat(plosivas)
			array=array.concat(plosivas)
			array=array.concat(clicks)
			array=array.concat(nasal)
			array=array.concat(vibrantes)
			array=array.concat(vibrantes)
			array=array.concat(frictativas)
			
			for(var i=0;i<Math.round(Math.random()*3)+1;i++){
				nome+= array[Math.round(Math.random()*(array.length-1))] + vogais[Math.round(Math.random()*(vogais.length-1))]
			}
			return nome.charAt(0).toUpperCase() + nome.slice(1)
			break
		case 'Silvestre Florestal':
			var nome=''
			
			var array = []
			array=array.concat(plosivas)
			array=array.concat(plosivas)
			array=array.concat(vibrantes)
			array=array.concat(frictativas)
			array=array.concat(['s','s','s','s','s'])
			
			for(var i=0;i<Math.round(Math.random()*3)+1;i++){
				nome+= array[Math.round(Math.random()*(array.length-1))] + vogais[Math.round(Math.random()*(vogais.length-1))]
			}
			return nome.charAt(0).toUpperCase() + nome.slice(1)
			break
		case 'Silvestre Aquatico':
			var nome=''
			
			var array = []
			array=array.concat(plosivas)
			array=array.concat(plosivas)
			array=array.concat(vibrantes)
			array=array.concat(frictativas)
			
			var l=['','l','l','l','l','l']
			l=l[Math.round(Math.random()*(l.length-1))]
			for(var i=0;i<Math.round(Math.random()*3)+1;i++){
				nome+= array[Math.round(Math.random()*(array.length-1))]+ l + vogais[Math.round(Math.random()*(vogais.length-1))]
			}
			return nome.charAt(0).toUpperCase() + nome.slice(1)
			break
		case 'Subcomum':
			var nome=''
			
			var array = []
			array=array.concat(plosivas)
			array=array.concat(nasal)
			array=array.concat(vibrantes)
			array=array.concat(frictativas)
			
			var vogaiss=vogais.concat(['u','u','u','u','o','o','o','o'])
			for(var i=0;i<Math.round(Math.random()*3)+1;i++){
				nome+= array[Math.round(Math.random()*(array.length-1))] + vogaiss[Math.round(Math.random()*(vogais.length-1))]
			}
			return nome.charAt(0).toUpperCase() + nome.slice(1)
			break
		case 'Abissal':
			var nome=''
			
			var array = []
			array=array.concat(plosivas)
			array=array.concat(clicks)
			array=array.concat(vibrantes)
			
			var vogaiss= ['u','u','u','u','o','o','o','o']
			for(var i=0;i<Math.round(Math.random()*3)+1;i++){
				nome+= array[Math.round(Math.random()*(array.length-1))] + vogaiss[Math.round(Math.random()*(vogais.length-1))]
			}
			return nome.charAt(0).toUpperCase() + nome.slice(1)
			break
		case 'Celestial':
			var nome=''
			
			var array = []
			array=array.concat(plosivas)
			array=array.concat(nasal)
			array=array.concat(vibrantes)
			array=array.concat(frictativas)
			
			var vogaiss=vogais.concat(['a','a','a','a','a','a'])
			for(var i=0;i<Math.round(Math.random()*3)+1;i++){
				nome+= array[Math.round(Math.random()*(array.length-1))] + vogais[Math.round(Math.random()*(vogais.length-1))]
			}
			return nome.charAt(0).toUpperCase() + nome.slice(1)
			break
		case 'Infernal':
			var nome=''
			
			var array = []
			array=array.concat(plosivas)
			array=array.concat(plosivas)
			array=array.concat(nasal)
			array=array.concat(vibrantes)
			array=array.concat(frictativas)
			
			for(var i=0;i<Math.round(Math.random()*3)+1;i++){
				nome+= array[Math.round(Math.random()*(array.length-1))] + vogais[Math.round(Math.random()*(vogais.length-1))]
			}
			return nome.charAt(0).toUpperCase() + nome.slice(1)
			break
		case 'Terran':
			var nome=''
			
			var array = []
			array=array.concat(plosivas)
			array=array.concat(vibrantes)
			array=array.concat(clicks)
			
			var vogaiss= ['u','u','u','u','o','o','o','o']
			for(var i=0;i<Math.round(Math.random()*3)+1;i++){
				nome+= array[Math.round(Math.random()*(array.length-1))] + vogaiss[Math.round(Math.random()*(vogais.length-1))]
			}
			return nome.charAt(0).toUpperCase() + nome.slice(1)
			break
		case 'Aquan':
			var nome=''
			
			var array = []
			array=array.concat(plosivas)
			array=array.concat(plosivas)
			array=array.concat(vibrantes)
			array=array.concat(frictativas)
			
			var l=['','l','l','l','l','l']
			l=l[Math.round(Math.random()*(l.length-1))]
			for(var i=0;i<Math.round(Math.random()*3)+1;i++){
				nome+= array[Math.round(Math.random()*(array.length-1))]+ l + vogais[Math.round(Math.random()*(vogais.length-1))]
			}
			return nome.charAt(0).toUpperCase() + nome.slice(1)
			break
		case 'Ignan':
			var nome=''
			
			var array = []
			array=array.concat(plosivas)
			array=array.concat(plosivas)
			array=array.concat(vibrantes)
			array=array.concat(frictativas)
			
			var vogaiss=vogais.concat(['','','','','','',''])
			for(var i=0;i<Math.round(Math.random()*3)+1;i++){
				nome+= array[Math.round(Math.random()*(array.length-1))] + vogaiss[Math.round(Math.random()*(vogais.length-1))]
			}
			return nome.charAt(0).toUpperCase() + nome.slice(1) + nome.slice(1)
			break
		case 'Auran':
			var nome=''
			var array = ['la','le','li','ly','lo','l&ocirc;','lu','luh']
			for(var i=0;i<Math.round(Math.random()*3)+1;i++){
				nome+= array[Math.round(Math.random()*(array.length-1))]
			}
			return nome.charAt(0).toUpperCase() + nome.slice(1) + nome.slice(1)
			break
		case 'Feerico':
			var nome=''
			
			var array = []
			array=array.concat(plosivas)
			array=array.concat(['s','s','s'])
			array=array.concat(vibrantes)
			array=array.concat(vibrantes)
			array=array.concat(frictativas)
			
			for(var i=0;i<Math.round(Math.random()*3)+1;i++){
				nome+= array[Math.round(Math.random()*(array.length-1))] + vogais[Math.round(Math.random()*(vogais.length-1))]
			}
			return nome.charAt(0).toUpperCase() + nome.slice(1) + nome.slice(1)
			break
		case 'linguagem':
			return randomName(linguagens[Math.round(Math.random()*(linguagens.length-1))])
			break
		case 'linguagem exotica':
			return randomName(linguagens_exoticas[Math.round(Math.random()*(linguagens_exoticas.length-1))])
			break
	}
}
module.exports=randomName