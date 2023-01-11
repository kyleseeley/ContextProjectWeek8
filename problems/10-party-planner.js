// Your code here
class PartyPlanner {
	constructor(guestList = [],){
		this.guestList = guestList;
	}
	addToGuestList(name) {
		this.guestList.push(name);
	}
	throwParty(){
		if (!this.guestList.length) {
			return `Gotta add people to the guest list`
		} else if (this.guestList.length === 1) {
			return `Welcome to the party ${this.guestList}`
			} else {
			 let names = this.guestList.slice(0, -1);
			 let lastName = this.guestList.slice(-1);
			 return `Welcome to the party ${names.join(", ")} and ${lastName}`;
		}
	}
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
