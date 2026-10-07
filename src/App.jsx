import { useState } from 'react'
import './App.css'

function App() {
  const [mostrar, setMostrar] = useState(false)

  return (
    <div className="app">

      <header className="header">
        <h1>Tecnologías Web</h1>
        <p>Conoce las tecnologías que hacen posible la web moderna</p>
      </header>

      <main>

        <section className="hero">
          <h2>Desarrollo Web</h2>

          <p>
            Las tecnologías web permiten crear sitios y aplicaciones
            modernas, interactivas y accesibles desde cualquier dispositivo.
          </p>

          <button onClick={() => setMostrar(!mostrar)}>
            {mostrar ? 'Ocultar información' : 'Explorar tecnologías'}
          </button>

          {mostrar && (
            <div className="info">
              <h3>¿Qué son las tecnologías web?</h3>

              <p>
                Son herramientas y lenguajes utilizados para crear sitios y
                aplicaciones que funcionan a través de Internet.
              </p>
            </div>
          )}
        </section>

        <section className="technologies">

          <div className="card">
            <h3>HTML</h3>
            <p>
              Se utiliza para crear la estructura y el contenido
              de una página web.
            </p>
          </div>

          <div className="card">
            <h3>CSS</h3>
            <p>
              Permite diseñar y darle estilo a las páginas web,
              utilizando colores, tamaños y diseños.
            </p>
          </div>

          <div className="card">
            <h3>JavaScript</h3>
            <p>
              Agrega interactividad y comportamiento dinámico
              a las páginas web.
            </p>
          </div>

          <div className="card">
            <h3>React</h3>
            <p>
              Biblioteca de JavaScript utilizada para crear
              interfaces de usuario modernas.
            </p>
          </div>

        </section>

      </main>

      <footer>
        <p>© 2026 Tecnologías Web | Proyecto React + Vite</p>
      </footer>

    </div>
  )
}

export default App
