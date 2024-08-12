import logo from './logo.svg';
import './App.css';
import Cricket from './classes/Cricket';
import IndianTeam from './classes/IndiaTeam';
import Australia from './classes/Australia';

function App() {
  let team = new Cricket();

  let indianTeamMembers = new IndianTeam();
   
  indianTeamMembers.noofTeamMembers(); 
  //indianTeamMembers.Batsman = 5;
  indianTeamMembers.noofBowlers =6;
  indianTeamMembers.noofWicketKeeper =3;
  indianTeamMembers.bowling();
  indianTeamMembers.player();
  
  console.log(indianTeamMembers);

  let australia = new Australia();
  australia.noofTeamMembers =21;                        
  australia.Batsman =6;
  australia.bowling =7;
  australia.noofWicketKeeper= 4;
  console.log(australia);
   
  

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
