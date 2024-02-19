import { useState } from 'react'
import accounts from './cuentas'
import './App.css'
import Welcome from './Welcome/Welcome'
import Login from './Login/Login'
import Summary from './Summary/Summary'
import Movements from './Movements/Movements'
import Balance from './Balance/Balance'

function App() {
  const [account, setAccount] = useState(accounts[0])
  const { movements } = account

  // TAREAS
  // 1. Hacer el componente Welcome
  //  recibe una propiedad que sea el nombre de usuario
  //  si está vacío muestra "Log in to get started"
  // si está lleno muestra "Bienvenido, {nombre de usuario}"

  // 2. Hacer el componente Login -> usar useRef como ya hicimos para hacer el login

  // 3. Hacer los movimientos
  //  recibe una propiedad que es el array de movimientos
  //  muestra una lista de movimientos que son un componente llamado Movement
  //  que recibe una propiedad que es el movimiento
  return (
    <>
      <nav>
        <Welcome />
        <Login />
      </nav>

      <main className="app">
        <Balance movements={movements} />
        <Movements />
        <Summary movements={movements} />

        <div className="operation operation--transfer">
          <h2>Transfer money</h2>
          <form className="form form--transfer">
            <input type="text" className="form__input form__input--to" />
            <input type="number" className="form__input form__input--amount" />
            <button className="form__btn form__btn--transfer">&rarr;</button>
            <label className="form__label">Transfer to</label>
            <label className="form__label">Amount</label>
          </form>
        </div>

        <div className="operation operation--loan">
          <h2>Request loan</h2>
          <form className="form form--loan">
            <input
              type="number"
              className="form__input form__input--loan-amount"
            />
            <button className="form__btn form__btn--loan">&rarr;</button>
            <label className="form__label form__label--loan">Amount</label>
          </form>
        </div>

        <div className="operation operation--close">
          <h2>Close account</h2>
          <form className="form form--close">
            <input type="text" className="form__input form__input--user" />
            <input
              type="password"
              maxlength="6"
              className="form__input form__input--pin"
            />
            <button className="form__btn form__btn--close">&rarr;</button>
            <label className="form__label">Confirm user</label>
            <label className="form__label">Confirm PIN</label>
          </form>
        </div>

        <p className="logout-timer">
          You will be logged out in <span className="timer">05:00</span>
        </p>
      </main>
    </>
  );
}

export default App;
