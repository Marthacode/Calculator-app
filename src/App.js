import Layout from './components/ui/Layout';

import './App.css';

function add(a,b){
  let num1 = a;
  let num2 = b;
  let sum = num1 + num2;
  console.log(sum)
}
add();

function subtract(a,b){
  
}
function App() {
  return (
    <div className="App">
      <Layout /> 

    </div>
  );
}

export default App;
 