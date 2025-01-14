import './App.css';
import Home from './Home';
import Article from './components/Article';
import Test from './components/Test';
import Quiz from './question/Quiz';
import Quizmain from './question/Quizmain';
import Quiztest from './question/Quiztest';
import ResultBox from './components/ResultBox';
import Categories from './components/Categories';
import { Router } from '@reach/router';



function App() {
  return (
    <div className="App">
      <Router>
            <Quizmain path="/questions"/>
            <Home path="/home"/>
            <Categories path="/categories"/>
            <Article path="/article"/>
            <ResultBox path="/quizResult"/>
        </Router>
    </div>
  );
}

export default App;
