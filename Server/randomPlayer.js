//Importacoes
var randomName=require("./randomName.js")

//Cria uma Ficha Aleatoria
function randomPlayer(){
    var origens=[
      'Acolito',
      'Andarilho',
      'Artesao',
      'Artista',
      'Charlatao',
      'Criminoso',
      'Cultista',
      'Fazendeiro',
      'Moleque',
      'Militar',
      'Nobre',
      'Professor',
      'Sobrevivente'
    ]
    var racas=[
      'Aarokocra',
      'Anao',
      'Automato',
      'Celestin',
      'Centauro',
      'Draconato',
      'Elfo',
      'Feerico',
      'Genasi',
      'Goliah',
      'Gnomo',
      'Halfling',
      'Kaisier',
      'Laarz',
      'Morto-Vivo',
      'Orc',
      'Naja',
      'Sereia/Tritao',
      'Tabaxi'
    ]
    var classes=[
      'Barbaro',
      'Bardo',
      'Bruxo',
      'Clerigo',
      'Druida',
      'Fabricante',
      'Feiticeiro',
      'Guerreiro',
      'Ladino',
      'Mago',
      'Monge',
      'Paladino',
      'Patrulheiro'
    ]
	
	var racasFeericas=[
		'Bullywug',
		'Centauro',
		'Changeling',
		'Driade',
		'Minotauro',
		'Naja',
		'Pixie',
		'Satiro',
		'Sereia',
		'Sprite'
	]
	
	var origemr=origens[Math.round(Math.random()*(origens.length-1))]
	var racar=racas[Math.round(Math.random()*(racas.length-1))]
	var classer=classes[Math.round(Math.random()*(classes.length-1))]
	
	
	var linguagens='Linguagens:Comum'
	var tracosOrigem=''
	var tracosRaca=''
	var tracosClasse=''
	
    var jogas={
		id:0,
		img:'',
		nome:'Aleatorio',
		info:origemr+' '+ 
		racar+' '+
		classer+' 1',
		vida:0,
		maxvida:0,
		ca:0,
		vel:'9m(6q)',
		atrib:[0,0,0,0,0,0],
		skills:[
			[0,0],
			[0,0,0,0,0],
			[0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0],
			[0,0,0,0,0]
		],
		anotas:'',
		inventario:[],
		magias_atk:1,
		magias_cd:1,
		magias_lista:[[],[]],
		magias_dia:[0,0],
		magias_usadas:[0]
	}
	
	
	switch(racar){
		case 'Aarokocra':
			linguagens=linguagens+', Auran'
			tracosRaca='\n\nTracos Raciais:\n  Voo(1 hora)[]\n  Garras 1d4 cortante/perfurante\n  Percepcao Agucada: +2'
			
			jogas.skills[4][2]+=2
			
			jogas.inventario.push({img:'',item:'Garras\n   1d4 cortante/perfurante'})
			
			jogas.vel="9m(6q)"
			
			break
		case 'Anao':
			linguagens=linguagens+', Anoes'
			tracosRaca='\n\nTracos Raciais:\n  Visao no Escuro\n  Resiliencia Ana:\n    Resistencia contra venenos'
			
			jogas.vel="7,5(5q)"
			
			break
		case 'Automato':
			linguagens=linguagens+', Linguagem de seu criador'
			tracosRaca='\n\nTracos Raciais:\n  Resistencia contra venenos\n  Imune contra doencas\n  vulneravel contra eletricidade/fogo\n  Objeto Andante:\n    Voce pode ser curado pela magia Conserto'
			
			jogas.vel="9m(6q)"
			
			break
		case 'Celestin':
			linguagens=linguagens+', Celestial'
			tracosRaca='\n\nTracos Raciais:\n  Resistencia contra dano Radiante e Necrotico\n  Magia Inata:\n    2 truques e 1 magia nivel 1\n  Maos Curativas:[]\n    voce cura 1 de vida'
			
			jogas.vel="9m(6q)"
			
			break
		case 'Centauro':
			linguagens=linguagens+', Silvestre Florestal'
			tracosRaca='\n\nTracos Raciais:\n  Investida:\n    Voce sai correndo numa linha e ataca todo mundo na frente\n  Coice for+1 Impacto\n  Corpo Equino'
			
			jogas.inventario.push({img:'',item:'Coice\n   for+1 Impacto'})
			
			jogas.vel="12m(8q)"
			
			break
		case 'Draconato':
			linguagens=linguagens+', Draconico'
			tracosRaca='\n\nTracos Raciais:\n  Arma de Sopro CD 10+con 2d6\n  Resistencia(depende da sua cor)'
			
			jogas.inventario.push({img:'',item:'Arma de Sopro\n   CD 10+con 2d6'})
			
			jogas.vel="9m(6q)"
			
			break
		case 'Elfo':
			linguagens=linguagens+', Elfico'
			tracosRaca='\n\nTracos Raciais:\n  Visao no escuro\n  Transe:\n    Nao pode ser colocado para dormir'
			
			jogas.vel="9m(6q)"
			
			break
		case 'Feerico':
			linguagens=linguagens+', Feerico'
			tracosRaca='\n\nTracos Raciais:\n  Magia Inata:\n    2 truques e 1 magia nivel 1\n  Resistencia contra Magia'
			
			racar=racasFeericas[Math.round(Math.random()*(racasFeericas.length-1))]
			
			jogas.vel="9m(6q)"
			
			switch(racar){
				case 'Bullywug':
					tracosRaca+='\n  Corpo Acido:\n    Se alguem te atacar com arma corpo-a-corpo ele toma con de dano acido \n  voce sabe usar Espirro Acido'
					
					jogas.magias_lista[0].push('Espirro Acido')
					
					break
				case 'Centauro':
					tracosRaca+='\n  Corpo Equino\n  Falar com Animais'
					
					jogas.vel='12m(8q)'
					
					break
				case 'Changeling':
					tracosRaca+='\n  Disfarsar-se\n    1 tamanho acima:+2d6 vida/+1for/-1des/-.5 vel\n    1 tamanho abaixo:-2d6 vida/-1for/+1des/+.5 vel\n  Ecletico:car vezes\n    Pode usar sua malandragem ao inves de qualquer teste que nao seja ataque'
					break
				case 'Driade':
					tracosRaca+='\n  Fotossintese:\n    ganha +5 de vida se descansar em um lugar aberto\n  Falar Com Plantas'
					break
				case 'Minotauro':
					tracosRaca+='\n Ameacador:\n    vantagem em testes de intimidacao\n  Investida'
					break
				case 'Naja':
					tracosRaca+='\n  Pele Escamosa: +2 AC\n  Rajada de Veneno'
					
					jogas.ca+=2
					
					jogas.magias_lista[0].push('Rajada de Veneno')
					
					break
				case 'Pixie':
					tracosRaca+='\n  Invisibilidade:[]\n  Ilusao Menor'
					
					jogas.vel="6m(4q)"
					jogas.magias_lista[0].push('Ilusao Menor')
					
					break
				case 'Satiro':
					tracosRaca+='\n  Escalador Nato:\n    Sua velocidade de escalada e igual sua velocidade andando\n  Zombaria Viciosa'
					
					jogas.magias_lista[0].push('Zombaria Viciosa')
					
					break
				case 'Sereia':
					tracosRaca+='\n  Respiracao Anfibia\n  Enfeiticar Pessoa'
					
					jogas.magias_dia[1]++
					jogas.magias_lista[1].push('Enfeiticar Pessoa')
					
					break
				case 'Sprite':
					tracosRaca+='\n  Velocidade Aumentada\n  Percepcao Agucada'
					
					jogas.vel="9m(6q)"
					
					break
			}
			
			racar='Feerico '+racar
			
			break
		case 'Genasi':
			var elementos=[
				'Ar',
				'Fogo',
				'Agua',
				'Terra'
			]
			
			var elemento=elementos[Math.round(Math.random()*(elementos.length-1))]
			
			switch(elemento){
				case 'Ar':
					linguagens=linguagens+', Auran'
					tracosRaca='\n\nTracos Raciais:\n  Resistencia contra dano Eletrico\n  Respiracao Anfibia\n  Levitacao:[]\n    Voce pode usar para levantar algo do chao.'
					
					break
				case 'Fogo':
					linguagens=linguagens+', Ignan'
					tracosRaca='\n\nTracos Raciais:\n  Resistencia contra dano de fogo\n  Fogo Ambulante:\n    Voce emite luz, porem pode se concentrar para se apagar por um tempo.\n  Voce pode usar o truque Criar Chamas'
					
					jogas.magias_lista[0].push('Criar Chamas')
					
					break
				case 'Agua':
					linguagens=linguagens+', Aquan'
					tracosRaca='\n\nTracos Raciais:\n Resistencia contra dano Acido\n  Um com a Agua:\n    Voce pode nadar numa velocidade de 18m(12q)\n  Fonte Viva\n    Voce e uma fonte de agua, enquanto estiver conciente, vice pode pegar agua de dentro do seu corpo.'
					
					break
				case 'Terra':
					linguagens=linguagens+', Terran'
					tracosRaca='\n\nTracos Raciais:\n  Resistencia contra venenos\n  Pele Dura:\n    +2 de AC\n  Andar sem deixar Rastros:[]\n    +10 em teste de furtividade.'
					
					jogas.ca+=2
					
					break
			}
			
			
			jogas.vel="9m(6q)"
			
			break
		case 'Goliah':
			linguagens=linguagens+', Gigante'
			tracosRaca='\n\nTracos Raciais:\n  Resistencia de Pedra:[]\n    joga 1d12 e diminui o dano que tomou\n  Atleta Natural\n  Construcao Poderosa'
			
			jogas.skills[0][0]+=1
			
			jogas.vel="9m(6q)"
			
			break
		case 'Gnomo':
			linguagens=linguagens+', Gnomico'
			tracosRaca='\n\nTracos Raciais:\n  Visao no Escuro\n  Esperteza Gnomica'
			
			jogas.vel="7,5m(5q)"
			
			break
		case 'Halfling':
			linguagens=linguagens+', Halfling'
			tracosRaca='\n\nTracos Raciais:\n  Sorte\n    Pode re-jogar 1\n  Agilidade Halfling:\n    Pode passar debaixo das pernas dos outros\n  Bravura:\n    Vantagem contra ficar Amedrontado'
			
			jogas.vel="7,5m(5q)"
			
			break
		case 'Kaisier':
			linguagens=linguagens+', Infernal'
			tracosRaca='\n\nTracos Raciais:\n  Visao no escuro\n  Magia Inata\n  Resitencia contra fogo'
			
			jogas.vel="9m(6q)"
			
			break
		case 'Laarz':
			linguagens=linguagens+', Silvestre Florestal'
			tracosRaca='\n\nTracos Raciais:\n  Pele dura: +2 AC\n  Fingir de Morto\n  Sangue Frio:\n  Vantagem em testes de Vontade'
			
			jogas.ca+=2
			
			jogas.vel="9m(6q)"
			
			break
		case 'Morto-Vivo':
			linguagens=linguagens+', linguagem'
			tracosRaca='\n\nTracos Raciais:\n  Resistente a danos Necrotico e Radiante\n  +traco de outra raca\n  +traco de outra raca'
			
			jogas.vel="9m(6q)"
			
			break
		case 'Orc':
			linguagens=linguagens+', Orc'
			tracosRaca='\n\nTracos Raciais:\n  Ameacador:\n    Vantagem em testes de intimidacao\n  Resistencia Implacavel:\n    A Primeira vez que voce chegar a 0 de vida numa batalha voce volta a 1\n  Ataques Selvagens:\n    Pode rolar o dano mais uma vez, um uso por turno.'
			
			jogas.vel="9m(6q)"
			
			break
		case 'Naja':
			linguagens=linguagens+', Silvestre Florestal'
			tracosRaca='\n\nTracos Raciais:\n  Bote:\n    Vantagem no primeiro ataque contra um inimigo\n  Ameacador:\n    Vantagem em testes de intimidacao\n  Pele Escamosa: +2 de AC\n  Cauda CD 10+for inimigo fica caido.'
			
			jogas.ca+=2
			jogas.inventario.push({img:'',item:'Cauda\n   CD 10+for inimigo fica caido.'})
			
			jogas.vel="9m(6q)"
			
			break
		case 'Sereia/Tritao':
			linguagens=linguagens+', Silvestre Aquatico'
			tracosRaca='\n\nTracos Raciais:\n  Visao no Escuro\n  Respiracao Anfibia\n  Engenhosidade:\n    Voce pode usar seus Conhecimentos ao inves de qualquer teste que nao seja um ataque'
			
			jogas.vel="9m(6q)"
			
			break
		case 'Tabaxi':
			linguagens=linguagens+', Silvestre Florestal'
			tracosRaca='\n\nTracos Raciais:\n  Visao no Escuro\n  Garras:  for+2 1d4+for\n  Agilidade Felina:\n    Com uma acao de movimento voce pode ativar e correr o dobro do seu movimento,voce tambem pode escalar rapidamente e dar pulos bem mais altos.'
			
			jogas.inventario.push({img:'',item:'Garras\n   for+2 1d4+for'})
			
			jogas.vel="9m(6q)"
			
			break
	}
	
	switch(origemr){
		case 'Acolito':
			jogas.atrib[4]=2
			jogas.atrib[3]=1
			
			jogas.skills[4][1]=1
			jogas.skills[3][6]=1
			
			linguagens=linguagens+', Celestial'
			tracosOrigem='\n\nTracos de Origem:\n  Intuicao, Religiao,Suprimentos de Caligrafia, linguagem Clelestial\n\nTalentos:Iniciado em Magia(Divina)'
			
			jogas.magias_lista[0].push('Orientacao')
			jogas.magias_lista[0].push('Estabilizar')
			jogas.magias_lista[1].push('Curar Ferimentos')
			
			jogas.inventario.push({img:'',item:'Livro de Ritos'})
			jogas.inventario.push({img:'',item:'Papel(10 folhas)'})
			jogas.inventario.push({img:'',item:'Suprimentos de Caligrafia'})
			jogas.inventario.push({img:'',item:'Tunica'})
			jogas.inventario.push({img:'',item:'Simbolo Divino'})
			jogas.inventario.push({img:'',item:'3po'})
			
			break
		case 'Andarilho':
			jogas.atrib[4]=2
			jogas.atrib[3]=1
			
			jogas.skills[3][4]=1
			jogas.skills[4][3]=1
			
			linguagens=linguagens+', Silvestre Florestal'
			tracosOrigem='\n\nTracos de Origem:\n  Medicina, Sobrevivencia,Kit de Herbalismo\n\nTalentos:Iniciado em Magia(Primal)'
			
			jogas.magias_lista[0].push('Druidismo')
			jogas.magias_lista[0].push('Chicote de Espinhos')
			jogas.magias_lista[1].push('Palavra Curativa')
			
			
			jogas.inventario.push({img:'',item:'Cajado'})
			jogas.inventario.push({img:'',item:'Kit de Herbalismo'})
			jogas.inventario.push({img:'',item:'Lampada'})
			jogas.inventario.push({img:'',item:'Livro(Historia)'})
			jogas.inventario.push({img:'',item:'Oleo(5 frascos)'})
			jogas.inventario.push({img:'',item:'Porta Mapas'})
			jogas.inventario.push({img:'',item:'Roupas de Viajante'})
			jogas.inventario.push({img:'',item:'Saco de Dormir'})
			jogas.inventario.push({img:'',item:'10po'})
			
			break
		
		case 'Artesao':
			jogas.atrib[3]=2
			jogas.atrib[5]=1
			
			jogas.skills[4][1]=1
			jogas.skills[5][4]=1
			
			linguagens=linguagens+', Elfico'
			tracosOrigem='\n\nTracos de Origem:Intuicao, Persuasao, Ferramentas de Artesao\n \n\nTalentos:Inventor'
			
			jogas.inventario.push({img:'',item:'Abaco'})
			jogas.inventario.push({img:'',item:'Balanca de Mercador'})
			jogas.inventario.push({img:'',item:'Bau'})
			jogas.inventario.push({img:'',item:'Ferramentas de Artesao'})
			jogas.inventario.push({img:'',item:'Martelo'})
			jogas.inventario.push({img:'',item:'Roupas Comuns'})
			jogas.inventario.push({img:'',item:'10po'})
			
			break
		
		case 'Artista':
			jogas.atrib[5]=2
			jogas.atrib[1]=1
			
			jogas.skills[1][0]=1
			jogas.skills[5][0]=1
			
			linguagens=linguagens+', linguagem Exotica'
			tracosOrigem='\n\nTracos de Origem:\n  acrobacia, atuacao, intrumento musical\n\nTalentos:Musico'
			
			jogas.inventario.push({img:'',item:'Espelho'})
			jogas.inventario.push({img:'',item:'Fantasia(2)'})
			jogas.inventario.push({img:'',item:'Instrumento Musical'})
			jogas.inventario.push({img:'',item:'Perfume'})
			jogas.inventario.push({img:'',item:'Roupas de Viajante'})
			jogas.inventario.push({img:'',item:'8po'})
			
			break
		
		case 'Charlatao':
			jogas.atrib[5]=2
			jogas.atrib[1]=1
			
			jogas.skills[5][1]=1
			jogas.skills[1][3]=1
			
			linguagens=linguagens+', Infernal'
			tracosOrigem='\n\nTracos de Origem:\n  Enganacao, prestidigitacao, kit de disfarses\n\nTalentos:Perito'
			
			var temp=3
			for(var i=0;i<jogas.skills.length;i++){
				for(var j=0;j<jogas.skills[i].length;j++){
					if(Math.round(Math.random()*25)==1 && temp>0 && jogas.skills[i][j]!=1){
						jogas.skills[i][j]=1
						temp--
					}
				}
			}
			
			jogas.inventario.push({img:'',item:'Disfarses'})
			jogas.inventario.push({img:'',item:'Roupas Chiques'})
			jogas.inventario.push({img:'',item:'Kit de Disfarses'})
			jogas.inventario.push({img:'',item:'15po'})
			
			break
		
		case 'Criminoso':
			jogas.atrib[1]=2
			jogas.atrib[3]=1
			
			jogas.skills[1][1]=1
			jogas.skills[1][3]=1
			
			linguagens=linguagens+', Girias de Ladrao'
			tracosOrigem='\n\nTracos de Origem:\n  Furtividade, Prestidigitacao, Ferramentas de Ladrao\n\nTalentos:Alerta'
			
			jogas.skills[1][2]=2
			
			jogas.inventario.push({img:'',item:'Adagas(2)'})
			jogas.inventario.push({img:'',item:'Bolsa'})
			jogas.inventario.push({img:'',item:'Ferramentas de Ladrao'})
			jogas.inventario.push({img:'',item:'Pe de Cabra'})
			jogas.inventario.push({img:'',item:'Roupas de Viajante'})
			jogas.inventario.push({img:'',item:'16po'})
			
			break
		
		case 'Cultista':
			jogas.atrib[3]=2
			jogas.atrib[5]=1
			
			jogas.skills[3][0]=1
			jogas.skills[3][6]=1
			
			linguagens=linguagens+', Abissal'
			tracosOrigem='\n\nTracos de Origem:\n  Arcana, Religiao, Kit de Disfarses\n\nTalentos:Iniciado em Magia(Arcana)'
			
			jogas.magias_lista[0].push('Luz')
			jogas.magias_lista[0].push('Raio de Fogo')
			jogas.magias_lista[1].push('Escudo Arcano')
			
			jogas.inventario.push({img:'',item:'Adaga'})
			jogas.inventario.push({img:'',item:'Kit de Disfarses'})
			jogas.inventario.push({img:'',item:'Lampada'})
			jogas.inventario.push({img:'',item:'Manto'})
			jogas.inventario.push({img:'',item:'Roupas Comuns'})
			jogas.inventario.push({img:'',item:'Sino'})
			jogas.inventario.push({img:'',item:'19po'})
			
			break
		
		case 'Fazendeiro':
			jogas.atrib[4]=2
			jogas.atrib[5]=1
			
			jogas.skills[4][0]=1
			jogas.skills[3][5]=1
			
			linguagens=linguagens+', Silvestre Florestal'
			tracosOrigem='\n\nTracos de Origem:\n  Adestrar Animais, Natureza, Montaria\n\nTalentos:Resistente'
			
			jogas.atrib[2]=1
			
			jogas.inventario.push({img:'',item:'Foice'})
			jogas.inventario.push({img:'',item:'Kit de Herbalismo'})
			jogas.inventario.push({img:'',item:'Pa'})
			jogas.inventario.push({img:'',item:'Roupas de Viajante'})
			jogas.inventario.push({img:'',item:'15po'})
			
			break
		
		case 'Moleque':
			jogas.atrib[1]=2
			jogas.atrib[4]=1
			
			jogas.skills[1][1]=1
			jogas.skills[4][1]=1
			
			linguagens=linguagens+', LiCoS(Linguagem Comun de Sinais)'
			tracosOrigem='\n\nTracos de Origem:\n  Furtividade, Intuicao, Kit de jogo\n\nTalentos:Sortudo'
			
			jogas.inventario.push({img:'',item:'Adaga(2)'})
			jogas.inventario.push({img:'',item:'Bolsa'})
			jogas.inventario.push({img:'',item:'Ferramentas de ladrao'})
			jogas.inventario.push({img:'',item:'Kit de jogo'})
			jogas.inventario.push({img:'',item:'Roupas comuns'})
			jogas.inventario.push({img:'',item:'Saco de dormir'})
			jogas.inventario.push({img:'',item:'18po'})
			
			break
		
		case 'Militar':
			jogas.atrib[2]=2
			jogas.atrib[5]=1
			
			jogas.skills[0][0]=1
			jogas.skills[5][2]=1
			
			linguagens=linguagens+', Gigante'
			tracosOrigem='\n\nTracos de Origem:\n  Atletismo, Intimidacao, Kit de jogo\n\nTalentos:Atacante Selvagem'
			
			var divisoes=[
				'Cavalaria',
				'Domadores',
				'Marinheiros',
				'Patrulheiros'
			] 
			
			var divisao=divisoes[Math.round(Math.random()*4)-1]
			
			var patentes=[
				'Soldado',
				'Soldado',
				'Soldado',
				'Soldado',
				'Soldado',
				'Soldado',
				'Soldado',
				'Soldado',
				'Soldado',
				'Soldado',
				'Sargento',
				'Sargento',
				'Sargento',
				'Sargento',
				'Sargento',
				'Tenente',
				'Tenente',
				'Capitao',
				'Coronel'
			]
			
			var patente=patentes[Math.round(Math.random()*patentes.length)-1]
			
			switch(divisao){
				case 'Cavalaria':
					jogas.inventario.push({img:'',item:'Sabre da Cavalaria'})
					break
				case 'Domadores':
					jogas.inventario.push({img:'',item:'Chicote de Domadores'})
					break
				case 'Marinheiros':
					jogas.inventario.push({img:'',item:'Tridente de Marinheiro'})
					break
				case 'Patrulheiros':
					jogas.inventario.push({img:'',item:'Lanca de Patrulheiro'})
					break
			}
			
			if(patente=='Soldado' || patente=='Sargento' || patente=='Tenente'){
				jogas.inventario.push({img:'',item:'Besta de Mao'})
				jogas.inventario.push({img:'',item:'Bolsa(20 virotes)'})
			}
			else{
				jogas.inventario.push({img:'',item:'Arma de Fogo'})
				jogas.inventario.push({img:'',item:'Bolsa(20 balas)'})
			}
			
			jogas.nome=patente
			
			jogas.inventario.push({img:'',item:'Kit Medico'})
			jogas.inventario.push({img:'',item:'Kit de jogo'})
			jogas.inventario.push({img:'',item:'Roupas de viajante'})
			jogas.inventario.push({img:'',item:'13po'})
			
			break
		
		case 'Nobre':
			jogas.atrib[5]=2
			jogas.atrib[3]=1
			
			jogas.skills[5][4]=1
			jogas.skills[5][0]=1
			
			linguagens=linguagens+', Elfico'
			tracosOrigem='\n\nTracos de Origem:\n  Persuasao, Atuacao, Instrumento Musical\n\nTalentos:Lider Inspirador'
			
			jogas.inventario.push({img:'',item:'Brasao Familiar'})
			jogas.inventario.push({img:'',item:'Instrumento Musical'})
			jogas.inventario.push({img:'',item:'Perfume'})
			jogas.inventario.push({img:'',item:'Roupas Chiques'})
			jogas.inventario.push({img:'',item:'20po'})
			
			break
		
		case 'Professor':
			jogas.atrib[3]=2
			jogas.atrib[5]=1
			
			switch(Math.round(Math.random()*8)){
				case 1:
					jogas.skills[4][0]=1
					
					tracosOrigem='\n\nTracos de Origem:\n  Disciplina:Animalia\n  Historia, Adestrar Animais, Montaria\n\nTalentos:Combatente Montado'
					
					break
				case 2:
					jogas.skills[1][0]=1
					
					tracosOrigem='\n\nTracos de Origem:\n  Disciplina:Artes\n  Historia, Acrobacia, Instrumento Musical\n\nTalentos:Ator'
					
					break
				case 3:
					jogas.skills[3][3]=1
					
					tracosOrigem='\n\nTracos de Origem:\n  Disciplina:Calculo\n  Historia, investigacao, suprimentos de caligrafia\n\nTalentos:Observador'
					
					break
				case 4:
					jogas.skills[1][3]=1
					
					tracosOrigem='\n\nTracos de Origem:\n  Disciplina:Construcao\n  Historia, Prestidigitacao, Ferramentas de Artesao\n\nTalentos:inventor'
					
					break
				case 5:
					jogas.skills[3][4]=1
					
					tracosOrigem='\n\nTracos de Origem:\n  Disciplina:Culinaria\n  Historia, Medicina, Utensilios de Cozinha\n\nTalentos:Curandeiro'
					
					break
				case 6:
					jogas.skills[5][4]=1
					
					tracosOrigem='\n\nTracos de Origem:\n  Disciplina:Linguagens\n  Historia, Persuasao, Suprimentos de Caligrafia\n\nTalentos:Poliglota'
					
					lnguagens=linguagens+', Incomum, Celestial, Terran'
					
					break
				case 7:
					jogas.skills[3][0]=1
					
					tracosOrigem='\n\nTracos de Origem:\n  Disciplina:Magia\n  Historia, Arcana, Ferramentas de Alquimista\n\nTalentos:Iniciado em Magia(Arcana)'
					
					jogas.magias_lista[0].push('Luz')
			jogas.magias_lista[0].push('Raio de Fogo')
			jogas.magias_lista[1].push('Escudo Arcano')

					break
				case 8:
					jogas.skills[3][5]=1
					
					tracosOrigem='\n\nTracos de Origem:\n  Disciplina:Natureza\n  Historia, Natureza, Kit de Herbalismo\n\nTalentos:Iniciado em Magia(Primal)'
					
					jogas.magias_lista[0].push('Druidismo')
					jogas.magias_lista[0].push('Chicote de Espinhos')
					jogas.magias_lista[1].push('Palavra Curativa')
					
					break
			}
			
			jogas.skills[3][2]=1
			
			linguagens=linguagens+', Anoes'
			
			
			jogas.inventario.push({img:'',item:'Caneca'})
			jogas.inventario.push({img:'',item:'Ferramenta'})
			jogas.inventario.push({img:'',item:'Livro'})
			jogas.inventario.push({img:'',item:'Roupas Comuns'})
			jogas.inventario.push({img:'',item:'15po'})
			
			break
		
		case 'Sobrevivente':
			jogas.atrib[4]=2
			jogas.atrib[2]=1
			
			jogas.skills[3][2]=1
			jogas.skills[4][3]=1
			
			linguagens=linguagens+', linguagem'
			tracosOrigem='\n\nTracos de Origem:\n  Historia, Sobrevivencia, Kit Medico\n\nTalentos:Resiliente'
			
			jogas.inventario.push({img:'',item:'Bolsa'})
			jogas.inventario.push({img:'',item:'Cantil'})
			jogas.inventario.push({img:'',item:'Kit de Herbalismo'})
			jogas.inventario.push({img:'',item:'Kit Medico'})
			jogas.inventario.push({img:'',item:'Lampada'})
			jogas.inventario.push({img:'',item:'Roupas comuns'})
			jogas.inventario.push({img:'',item:'15po'})
			
			break
		
	}
	
	switch(classer){
		case 'Barbaro':
			jogas.atrib[0]+=2
			jogas.atrib[1]+=-1
			jogas.atrib[2]+=2
			jogas.atrib[3]+=1
			jogas.atrib[4]+=1
			jogas.atrib[5]+=0
			
			jogas.vida=12+jogas.atrib[2]
			jogas.maxvida=12+jogas.atrib[2]
			jogas.ca+=10+jogas.atrib[1]+jogas.atrib[2]
			
			jogas.skills[0][1]+=1
			jogas.skills[2][0]+=1
			
			jogas.skills[0][1]+=1
			jogas.skills[5][2]+=1
			
			jogas.inventario.push({img:'',item:'Machado Grande\n   +'+(jogas.atrib[0]+2)+' 1d12+'+(jogas.atrib[0])})
			jogas.inventario.push({img:'',item:'Adaga\n   +'+(jogas.atrib[0]+2)+' 1d4+'+(jogas.atrib[0])})
			jogas.inventario.push({img:'',item:'Pocao de Cura\n   2d6+2 de Cura'})
			
			tracosClasse="\n\nTracos de Classe:\n  Furia[][]\n    bonus de dano +2\n  Defesa sem Armadura"
			
			break
		case 'Bardo':
			jogas.atrib[0]+=-1
			jogas.atrib[1]+=2
			jogas.atrib[2]+=1
			jogas.atrib[3]+=1
			jogas.atrib[4]+=0
			jogas.atrib[5]+=2
			
			jogas.vida=8+jogas.atrib[2]
			jogas.maxvida=8+jogas.atrib[2]
			jogas.ca+=11+jogas.atrib[1]
			
			jogas.skills[1][4]+=1
			jogas.skills[5][3]+=1
			
			jogas.skills[5][0]+=1
			jogas.skills[1][2]+=1
			jogas.skills[4][2]+=1
			
			jogas.inventario.push({img:'',item:'Rapiera\n   +'+(jogas.atrib[1]+2)+' 1d18+'+(jogas.atrib[1])})
			jogas.inventario.push({img:'',item:'Adaga\n   +'+(jogas.atrib[0]+2)+' 1d4+'+(jogas.atrib[0])})
			jogas.inventario.push({img:'',item:'Instrumento Musical\n   '})
			jogas.inventario.push({img:'',item:'Armadura de Couro\n   +11 AC'})
			
			tracosClasse="\n\nTracos de Classe:\n  Conjuraco\n  Inspiracao Bardica 1d6:\n    Inspire seu aliado com um a cancao e ele recebe um dado na sua proxima jogada."
			
			jogas.magias_atk=2+jogas.atrib[5]
			jogas.magias_cd=10+jogas.atrib[5]
			
			jogas.magias_lista=[
				['Globos de Luz','Zombaria Viciosa'],
				['Detectar Magia','Enfeiticar Pessoa','Palavra Curativa','Onda Trovejante']
			]
			
			jogas.magias_dia=[2]
			
			break
		case 'Bruxo':
			jogas.atrib[0]+=1
			jogas.atrib[1]+=0
			jogas.atrib[2]+=2
			jogas.atrib[3]+=1
			jogas.atrib[4]+=0
			jogas.atrib[5]+=2
			
			jogas.vida=8+jogas.atrib[2]
			jogas.maxvida=8+jogas.atrib[2]
			jogas.ca+=11+jogas.atrib[1]
			
			jogas.skills[4][4]+=1
			jogas.skills[5][3]+=1
			
			jogas.skills[3][0]+=1
			jogas.skills[3][3]+=1
			
			jogas.inventario.push({img:'',item:'Foco Arcano\n   '})
			jogas.inventario.push({img:'',item:'Adaga\n   +'+(jogas.atrib[0]+2)+' 1d4+'+(jogas.atrib[0])})
			jogas.inventario.push({img:'',item:'Armadura de Couro\n   +11 AC'})
			
			tracosClasse="\n\nTracos de Classe:\n  Conjuraco\n  Patrono"
			
			jogas.magias_atk=2+jogas.atrib[5]
			jogas.magias_cd=10+jogas.atrib[5]
			
			jogas.magias_lista=[
				['Rajada Mistica','Toque Arrepiante'],
				['Enfeiticar Pessoa','Raio da Bruxa']
			]
			
			jogas.magias_dia=[1]
			
			break
		case 'Clerigo':
			var deuses=[
				'Aureo',
				'Arturo',
				'Demostaka',
				'Furia',
				'Furois',
				'Haloh',
				'Imperius',
				'Lucius',
				'Lulu',
				'Mechana',
				'Melancolia',
				'Nautilus',
				'Pavor',
				'Viajante'
			]
		
			jogas.atrib[0]+=-1
			jogas.atrib[1]+=0
			jogas.atrib[2]+=2
			jogas.atrib[3]+=1
			jogas.atrib[4]+=2
			jogas.atrib[5]+=1
			
			jogas.vida=8+jogas.atrib[2]
			jogas.maxvida=8+jogas.atrib[2]
			jogas.ca+=11+2+jogas.atrib[1]
			
			jogas.skills[4][4]+=1
			jogas.skills[5][3]+=1
			
			jogas.skills[3][6]+=1
			jogas.skills[3][4]+=1
			
			jogas.inventario.push({img:'',item:'Maca\n   +'+(jogas.atrib[0]+2)+' 1d6+'+(jogas.atrib[0])})
			jogas.inventario.push({img:'',item:'Adaga\n   +'+(jogas.atrib[0]+2)+' 1d4+'+(jogas.atrib[0])})
			jogas.inventario.push({img:'',item:'Armadura de Couro\n   +11 AC'})
			jogas.inventario.push({img:'',item:'Escudo\n   +2 AC'})
			jogas.inventario.push({img:'',item:'Simbolo divino\n   '})
			
			tracosClasse="\n\nTracos de Classe:\n  Conjuraco\n    Prepare qualquer magia da lista, numero maximo de magias preparadas e sab+1\n  Divindade: "+deuses[Math.round(Math.random()*(deuses.length-1))]
			
			jogas.magias_atk=2+jogas.atrib[4]
			jogas.magias_cd=10+jogas.atrib[4]
			
			jogas.magias_lista=[
				['Chama Sagrada','Estabilizar'],
				[	
					'Benção',
					'Comando',
					'Criar ou Destruir Água',
					'Curar Ferimentos',
					'Detectar Magia',
					'Detectar o Bem e Mal',
					'Detectar Veneno e Doença',
					'Escudo da Fé',
					'Infringir Ferimentos',
					'Palavra Curativa',
					'Perdição',
					'Proteção contra o Bem e Mal ',
					'Purificar Alimentos',
					'Raio Guiador',
					'Santuário' 
				]
			]
			
			jogas.magias_dia=[2]
			
			break
		case 'Druida':
			jogas.atrib[0]+=-1
			jogas.atrib[1]+=0
			jogas.atrib[2]+=2
			jogas.atrib[3]+=1
			jogas.atrib[4]+=2
			jogas.atrib[5]+=1
			
			jogas.vida=8+jogas.atrib[2]
			jogas.maxvida=8+jogas.atrib[2]
			jogas.ca+=11+jogas.atrib[1]
			
			jogas.skills[3][1]+=1
			jogas.skills[4][4]+=1
			
			jogas.skills[4][0]+=1
			jogas.skills[3][5]+=1
			
			jogas.inventario.push({img:'',item:'Espada Curta\n   +'+(jogas.atrib[1]+2)+' 1d6+'+(jogas.atrib[1])})
			jogas.inventario.push({img:'',item:'Adaga\n   +'+(jogas.atrib[0]+2)+' 1d4+'+(jogas.atrib[0])})
			jogas.inventario.push({img:'',item:'Armadura de Couro\n   +11 AC'})
			jogas.inventario.push({img:'',item:'Foco Druidico\n   '})
			
			linguagens+=' ,Druidico'
			tracosClasse="\n\nTracos de Classe:\n  Conjuraco\n    Prepare qualquer magia da lista, numero maximo de magias preparadas e sab+1\n  Druidico"
			
			jogas.magias_atk=2+jogas.atrib[4]
			jogas.magias_cd=10+jogas.atrib[4]
			
			jogas.magias_lista=[
				['Chicote de Espinhos','Orientacao'],
				[
					'Amizade Animal',
					'Bom Fruto',
					'Constrição',
					'Criar ou Destruir Água',
					'Curar Ferimentos',
					'Detectar Magia',
					'Detectar Veneno e Doença',
					'Enfeitiçar Pessoa',
					'Falar com Animais',
					'Fogo das Fadas',
					'Névoa Obscurecente',
					'Onda Trovejante',
					'Palavra Curativa',
					'Passos Longo',
					'Purificar Alimentos',
					'Salto'
				]
			]
			
			jogas.magias_dia=[2]
			
			break
		case 'Fabricante':
			jogas.atrib[0]+=-1
			jogas.atrib[1]+=0
			jogas.atrib[2]+=1
			jogas.atrib[3]+=2
			jogas.atrib[4]+=1
			jogas.atrib[5]+=2
			
			jogas.vida=8+jogas.atrib[2]
			jogas.maxvida=8+jogas.atrib[2]
			jogas.ca+=11+jogas.atrib[1]
			
			jogas.skills[3][1]+=1
			jogas.skills[5][3]+=1
			
			jogas.skills[3][0]+=1
			jogas.skills[3][3]+=1
			
			jogas.inventario.push({img:'',item:'Espada Curta\n   +'+(jogas.atrib[1]+2)+' 1d6+'+(jogas.atrib[1])})
			jogas.inventario.push({img:'',item:'Adaga\n   +'+(jogas.atrib[0]+2)+' 1d4+'+(jogas.atrib[0])})
			jogas.inventario.push({img:'',item:'Armadura de Couro\n   +11 AC'})
			
			tracosClasse="\n\nTracos de Classe:\n  Mecanica Classica:\n    Criar Automato Minusculo: 1 hora 15pp\n    Modificar Arma:afiar/equilibrar:30minutos 2pp/1hora 1po\n    Modificar Defesa: 1 hora 1po"
			
			break
		case 'Feiticeiro':
			jogas.atrib[0]+=-1
			jogas.atrib[1]+=0
			jogas.atrib[2]+=2
			jogas.atrib[3]+=1
			jogas.atrib[4]+=1
			jogas.atrib[5]+=2
			
			jogas.vida=6+jogas.atrib[2]
			jogas.maxvida=6+jogas.atrib[2]
			jogas.ca+=11+jogas.atrib[1]
			
			jogas.skills[2][0]+=1
			jogas.skills[5][3]+=1
			
			jogas.skills[3][0]+=1
			jogas.skills[3][3]+=1
			
			jogas.inventario.push({img:'',item:'Adaga\n   +'+(jogas.atrib[0]+2)+' 1d4+'+(jogas.atrib[0])})
			jogas.inventario.push({img:'',item:'Bolsa de Componentes\n   '})
			jogas.inventario.push({img:'',item:'Armadura de Couro\n   +11 AC'})
			
			tracosClasse="\n\nTracos de Classe:\n  Conjuracao"
			
			jogas.magias_atk=2+jogas.atrib[5]
			jogas.magias_cd=10+jogas.atrib[5]
			
			jogas.magias_lista=[
				['Luz','Prestidigitacao','Raio de Gelo','Mensagem',],
				['Escudo Arcano','Misseis Magicos']
			]
			
			jogas.magias_dia=[2]
			
			
			break
		case 'Guerreiro':
			jogas.atrib[0]+=2
			jogas.atrib[1]+=0
			jogas.atrib[2]+=2
			jogas.atrib[3]+=1
			jogas.atrib[4]+=-1
			jogas.atrib[5]+=1
			
			jogas.vida=10+jogas.atrib[2]
			jogas.maxvida=10+jogas.atrib[2]
			jogas.ca+=12+1+2+jogas.atrib[1]
			
			jogas.skills[0][1]+=1
			jogas.skills[2][0]+=1
			
			jogas.skills[0][0]+=1
			jogas.skills[4][1]+=1
			
			jogas.inventario.push({img:'',item:'Espada Grande\n   +'+(jogas.atrib[0]+2)+' 2d6+'+(jogas.atrib[0])})
			jogas.inventario.push({img:'',item:'Besta Leve\n   +'+(jogas.atrib[1]+2)+' 1d8+'+(jogas.atrib[1])})
			jogas.inventario.push({img:'',item:'Aljava\n   20 virotes+'})
			jogas.inventario.push({img:'',item:'Escudo\n   +2'})
			jogas.inventario.push({img:'',item:'Armadura de Couro\n   +12 AC'})
			
			tracosClasse="\n\nTracos de Classe:\n  Estilo de Luta: Defesa\n    +1 AC\n  Retomar Folego:\n  1d10+1 de Cura"
			
			break
		case 'Ladino':
			jogas.atrib[0]+=-1
			jogas.atrib[1]+=2
			jogas.atrib[2]+=1
			jogas.atrib[3]+=2
			jogas.atrib[4]+=0
			jogas.atrib[5]+=1
			
			jogas.vida=8+jogas.atrib[2]
			jogas.maxvida=8+jogas.atrib[2]
			jogas.ca+=11+jogas.atrib[1]
			
			jogas.skills[1][4]+=1
			jogas.skills[3][1]+=1
			
			jogas.skills[1][0]+=2
			jogas.skills[0][0]+=1
			jogas.skills[5][1]+=2
			jogas.skills[5][4]+=1
			
			jogas.inventario.push({img:'',item:'Rapiera\n   +'+(jogas.atrib[1]+2)+' 1d8+'+(jogas.atrib[1])})
			jogas.inventario.push({img:'',item:'Arco curto\n   +'+(+jogas.atrib[1]+2)+' 1d6+'+(jogas.atrib[1])})
			jogas.inventario.push({img:'',item:'Aljava\n   20 flechas+'})
			jogas.inventario.push({img:'',item:'Ferramentas de Ladrao\n   '})
			jogas.inventario.push({img:'',item:'Armadura de Couro\n   +11 AC'})
			
			linguagens+=', Girias de Ladrao'
			tracosClasse="\n\nTracos de Classe:\n  Especializacao:\n    Acrobacia, persuasao\n  Ataque Furtivo 1d6"
			
			break
		case 'Mago':
			jogas.atrib[0]+=-1
			jogas.atrib[1]+=0
			jogas.atrib[2]+=1
			jogas.atrib[3]+=2
			jogas.atrib[4]+=1
			jogas.atrib[5]+=2
			
			jogas.vida=6+jogas.atrib[2]
			jogas.maxvida=6+jogas.atrib[2]
			jogas.ca+=11+jogas.atrib[1]
			
			jogas.skills[3][1]+=1
			jogas.skills[4][4]+=1
			
			jogas.skills[3][0]+=1
			jogas.skills[3][2]+=1
			
			jogas.inventario.push({img:'',item:'Adaga\n   '+(jogas.atrib[0]+2)+' 1d4+'+(jogas.atrib[0])})
			jogas.inventario.push({img:'',item:'Bolsa de Componentes\n   '})
			jogas.inventario.push({img:'',item:'Grimorio\n   '})
			jogas.inventario.push({img:'',item:'Armadura de Couro\n   +11 AC'})
			
			tracosClasse="\n\nTracos de Classe:\n  Conjuracao\n  Recuperacao Arcana"
			
			jogas.magias_atk=2+jogas.atrib[3]
			jogas.magias_cd=10+jogas.atrib[3]
			
			jogas.magias_lista=[
				['Luz','Raio de Gelo'],
				['Armadura Arcana','Enfeiticar Pessoas','Maos Flamejantes','Misseis Magicos','Queda Suave','Sono']
			]
			
			jogas.magias_dia=[2]
			
			break
		case 'Monge':
			jogas.atrib[0]+=-1
			jogas.atrib[1]+=2
			jogas.atrib[2]+=1
			jogas.atrib[3]+=0
			jogas.atrib[4]+=2
			jogas.atrib[5]+=1
			
			jogas.vida=8+jogas.atrib[2]
			jogas.maxvida=8+jogas.atrib[2]
			jogas.ca+=10+jogas.atrib[1]+jogas.atrib[4]
			
			jogas.skills[3][1]+=1
			jogas.skills[4][4]+=1
			
			jogas.skills[3][0]+=1
			jogas.skills[3][2]+=1
			
			jogas.inventario.push({img:'',item:'Desarmado\n   '+(jogas.atrib[1]+2)+' 1d4+'+(jogas.atrib[1])})
			jogas.inventario.push({img:'',item:'Espada Curta\n   '+(jogas.atrib[1]+2)+' 1d6+'+(jogas.atrib[1])})
			jogas.inventario.push({img:'',item:'Dardosx10\n   '+(jogas.atrib[1]+2)+' 1d4+'+(jogas.atrib[1])})
			
			tracosClasse="\n\nTracos de Classe:\n  Defesa sem Armadaura:\n    AC=10+des+sab\n  Artes marciais 1d4"
			
			break
		case 'Paladino':
			jogas.atrib[0]+=2
			jogas.atrib[1]+=-1
			jogas.atrib[2]+=1
			jogas.atrib[3]+=1
			jogas.atrib[4]+=0
			jogas.atrib[5]+=2
			
			jogas.vida=10+jogas.atrib[2]
			jogas.maxvida=10+jogas.atrib[2]
			jogas.ca+=16
			
			jogas.skills[4][4]+=1
			jogas.skills[5][3]+=1
			
			jogas.skills[0][0]+=1
			jogas.skills[3][6]+=1
			
			jogas.inventario.push({img:'',item:'Espada Grande\n   '+(jogas.atrib[0]+2)+' 2d6+'+(jogas.atrib[0])})
			jogas.inventario.push({img:'',item:'Espada Curta\n   '+(jogas.atrib[0]+2)+' 1d6+'+(jogas.atrib[0])})
			jogas.inventario.push({img:'',item:'Cota de Malhas\n   +16 AC Desvantagem em Furtividade'})
			
			tracosClasse="\n\nTracos de Classe:\n  Estilo de Luta: Combate com Armas Grandes\n  Sentido Divino "+jogas.atrib[5]+1+"\n  Cura Pelas Maos:5"
			break
		case 'Patrulheiro':
			jogas.atrib[0]+=-1
			jogas.atrib[1]+=2
			jogas.atrib[2]+=1
			jogas.atrib[3]+=0
			jogas.atrib[4]+=2
			jogas.atrib[5]+=1
			
			jogas.vida=10+jogas.atrib[2]
			jogas.maxvida=10+jogas.atrib[2]
			jogas.ca+=11+jogas.atrib[1]
			
			jogas.skills[0][0]+=1
			jogas.skills[1][4]+=1
			
			jogas.skills[4][0]+=1
			jogas.skills[0][0]+=1
			jogas.skills[4][2]+=1
			
			jogas.inventario.push({img:'',item:'Espada Curtax2\n   '+(jogas.atrib[1]+2)+' 1d6+'+(jogas.atrib[1])})
			jogas.inventario.push({img:'',item:'Arco Longo\n   '+(jogas.atrib[1]+2)+' 1d8+'+(jogas.atrib[1])})
			jogas.inventario.push({img:'',item:'Aljava\n   20 Flechas'})
			jogas.inventario.push({img:'',item:'Armadura de Couro\n   +11 AC'})
			
			tracosClasse="\n\nTracos de Classe:\n  Inimigo Favorito: Bestas\n  Explorador Natural"
			break
	}
	
	jogas.info=origemr+' '+ racar+' '+classer+' 1'
	jogas.anotas=linguagens+tracosOrigem+tracosRaca+tracosClasse
	
	for(var i=0;i<jogas.atrib.length;i++){
		for(var j=0;j<jogas.skills[i].length;j++){
			jogas.skills[i][j]+=jogas.atrib[i]
		}
	}
	
	jogas.nome=randomName(linguagens.split(':')[1].split(', ')[1]) + ' ' +  randomName(linguagens.split(':')[1].split(', ')[1])
	
	
	return jogas
	
}

module.exports = randomPlayer
