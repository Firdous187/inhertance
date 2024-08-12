import Cricket from "./Cricket";


class IndianTeam extends Cricket{

    
    constructor(){
        super();
        console.log("Inside the Indian team");
        
    }
    bowling =() =>{
      console.log("india wons the world cup");
    }
    noofTeamMembers =() =>{
        console.log("Total no of team is 11 players");
    }

    player =() =>{
        console.log("No players");
    }

    player =(a) =>{
        console.log("1 players");
    }

    player =(a, b) =>{
        console.log("2 players");
    }

    player =(a,b,c) =>{
        console.log("3 players");
    }
};




export default IndianTeam;