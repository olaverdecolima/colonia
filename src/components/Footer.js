import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Iniciativa Ciudadana Ambiental"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Inicio
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/quienes-somos">
                        Quiénes somos
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/calendario">
                        Calendario
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/eventos">
                        Eventos
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/areas">
                        Áreas de trabajo
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contacto">
                        Contacto
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="Facebook" href="https://www.facebook.com/Colonia-Sustentable-Las-Palmas-Colima-818722064815512">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="Twitter" href="https://twitter.com/OlaVerdeITC/">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="Instagram" href="https://https://www.instagram.com/olaverde_colima/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
