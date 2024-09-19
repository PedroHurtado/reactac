import ListItems from "./ListItems"
import pubsub from '../pubsub'


export default function List(){
    const items = [
        {id:1, name:'carbonara', price:5},
        {id:2, name:'cuatro quesos', price:4.5},
    ]
    function handlerClick(ev){
        ev.stopPropagation()
        const {nativeEvent} = ev;
        const node = nativeEvent.composedPath().find(n=>n.dataset && 'id' in n.dataset)
        if(node){
            const {id} = node.dataset
            const pizza = items.find(p=>p.id===Number(id))
            if(pizza){
                pubsub.emit('carrito', structuredClone(pizza))
            }
        }
    }
    return(
        <div onClick={handlerClick}>
            {items.map(item=><ListItems key={item.id} {...item} />)}
        </div>
    )
}