var audioElement;
var currentElementId = 0;
var canPlayMp3;
var canPlayOgg;

function playAudio(id) {
	
	if (audioElement == null) {
		audioElement = document.createElement('audio');	
    	canPlayMp3 = !!audioElement.canPlayType && "" != audioElement.canPlayType('audio/mpeg');
    	canPlayOgg = !!audioElement.canPlayType && "" != audioElement.canPlayType('audio/ogg; codecs="vorbis"');		
		
	} 
	
	if (canPlayOgg) {
		id += 1000;
	}
	
	if (id == currentElementId) {
		audioElement.pause();
		currentElementId = 0;
		return;
	}
	
	currentElementId = id;	
	
	switch (id) {
		case 1:
			audioElement.setAttribute("src", "./audio/GenePitney-ImGonnaBeStrong1964.mp3");
			break;		
		case 2:
			audioElement.setAttribute("src", "./audio/GenePitney-HalfHeavenHalfHeartache1963.mp3");
			break;	
		case 3:
			audioElement.setAttribute("src", "./audio/GenePitney-IMustBeSeeingThings1965.mp3");
			break;		
		case 4:
			audioElement.setAttribute("src", "./audio/GenePitney-IWannaLoveMyLifeAway.mp3");
			break;	
		case 5:
			audioElement.setAttribute("src", "./audio/GenePitney-HelloMaryLou1960.mp3");
			break;		
		case 6:
			audioElement.setAttribute("src", "./audio/tumblr_lx1ak2q5Oa1qc1igho1.mp3");
			break;	
		case 7:
			audioElement.setAttribute("src", "./audio/GenePitney-ShesARebel.mp3");
			break;		
		case 8:
			audioElement.setAttribute("src", "./audio/TheCrystals-HesARebel.mp3");
			break;	
		case 9:
			audioElement.setAttribute("src", "./audio/GenePitney-RubberBallbadCondition.mp3");
			break;		
		case 10:
			audioElement.setAttribute("src", "./audio/BobbyVee-RubberBall.mp3");
			break;	
		case 11:
			audioElement.setAttribute("src", "./audio/GenePitney-TheManWhoShotLibertyValence.mp3");
			break;		
		case 12:
			audioElement.setAttribute("src", "./audio/GenePitney-TownWithoutPityInEnglish.mp3");
			break;	
		case 13:
			audioElement.setAttribute("src", "./audio/GenePitney-CaraMia.mp3");
			break;	
		case 14:
			audioElement.setAttribute("src", "./audio/tumblr_lrdzb0NQJs1qzkkqzo1.mp3");
			break;
		case 15:
			audioElement.setAttribute("src", "./audio/GenePitneyGeorgeJones-MockinBirdHill.mp3");
			break;	
		case 16:
			audioElement.setAttribute("src", "./audio/GenePitney-ThatGirlBelongsToYesterday1964.mp3");
			break;	
		case 17:
			audioElement.setAttribute("src", "./audio/marc_almond_i_gene_pitney_somethings_gotten_hold_of_my_heart.mp3");
			break;
		case 18:
			audioElement.setAttribute("src", "./audio/GenePitney-TownWithoutPityInGerman1961.mp3");
			break;	
		case 19:
			audioElement.setAttribute("src", "./audio/GenePitney-TownWithoutPityInItanlian1964.mp3");
			break;	
		case 1001:
			audioElement.setAttribute("src", "./audio/GenePitney-ImGonnaBeStrong1964.ogg");
			break;		
		case 1002:
			audioElement.setAttribute("src", "./audio/GenePitney-HalfHeavenHalfHeartache1963.ogg");
			break;	
		case 1003:
			audioElement.setAttribute("src", "./audio/GenePitney-IMustBeSeeingThings1965.ogg");
			break;		
		case 1004:
			audioElement.setAttribute("src", "./audio/GenePitney-IWannaLoveMyLifeAway.ogg");
			break;	
		case 1005:
			audioElement.setAttribute("src", "./audio/GenePitney-HelloMaryLou1960.ogg");
			break;		
		case 1006:
			audioElement.setAttribute("src", "./audio/tumblr_lx1ak2q5Oa1qc1igho1.ogg");
			break;	
		case 1007:
			audioElement.setAttribute("src", "./audio/GenePitney-ShesARebel.ogg");
			break;		
		case 1008:
			audioElement.setAttribute("src", "./audio/TheCrystals-HesARebel.ogg");
			break;	
		case 1009:
			audioElement.setAttribute("src", "./audio/GenePitney-RubberBallbadCondition.ogg");
			break;		
		case 1010:
			audioElement.setAttribute("src", "./audio/BobbyVee-RubberBall.ogg");
			break;	
		case 1011:
			audioElement.setAttribute("src", "./audio/GenePitney-TheManWhoShotLibertyValence.ogg");
			break;		
		case 1012:
			audioElement.setAttribute("src", "./audio/GenePitney-TownWithoutPityInEnglish.ogg");
			break;	
		case 1013:
			audioElement.setAttribute("src", "./audio/GenePitney-CaraMia.ogg");
			break;	
		case 1014:
			audioElement.setAttribute("src", "./audio/tumblr_lrdzb0NQJs1qzkkqzo1.ogg");
			break;
		case 1015:
			audioElement.setAttribute("src", "./audio/GenePitneyGeorgeJones-MockinBirdHill.ogg");
			break;	
		case 1016:
			audioElement.setAttribute("src", "./audio/GenePitney-ThatGirlBelongsToYesterday1964.ogg");
			break;	
		case 1017:
			audioElement.setAttribute("src", "./audio/marc_almond_i_gene_pitney_somethings_gotten_hold_of_my_heart.ogg");
			break;
		case 1018:
			audioElement.setAttribute("src", "./audio/GenePitney-TownWithoutPityInGerman1961.ogg");
			break;	
		case 1019:
			audioElement.setAttribute("src", "./audio/GenePitney-TownWithoutPityInItanlian1964.ogg");
			break;	
		default:
			return;
	}
			
	audioElement.play();
}
