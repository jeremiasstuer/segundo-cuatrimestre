
const ButtonCheck = ({ setOpenModal }) => {

    return (
        <>
            <button onClick={() => setOpenModal('default')} className='btnCarroCheck'><img className='imgCarroCheck' src="./src/imagenes/carro.png" alt="Carro de compras" /></button>
        </>
    );
};

export default ButtonCheck;