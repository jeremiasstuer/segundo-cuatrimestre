import "../styles/Cards.css"

const Cards = ({ productos, setCompra }) => {

    const handler = (value) => {
        setCompra((prevCompra) => [...prevCompra, value])
    }
 
    return (

        <>
            <div className='contCards'>
                <ul>
                    {productos.map(item =>
                        <li className='liCards' key={item.id}>
                            <img className='imgCards' src={item.image} alt="" />
                            <div className='contInfo'>
                                <p className='pTitle'>{item.title}</p>
                                <p className='pPrice'><span>$</span>{item.price}</p>
                            </div>
                            <div className='contCarroCompras'>
                                <button onClick={() => handler(item)} className='btnCarroCompras'><img className='imgCarroCompras' src="../src/imagenes/carro-compras.png" alt="" /></button>
                            </div>
                        </li>)
                    }
                </ul>
            </div>
        </>
    );
};

export default Cards;