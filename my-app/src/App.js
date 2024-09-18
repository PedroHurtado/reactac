import Ternario from "./if/Ternario";
import Array from "./array/Array";
import Calendar from "./calendar/Calendar";
function App() {
  let name ="Pedro"
  const a = {
    id:1,
    name:'pedro',
    data:[1,2,3,4,5,6]
  }
  return (
    <>
      <Calendar/>
      <div>Hello World {name}</div>
      <Ternario/>
      <Array {...a}/>
    </>
  );
}
export default App;
