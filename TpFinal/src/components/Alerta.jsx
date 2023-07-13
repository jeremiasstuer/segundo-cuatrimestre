import "../styles/Alert.css"
import { Alert } from 'flowbite-react';

export default function Alerta({ setAlert }) {
  return (
    <Alert
      className='alert'
      color="success"
      onDismiss={() => setAlert(false)}
    >
      <p className="pAlert">
        Su compra fue realizada con exito!.
      </p>

    </Alert>
  )
}