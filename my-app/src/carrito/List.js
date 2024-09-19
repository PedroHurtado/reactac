import ListItems from "./ListItems"

export default function List(){
    const items = [
        {id:1, name:'carbonara', price:5},
        {id:2, name:'cuatro quesos', price:4.5},
    ]
    function handlerClick(){

    }
    return(
        <div onClick={handlerClick}>
            {items.map(item=><ListItems key={item.id} {...item} />)}
        </div>
    )
}