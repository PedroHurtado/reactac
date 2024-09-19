export default function ListItems({id,name,price}){
    return(
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{price}</div>
            <button data-id={id}>Comprar</button>
        </div>
    )
}