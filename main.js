let myPet = {
    name: "Eevee",
    species: "dog",
    nicknames: ['dog', 'EZ', 'son of a bitch'],
    age: 7,
    favoriteToys: [],
    play: function(toy) {
        let random = Math.floor(Math.random() * 10) + 1;
        if (random < 6) {
            this.favoriteToys.push(toy);
            window.alert(`The ${this.species} seems to like the ${toy} you gave it..`)
        } else {
            window.alert(`The ${this.species} looks at the ${toy} and walks away. Maybe you should try something else..`)
        };
    },
    bark: function() {
        window.alert(`${this.name} barks loudly!`);
    },
    rollover: function() {
        window.alert(`${this.name} rolls over. You should probably pet her lil tummy.`)
    },
    run: function() {
        window.alert(`${this.name} runs all over the yard! You won't be able to catch her. That cheeky ${this.nicknames[2]}..`);
    },
}

myPet.bark();
myPet.rollover();
myPet.run();

myPet.play('ball');
myPet.play('bone');
myPet.play('shoe');
myPet.play('stuffed animal');
myPet.play('priceless photo');