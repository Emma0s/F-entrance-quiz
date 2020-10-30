// eslint-disable-next-line import/no-extraneous-dependencies
import 'regenerator-runtime/runtime';
import './App.scss';
import { get } from './request';
//
// class App extends Component {
//   render() {
//     return (
//       <div data-testid="app" className="App">
//
//       </div>
//     );
//   }
// }
//
// export default App;

get()
  // .then((res) => res.json())
  .then((data) => {
    document.getElementById('root').innerText = data;
  });
// TODO GTB-综合: * 这也太一言难尽了吧，同学加油啊！
