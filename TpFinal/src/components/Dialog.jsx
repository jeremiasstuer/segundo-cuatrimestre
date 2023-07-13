import "../styles/Dialog.css";
import { getDerivedCards } from "../funciones/getDerivedCards";
import { Modal } from 'flowbite-react';

const Dialog = ({ openModal, setOpenModal, compra, setCompra, setAlert }) => {

  // Funcion que agrega los elementos al carrito de compras
  const listaCompras = getDerivedCards(compra);

  // Precio total de los productos
  const total = compra.reduce((accumulator, item) => accumulator + item.price, 0);

  // Si realiza la compra, resetea el carrito 
  const realizarCompra = () => {
    setCompra([]);
    setOpenModal(undefined);
    setAlert(true);
  };

  // Eliminar producto del carrito
  const deleteProducto = (itemId) => {
    const updatedCompra = compra.filter((item) => item.id !== itemId);
    setCompra(updatedCompra);
  };

  return (
    <>
      <Modal className='w-auto' show={openModal === 'default'} onClose={() => setOpenModal()}>
        <Modal.Header>Tus productos seleccionados</Modal.Header>
        <Modal.Body>
          <ul className='ulCompra'>
            {listaCompras.map((item) => {
              return (
                <li className='liCompra' key={item.id}>
                  <img className='imgCompra' src={item.image} alt="" />
                  <p>{item.title} x{item.cantidad}</p>
                  <p className='font-bold'>${item.precioTotal}</p>
                  <button onClick={() => deleteProducto(item.id)} className='btnCompra'>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                    </svg>
                  </button>
                </li>
              );
            })}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <div className='contFooter'>
            <div className='contBotonera'>
              <button className='btnDialogCompra' onClick={realizarCompra}>Comprar</button>
              <button className='btnDialogCompra' color="gray" onClick={() => setOpenModal(undefined)}>
                Seguir comprando
              </button>
            </div>
            <div> <p className='totalPrice'>Total de su compra: ${total}</p></div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Dialog;
