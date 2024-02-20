import "./Movements.css";
import Movement from "./Movement";

function Movements({ movements }) {
  //aqui voy a recibir unas propiedades props pero como solo necesito
  //los {movements:[10, 100, -30]} por destructuracion lo exatraigo
  return (
    <div className="movements">
      {movements.map((movement, index) => (
        <Movement position={index} amount={movement} />
      ))}
    </div>
  );
}

export default Movements;
