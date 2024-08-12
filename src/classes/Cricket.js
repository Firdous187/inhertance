class Cricket{

    constructor(){
        console.log("Inside Cricket team");

        this.noofTeamMembers= 11;
        this.noofBowlers=6;
        this.noofWicketKeeper=2;
        this.Batsman = 11;

    }

    bowling = ()=>{
        console.log("Bowling in cricket refers to the act of delivering the ball towards the batsman with the intention of dismissing them or restricting the number of runs they can score. ");
    }

    batsman =() =>{
        console.log("A batsman (or batter) in cricket is a player who specializes in hitting the ball to score runs.");
    }

    wicketKeeper =() =>{
        console.log(" The primary role of the wicketkeeper is to stand behind the stumps and the batsman, ready to catch the ball if the batsman misses or edges it. ");
    }

    fielding =() =>{
        console.log("Fielding in cricket refers to the actions of the fielding team to prevent runs or get the batsman out.")
    }
}

export default Cricket;