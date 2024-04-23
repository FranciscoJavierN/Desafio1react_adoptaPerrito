import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import CardGroup from "react-bootstrap/CardGroup";


//Imagenes
import img1 from "./assets/img/perro1.jpg"
import img2 from "./assets/img/perro_2.jpg"
import img3 from "./assets/img/perro_3.jpg"
import img4 from "./assets/img/perro_4.jpg"


function App() {
  

  return (
    <>
    <Header title="Adopta un perrito"/>
    <CardGroup>
    <Cards
    img={img1} 
    name="Tyson" 
    desc="Tyson es un pequeño cachorrito muy curioso y jugueton, es una pequeña bola de pura grasa y azucar lleno de amor para dar y recibir."
    color="black"
    texto="Ver más" 
    />
    <Cards
    img={img2} 
    name="Prince" 
    desc="Este pequeñito de cuatro patitas esta siempre mirandote con esos ojos de gato con botas, ideal para criarse con niños. adoptalo ya! sus ojitos te lo agradeceran."
    color="primary"
    texto="Ver más" 
    />
    <Cards
    img={img3} 
    name="Rusio" 
    desc="Rusio es un cachorro con caracter de viejo chico, muy guardian a pesar de su tamaño y raza, pero al mismo tiempo muy cariñoso y jugueton."
    color="success"
    texto="Ver más" 
    />
    <Cards
    img={img4} 
    name="Roly" 
    desc="Roly es pura ternura, es puro amor... si eres un catlovers de seguro Roly te hará dudar porque es un cachorro demasiado tierno que te robará el corazón."
    color="warning"
    texto="Ver más" 
    />
    </CardGroup>
    <Footer/>

    </>
  )
}

export default App
