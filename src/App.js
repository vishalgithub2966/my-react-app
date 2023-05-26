import './App.css';
import Header from "./Header";
import Students from './Students';

//import Test from '/Test.js';
function App() {
  let students =
    [
      {
        roll:1,
        name:"ritika",
        mark:45
      },
      {
        roll:2,
        name:"pandu",
        mark:31
      },
      {
        roll:3,
        name:"boby",
        mark:17
      },
      {
        roll:5,
        name:"shubham",
        mark:52
      }
    ]
  return (
    <>
      <Header title="Student Info" searchBar={false} />
      <Students studentinfo={students} />
  </>
  );
}
  
export default App;
