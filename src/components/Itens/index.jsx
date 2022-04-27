
const Itens = ({product, handleBuy}) => {
    
    return(
        <li>
            <p>
                {product.code}
            </p>
            <h2>
                {product.name}
                
            </h2>
            <p>
                {product.description}
            </p>
            <p>
                {product.price}
            </p>
            <p>
                {product.discount}
            </p>
            <button onClick = { () => handleBuy(product.code)}>Enviar pro carrinho!</button>
        </li>
    )
}

export default Itens