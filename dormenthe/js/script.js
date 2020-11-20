/* global monogatari */

// Define the messages used in the game.
monogatari.action('message').messages({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action('notification').notifications({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action('particles').particles({

});

// Define the canvas objects used in the game
monogatari.action('canvas').objects({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets('gallery', {

});

// Define the music used in the game.
monogatari.assets('music', {
	'ost_dormenthe':'Haya.mp3',
});

// Define the voice files used in the game.
monogatari.assets('voices', {

});

// Define the sounds used in the game.
monogatari.assets('sounds', {

});

// Define the videos used in the game.
monogatari.assets('videos', {

});

// Define the images used in the game.
monogatari.assets('images', {

});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {
	'rua_noite': 'rua.png',
	'rua_noite_iluminada': 'rua_iluminada.png',
	'caverna_02': 'Cavern_02.png',
	'caverna_04': 'Cavern_04.jpg',
	'you_Win':'youWin.png',
	'game_Over':'gamerOver.png',
});


// Define the Characters
monogatari.characters({
	'????': {
		name: '????',
		color: '#a169bf',
	},
	'Jeff': {
		name: 'Jeff',
		color: '#74c494',
	},
});

monogatari.script({
	// The game starts here.
	'Start': [
		'play music ost_dormenthe with loop',
		'play music ost_dormenthe with loop',
		'show scene rua_noite_iluminada with fadeIn',
		' * ???? anda com seu companheiro de trabalho Jeff para o bar proximo ao trabalho. * ',
		'Jeff Mano, você viu como a Jeniffer ficou muito triste e histérica com os memes que a Bruno criou com ela? ',
		'???? Sim, ela parecia muito depressiva no final do expediente. ',
		' * Depois de trocar mais um papo furado com Jeff eles chegam próximo ao bar. * ',
		' * ???? toca em seu bolso e percebe que sua carteira não está lá. * ',
		'???? Mano, esqueci a carteira em casa vou lá pegar. ',
		'Jeff Ok mano, vou guardar um lugar para você. ',
		'???? Valeu mano, até mais tarde. ',
		'Jeff Até. ',
		' * ???? se despede e segue rumo à sua casa. * ',
		'jump cena_02'
	],
	'cena_02': [
		'show scene rua_noite with fadeIn',
		' * Chegando perto de sua casa, ???? percebe uma criança usando um sobretudo e uma boina, que logo passa ao seu lado. * ',
		' * Logo depois que a criança passou pelo ????, uma curiosidade irracional é acometida sobre ele. * ',
		' * ???? olha de relance para atras, vê que a criança está o encarando com seus olhos carmesins, e ele dá um leve suspiro assustado... * ',
		' * ???? olha atentamente e vê que a "criança" não tem rosto, apenas há um vazio entre o sobretudo e a boina. * ',
		' * ???? hesitante, porém com uma leve curiosidade, avança sua mão em direção ao ante-braço da "criança". * ',
		' * ???? encosta no ante-braço dela, e sente um calafrio frígido e uma tontura estonteante, * ',
		' ... ',
		'jump cena_03',

	],
	'cena_03': [
		'show scene caverna_04 with fadeIn',
		' * ???? abre os olhos e somente enxerga a pura escuridão a sua volta. * ',
		' * ???? percebe que o chão dali é irregular e úmido. * ',
		' * ???? se levanta repentinamente. * ',
		'???? pensa: Tenho que sair daqui. ',
		{
			'Choice': {
				'Dialog': '',
				'choice_01_a': {
					'Text': 'Levantar e procurar recursos.',
					'Do': 'jump cena_04'
				},
				'choice_01_b': {
					'Text': 'Sair correndo desesperadamente',
					'Do': 'jump morte', // MORTE
				},
				'choice_01_c': {
					'Text': 'Se esconder.',
					'Do': 'jump morte', // MORTE
				},
			}
		},
	],
	'cena_04': [
		{
			'Choice': {
				'Dialog': ' * ???? encontra um caderninho, na intersecção central das duas folhas ele encontra uma caneta antiga, e percebe algo escrito na página à esquerda. * ',
				'choice_02_a': {
					'Text': 'Olhar o que está escrito.',
					'Do': 'jump choice_02_a_fala',
				},
				'choice_02_b': {
					'Text': 'Escrever algo no caderno.',
					'Do': 'jump escolha_01',
				},
			}
		},
	],
	'cena_05': [
		{
			'Choice': {
				'Dialog': ' * Depois disso, ???? olha a sua volta e percebe que algo está se mexendo ao longe, mas não consegue discernir o quê. * ',
				'choice_04_a': {
					'Text': 'Ir até o local aonde viu algo estranho.',
					'Do': 'jump morte',
				},
				'choice_04_b': {
					'Text': 'Se esconder atrás de algo.',
					'Do': 'next',
				},
				'choice_04_c': {
					'Text': 'Sair correndo apressadamente.',
					'Do': 'jump morte',
				},
			}
		},
		' * Quando ???? coloca seu rosto para fora do esconderijo, sente um vento vindo da direção contrária, logo a após isso, ouve um barulho vindo das suas costas...  * ',
		{
			'Choice': {
				'Dialog': '',
				'choice_05_a': {
					'Text': 'Ficar de cócoras e abraçar os joelhos.',
					'Do': 'jump morte',
				},
				'choice_05_b': {
					'Text': 'Olhar para atrás.',
					'Do': 'jump morte',
				},
				'choice_05_c': {
					'Text': 'Correr.',
					'Do': 'next',
				},
			},
		},
		{
			'Choice': {
				'Dialog': '* Depois de muito tempo correndo, ???? percebe que a "coisa" que estava atrás dele sumiu, e neste momento ele olha ao seu redor para verificar, e percebe a sua direita há uma luz roxa escapando de um buraco pequeno na parede da caverna... *',
				'choice_06_a': {
					'Text': 'Ignorar o buraco na parede e seguir adiante',
					'Do': 'jump cena_06',
				},
				'choice_06_b': {
					'Text': 'Olhar o buraco pequeno.',
					'Do': 'jump choice_06_fala',
				},
			},
		},
	],
	'cena_06': [
		' *Depois de ignorar o buraco, ele continua com um remorso estranho a andar pela caverna * ',
		'show scene caverna_02 with fadeIn',
		{
			'Choice': {
				'Dialog': 'Pouco a pouco tudo vai desaparecendo e com se num passe de magica, ele se vê num breu profundo...',
				'choice_07_a': {
					'Text': 'O que é isso?',
					'Do': 'next', // CONTINUE
				},
				'choice_07_b': {
					'Text': 'Estou morrendo?',
					'Do': 'next', // CONTINUE
				},
				'choice_07_c': {
					'Text': '...?',
					'Do': 'next', // CONTINUE
				},
			},
		},
		'...',
		'show scene rua_noite_iluminada with fadeIn',
		{
			'Choice': {
				'Dialog': ' ???? abre os olhos e vê que está naquela rua vazia novamente, olhando de relance para a "criança" novamente. ',
				'choice_08_a': {
					'Text': 'Segurar a criança novamente',
					'Do': 'jump cena_03', // PULE PARA O INICIO 
				},
				'choice_08_b': {
					'Text': 'Ir para a casa',
					'Do': 'jump vencer_jogo', //CONTINUE
				},
				'choice_08_c': {
					'Text': 'Fingir que nada aconteceu e ir pro bar',
					'Do': 'jump morte', //CONTINUE
				},
			},
		},
	],
	'escolha_01': [
		{
			'Choice': {
				'Dialog': 'Escrever...',
				'choice_03_a': {
					'Text': '"SOCORRO."',
					'Do': 'next',
				},
				'choice_03_b': {
					'Text': '"SE VOCÊ ESTIVER LENDO ISSO SAIBA QUE EU ESTOU MORTO. ASS: ????"',
					'Do': 'next',
				},
			},
		},
		'*Quando ???? está escrevendo, ele percebe que não está saindo tinta... enfurecido com isso quebra a caneta e joga longe o caderno*',
		'jump cena_05',
	],
	'choice_02_a_fala': [
		' * ???? olha o que está escrito... * ',
		' * este é o quinto dia, encontrei esse caderno faz pouco tempo, e não sei quando, mas eu fui trazido para cá e não consigo sair daqui... * ',
		' * no pouco tempo que passei aqui, só posso dizer uma coisa... * ',
		' * "CORRA OU MORRA." * ',
		'jump cena_05',
	],
	'choice_06_fala': [
		' * Quando ???? olha pelo o buraco... * ',
		'show scene caverna_02',
		' * ???? fica maravilhado com a beleza daquele lugar... * ',
		{
			'Choice': {
				'Dialog': 'next',
				'choice_07_a': {
					'Text': 'Ficar vislumbrando aquela paisagem por mais tempo.',
					'Do': 'jump cena_06',
				},
				'choice_07_b': {
					'Text': 'Para de olhar para o buraco e voltar a andar.',
					'Do': 'jump morte',
				},
			},
		},
	],
	'morte': [
		'show scene game_Over with fadeIn',
		'VOCÊ MORREU.',
		'jump Start'
	],
	'vencer_jogo': [
		'show scene you_Win with fadeIn',
		'PARABÉNS VOCÊ GANHOU.',
	],
});
