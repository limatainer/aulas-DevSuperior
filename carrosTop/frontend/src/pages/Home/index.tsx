import Navbar from '../../components/Navbar';
import { ReactComponent as MainImage } from 'assets/images/car-header.svg';
import './styles.css';
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="base-card car-box">
          <div className="descritivo">
            <h1>O carro perfeito para você</h1>
            <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
        <div className="base-card button-box">
          <div className="container dentro">
            <div className="row">
              <div className="col">
                <p>Comece agora a navegar</p>
              </div>
              <div className="col">
                <Link to="/catalog">
                  <button type="button" className="btn btn-primary">Ver Catalogo</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}