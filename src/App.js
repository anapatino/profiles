import { Testimony } from "./components/testimony/testimony.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>This is what some people say about learning javascript</h1>
      <Testimony
        name="Anna"
        country="Canada"
        image="emma"
        position="Software Engineer"
        business="Spotify"
        testimonial="This job is amazing"
      />
      <Testimony
        name="Lucas"
        country="Suecia"
        image="shawn"
        position="Software Engineer"
        business="Amazon"
        testimonial="Learning Javascript is hard"
      />
      <Testimony
        name="Cecilia"
        country="Colombia"
        image="sarah"
        position="Dev"
        business="Facebook"
        testimonial="This job is amazing"
      />
    </div>
  );
}

export default App;
