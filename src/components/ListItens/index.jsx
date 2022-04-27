import Itens from "../Itens"
import '../ListItens/style.css'

const ListItens = ({products}) => {
    
    return(
        <div>
             {products.map(produto => <Itens key={produto.code} product = {produto}/>)}
        </div>
    )
    
}

export default ListItens