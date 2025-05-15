import React, { useState} from "react";
import '../styles/App.css';

// class App extends Component {
//     render() {

//         return(
//             <div id="main">
//                {/* Do not remove the main div */}
//                <h1>hello</h1>
//             </div>
//         )
//     }
// }

const FLAMES = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];

function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const calculateFLAMES = () => {
    if (!name1.trim() || !name2.trim()) {
      setResult("");
      return;
    }

    let arr1 = name1.split("");
    let arr2 = name2.split("");

    for (let i = 0; i < arr1.length; i++) {
      let index = arr2.indexOf(arr1[i]);
      if (index !== -1) {
        arr1[i] = "";
        arr2[index] = "";
      }
    }

    const remainingLength = arr1.filter(Boolean).length + arr2.filter(Boolean).length;
    const outcome = FLAMES[remainingLength % 6];
    setResult(outcome);
  };

  const clearFields = () => {
    setName1("");
    setName2("");
    setResult("");
  };

  return (
    <div className="container">
      <input
        data-testid="input1"
        name="name1"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        placeholder=""
      />
      <input
        data-testid="input2"
        name="name2"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        placeholder=""
      />
      <button
        data-testid="calculate_relationship"
        name="calculate_relationship"
        onClick={calculateFLAMES}
      >
        Calculate Relationship Future
      </button>
      <button data-testid="clear" name="clear" onClick={clearFields}>
        Clear
      </button>

      <h3 data-testid="answer">{result}</h3>
    </div>
  );
}

export default App;