import './App.scss';
import Products from './components/product';

import { useSelector } from 'react-redux';//Access the state to READ only
import { useDispatch } from 'react-redux';//to modify the state
import { increment,decrement, increaseBYAmount, decreaseBYAmount } from './redux/slice/counterSlice';

function App() {
  const counter = useSelector(state=> state.counter.value);
  const dispatch = useDispatch();
  // const  incre = ()=>{
  //   dispatch(increment());
  // }// this is used in place of button onclick function

  return (
    <div className="App">
         <Products />
         {/* <button style={{position:"fixed",top:"50%",transform:"translateY(-50%)",right:0,width:"50px",height:"50px"} }onClick={()=> setShow(!show)}>Cart</button>
         <div className={`cart ${show ? "cart-show" :"cart-hide"}`} onClick={()=> setShow(!show)}>Cart</div> */}

      {/* <header className="App-header">
       <button onClick={()=>dispatch(decreaseBYAmount(7))}>DECREMENT BY 7</button>
       <button onClick={()=>dispatch(decrement())}>DECREMENT</button>
            {counter}
       <button onClick={()=>dispatch(increment())}>INCREMENT</button>
       <button onClick={()=>dispatch(increaseBYAmount(10))}>INCREMENT BY 10</button>
      </header> */}
   
    </div>
  );
}

export default App;
