
/**
 * Combat de personnages
On va faire un exercice standard de la POO : créer une classe personnage, et faire se battre
deux personnages entre eux. Dans cette partie, il n'y a rien à faire dans le DOM, tout se fait
dans la console, afin de ne travailler que l’aspect POO et JS.
J'ai volontairement poussé à l’excès le détail des choses à faire pour que tout le monde avance
correctement et étape par étape.
 */

//Classe, attributs et méthodes
//Partie 1 :
// créez une classe Personnage avec les attributs suivants :

//name
//life
//attack
//defense



//Partie 2 :
/**créez le constructeur
 donnez-lui un paramètre "nom"
 si le nom est renseigné lors de l'appel du constructeur, assignez la valeur du paramètre à la
propriété "nom" de l'objet courant, puis affichez un console.log qui affiche "Nouveau
personnage NOM créé !"
 sinon affichez un message d'erreur */

class Personnage {
    constructor(name, life, attack, defense) {//constructeur
        this.name = name;//propriété
        this.life = life;//propriété
        this.attack = attack;//propriété
        this.defense = defense;//propriété
        this.existing = false;//propriété
        if (name) {//si le nom est renseigné
            console.log(`Nouveau personnage ${name} créé !`);//affiche un message
        } else {//sinon
            console.log("Erreur, le nom n'est pas renseigné");//affiche un message d'erreur
        }
    }
}

/**Parti3  après votre classe (mais dans le même fichier), créez un nouveau personnage dans une
variable perso1
 vérifiez que le message d'erreur de votre constructeur fonctionne bien */

let perso1 = new Personnage("Jean", 50, 50, 50);//création d'un nouveau personnage
console.log(perso1);//affiche le personnage

/*créez une méthode info qui affiche UN console log affichant le nom, la vie, l'attaque et la
défense du personnage
 utilisez votre méthode info sur votre perso1 pour afficher les infos
*/

Personnage.prototype.info = function () {//création d'une méthode info
    console.log(`Nom : ${this.name}, Vie : ${this.life}, Attaque : ${this.attack}, Défense : ${this.defense}`);
}//affiche les infos du personnage

perso1.info();//affiche les infos du personnage


/**créez un deuxième personnage perso2. N'oubliez pas de lui donner un nom
 assignez-lui des valeurs numériques pour vie, attaque et defense
 affichez ses infos
 */

let perso2 = new Personnage("Jyyno", 50, 50, 50);//création d'un nouveau personnage
perso2.info();//affiche les infos du personnage

/**créez une nouvelle méthode attaquer()
 donnez-lui un paramètre "defenseur"
 affichez un console.log "Nouvelle attaque de NOMATTAQUANT sur NOMDEFENSEUR !!"
 si l'attaque de l'attaquant est supérieure à la défense du défenseur : retirer 10 points de vie
au défenseur
 si l'attaque de l'attaquant est égale à la défense du défenseur : retirer 5 points de vie au
défenseur
 si l'attaque de l'attaquant est inférieure à la défense du défenseur : retirer 5 points de vie à
l'attaquant
 à la fin de votre méthode attaquer (à l'intérieur), afficher les infos de l'attaquant et du
défenseur via la méthode info()
 dans votre script, faites attaquer perso2 par perso1 en utilisant la méthode attaquer() avec le
bon paramètre
 changer les valeurs d'initialisation de vos personnages pour générer plusieurs cas de figures,
et constatez que ça marche 7*/

Personnage.prototype.attaquer = function (defenseur) {//création d'une méthode attaquer
    console.log(`Nouvelle attaque de ${this.name} sur ${defenseur.name} !!`);//affiche un message
    if (this.attack > defenseur.defense) {//si l'attaque de l'attaquant est supérieure à la défense du défenseur
        defenseur.life -= 10;//retirer 10 points de vie au défenseur
    } else if (this.attack === defenseur.defense) {//si l'attaque de l'attaquant est égale à la défense du défenseur
        defenseur.life -= 5;//retirer 5 points de vie au défenseur
    } else {//si l'attaque de l'attaquant est inférieure à la défense du défenseur
        this.life -= 5;//retirer 5 points de vie à l'attaquant
    }
    this.info();//affiche les infos de l'attaquant
    defenseur.info();//affiche les infos du défenseur
    if (this.life <= 0) {//si la vie de l'attaquant est inférieur ou égale à zéro
        console.error(`Le personnage ${this.name} est dead.`);//affiche un message d'erreur
        this.existing = false;//mettez la propriété "existe" de l'attaquant à false
    } else if (defenseur.life <= 0) {//si la vie du défenseur est inférieur ou égale à zéro
        console.error(`Le personnage ${defenseur.name} est dead.`);//affiche un message d'erreur
        defenseur.existing = false;//mettez la propriété "existe" du défenseur à false
    }
}

perso1.attaquer(perso2);//fait attaquer perso2 par perso1 en utilisant la méthode attaquer() avec le bon paramètre


/**dans votre méthode attaquer()
 si la vie de l'attaquant est inférieur ou égale à zéro, afficher un console.error "Le personnage
NOM_ATTAQUANT est dead.", et mettez la propriété "existe" de l'attaquant à false
 si la vie du défenseur est inférieur ou égale à zéro, afficher un console.error "Le personnage
NOM_DEFENSEUR est dead.", et mettez la propriété "existe" du défenseur à false 8 */


//==================================================================================================

/** dans votre classe, définissez une méthode statique nombreAleatoire, qui retourne un
nombre aléatoire entre 20 et 100
 définissez les caractéristiques vie, attaque et défense de vos personnages en utilisant la
méthode nombreAleatoire
 relancer le script plusieurs fois pour vérifier que ça marche, et que les deux personnages
peuvent gagner chacun leur tour 9 */

Personnage.nombreAleatoire = function () {//création d'une méthode statique nombreAleatoire
    return Math.floor(Math.random() * 80) + 20;//retourne un nombre aléatoire entre 20 et 100
}

perso1.life = Personnage.nombreAleatoire();//définissez les caractéristiques vie, attaque et défense de vos personnages en utilisant la méthode nombreAleatoire
perso1.attack = Personnage.nombreAleatoire();
perso1.defense = Personnage.nombreAleatoire();
perso2.life = Personnage.nombreAleatoire();
perso2.attack = Personnage.nombreAleatoire();
perso2.defense = Personnage.nombreAleatoire();

perso1.info();//affiche les infos du personnage1
perso2.info();//affiche les infos du personnage2

/** dans votre script d'initialisation, mettez tout en commentaire
 créez une constante nbrJoueur, initialisez-la à 2
 créez un tableau players initialisé à vide
 faites une boucle qui va :
o demander de saisir un nom
o créer un nouveau Personnage avec le nouveau nom
o donner des valeurs aléatoires pour la vie, l'attaque et la défense
o afficher les infos du personnage
o insérer le personnage dans le tableau players
10 */

const nbrJoueur = 2;//création d'une constante nbrJoueur
const players = [];//création d'un tableau players initialisé à vide

for (let i = 0; i < nbrJoueur; i++) {//faites une boucle qui va demander de saisir un nom
    let name = prompt("Saisir un nom");//créer un nouveau Personnage avec le nouveau nom
    let perso = new Personnage(name);//création d'un nouveau personnage avec le nouveau nom
    perso.life = Personnage.nombreAleatoire();//donner des valeurs aléatoires pour la vie, l'attaque et la défense
    perso.attack = Personnage.nombreAleatoire();//afficher les infos du personnage
    perso.defense = Personnage.nombreAleatoire();//insérer le personnage dans le tableau players
    perso.info();//afficher les infos du personnage
    players.push(perso);//insérer le personnage dans le tableau players
}

/**dans votre script, faire une fonction run() qui va se faire affronter les joueurs présents dans
le tableau player
 ce sera une fonction récursive
 il y aura pas mal de boucles
 afficher le gagnant à la fin
 changer votre constante nbrJoueur à 3 une fois que ça marche */

function run() {//création d'une fonction run()
    let i = 0;//création d'une variable i
    while (i < players.length) {//tant que i est inférieur à la longueur du tableau players
        if (players[i].existing) {//si le personnage existe
            let j = 0;//création d'une variable j
            while (j < players.length) {//tant que j est inférieur à la longueur du tableau players
                if (players[j].existing && j !== i) {//si le personnage existe et que j est différent de i
                    players[i].attaquer(players[j]);//fait attaquer le personnage j par le personnage i en utilisant la méthode attaquer() avec le bon paramètre
                }
                j++;
            }
        }
        i++;
    }
    let k = 0;
    while (k < players.length) {
        if (players[k].existing) {
            console.log(`Le gagnant est ${players[k].name}`);
        }
        k++;
    }
}

run();
