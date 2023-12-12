import "./index.css";

export default function Footer() {
  return (
    <footer className="bg-danger text-bg-danger">
      <div className="info-desarrollador">Desarrollado por: Alvaro Hamon</div>
      <div className="iconos">
        <a
          target="_blank"
          className="icono text-bg-danger"
          href="https://github.com/AlvaroHamon"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/alvarohamon/"
          className="icono text-bg-danger"
        >
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </footer>
  );
}
