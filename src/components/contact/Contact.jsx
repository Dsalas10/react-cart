const Contact = () => {
  return (
    <section className="contact">
      <h1 className="heading">Contacto</h1>
      <div className="imagenes">
        <div className="imagen-random">
          <img
            src="https://picsum.photos/600/400" // Imagen aleatoria
            alt="nosotros"
          />
        </div>
        <div className="imagen-mapa">
          <h2>Ubicación</h2>
          <img
            src="https://maps.googleapis.com/maps/api/staticmap?center=Buenos+Aires,Argentina&zoom=13&size=600x400&key=YOUR_API_KEY" // Imagen de mapa estática de Google Maps
            alt="ubicacion"
          />
        </div>
      </div>

      <div className="informacion">
        <div className="infor_horario">
          <p>
            <strong>Horario de Atención:</strong>
          </p>
          <ul>
            <li>Lunes a Viernes: 9:00 AM - 6:00 PM</li>
            <li>Sábados y Domings: 10:00 AM - 24HRS</li>
          </ul>
        </div>
        <div className="infor_direccion">
          <p>
            <strong>Dirección:</strong>
          </p>
          <ul>
            <li>Av. Siempre Viva 123, Springfield, USA</li>
          </ul>

          <p>
            <strong>Teléfono:</strong>
          </p>
          <ul>
            <li>Llámanos, contestaremos todas tus dudas</li>
          </ul>
          <button className="btn- fs-1"> 78572923</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
