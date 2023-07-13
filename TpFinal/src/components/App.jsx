import "../styles/App.css"
import Nav from "./Nav"
import Cards from "./Cards"
import ButtonCheck from "./ButtonCheck"
import Search from "./Search"
import Categorias from "./Categorias"
import { useContext, useState } from 'react';
import { productsContext } from '../context/ProductsContext.jsx';
import Dialog from "./Dialog"
import Alerta from "./Alerta"
import { filterProductos } from "../funciones/filterProductos"

function App() {
  
  //estado del alerta al realizar la compra
  const [alert, setAlerta] = useState(false)
  
  //Carga datos de los elemento que compra
  const [compra, setCompra] = useState([])

  // Carga y filtra los productos 
  const producto = useContext(productsContext)
  const [filters, setFilters] = useState({
    titulo: "",
    categoria: "all",
    minPrice: 0
  })

  //filtrado de elementos que se muestran en pantalla
  const filteredProducts = filterProductos(producto, filters)

  //estado del dialog
  const [openModal, setOpenModal] = useState(undefined);

  return (
    <>
      {alert && <Alerta setAlert={setAlerta}></Alerta>}
      <Nav compra={compra.length} alert={alert}>
        <Categorias cambiar={setFilters}></Categorias>
        <Search cambiar={setFilters}></Search>
        <ButtonCheck compra={compra} setOpenModal={setOpenModal} ></ButtonCheck>
      </Nav>
      <Cards productos={filteredProducts} setCompra={setCompra}></Cards>
      <Dialog openModal={openModal} setOpenModal={setOpenModal} compra={compra} setCompra={setCompra} setAlert={setAlerta}></Dialog>
    </>
  )
}

export default App
