import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import icon from "./svg/rectangle.svg"
import List from './components/List';
function App() {
  return (
    <div className="App App-header">
      <Button type='success' title='A'/>
      <Button type='warning' title='B'/>
      <Button type='error' title='C'/>
      <Button disabled={true} type='error' title='E'/>
      <button className='button'>D</button>
      <img src={process.env.PUBLIC_URL +'/logo512.png'}/>
      <img src={icon} alt='rect'/>
      <List/>
    </div>
  );
}

export default App;
