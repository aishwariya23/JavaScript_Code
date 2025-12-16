class Bank_account{
    #balance;//private property

    constructor(owner,balance)
    {
        this.owner = owner;
        this.#balance=balance
    }
    display()
    {
        console.log("I am the owner",this.owner,this.#balance);
    }
}
let user1 = new Bank_account("Aish",1000);
user1.display();
//user1.#balance=2000;
user1.display();