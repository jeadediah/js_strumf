/*************** GAME SMURFS *********************************/

function CreateSmurfs() {
    this.health = Math.floor(Math.random() * (100 - 10) + 10);
    this.demage = Math.floor(Math.random() * (1000 - 500) + 500);
    this.weapon = ["jul", "hammer", "knife", "baseball bat", "pencil"][Math.floor(Math.random() * 5)];
    this.attack = ["jump", "run", "bites", "climbs", "thinks"][Math.floor(Math.random() * 5)];
    this.info = function (){
        return ` ------STRUMF-----
DEMAGE: ${this.demage}
HEALTH: ${this.health}
WEAPON: ${this.weapon}
ATTACK: ${this.attack}`;};
}
;   



