import Itens from "../Itens"
import '../ListItens/style.css'

const ListItens = ({products, handleBuy}) => {
    
    return(
        <div>
             {products.map(produto => <Itens key={produto.code} product = {produto} handleBuy = {handleBuy}/>)}
        </div>
    )

}

export default ListItens