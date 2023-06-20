import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function App() {
  const name = '기택';
  const list = ['우유','딸기', '바나나']
  return (
    <Fragment>
      <h1 className='orange'>hello !</h1>
      <h2>{`hello! ${name}`}</h2>
      <ul>
        {list.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default App;
