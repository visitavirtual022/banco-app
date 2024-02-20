import "./Welcome.css";

function Welcome({ user }) {
  //quiero obtener el nombre del usuario (sin apellido)
  const name = user.split(" ")[0]; // "J"
  // si el usuario esta vacio, mostrar "LOg in to get started"

  return (
    <>
      <p className="welcome">
        {user ? `Bienvenido ${name}` : "Log in to get started"}
      </p>
      <img src="logo.png" alt="Logo" className="logo" />
    </>
  );
}

export default Welcome;
