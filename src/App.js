import { Introduction } from "./components/Introduction";
import './App.css';



const App = () => {
  return (
    <div className="App">
      <img className="my-photo" src="https://avatars.githubusercontent.com/u/95439358?v=4" alt="React Image" />
      <Introduction className="jumbotron"
        myName="Adallah Abada"
        role="FronEnd Developer"
        desc="I am a Front-End Developer from Cambridge, UK. I have experience in responsive CSS, JavaScript and React. Motivated to learn, grow, and contribute to team success through hard work and a strong passion for coding. I have just finished a bootcamp with Purple Beard"
      />
    </div>
  );
}

export default App;
