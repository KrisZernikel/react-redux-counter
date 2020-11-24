import { connect } from 'react-redux'
import { INCREMENT, DECREMENT } from './actions/actionTypes'
import './App.css';

function App(props) {
  const { dispatch } = props
  const handleIncrement = () => {
    dispatch({ type: INCREMENT })
  }
  const handleDecrement = () => {
    dispatch({ type: DECREMENT })
  }
  return (
    <div className="App">
      <h1>Count</h1>
      <p>{props.count}</p>
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.counter.count
  }
}

export default connect(mapStateToProps)(App);
