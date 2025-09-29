import { useDispatch,useSelector } from 'react-redux'
import { cartAction,clearCart } from './cartAction'
function App(){
    const disp=useDispatch()
    const cart=useSelector((state)=>state.cart)
    const Laptop={
        name:"ACER",
        price:"OORU KODI AAPPU"
    }
    return(
        <>
        <h2>Laptop</h2>

        <button onClick={()=>disp(cartAction(Laptop))}>Add</button>
        <button onClick={()=>disp(clearCart())}>Sub</button>
        {
        cart.map((item,index)=>(
            <div key={index}>
                <h3>{item.name}</h3>
                <h4>{item.price}</h4>
            </div>
        ))
    }
        </>
    )
}
export default App