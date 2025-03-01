import React from "react";
import { Link } from "react-router-dom";
import './Home.css'
import Img from "../../../assets/image1.png";
import api from "../../../services/api";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="left">
          <h1>Empresa Z </h1>
          <p>
            Empresa Z é uma líder inovadora no mercado, dedicada a oferecer
            soluções tecnológicas avançadas para empresas de todos os tamanhos.
            Com um foco em eficiência e personalização, nossos produtos e
            serviços são projetados para atender às necessidades específicas de
            nossos clientes, garantindo um impacto positivo nos seus negócios.
            Com mais de 10 anos de experiência, a Empresa Z é a parceira ideal
            para transformar desafios em oportunidades, impulsionando a inovação
            no mundo corporativo.
          </p>
          <Link to="/cadastro" style={{ color: "#fff" }}>
            Ir para o Cadastro
          </Link>
        </div>
        <div className="right">
          <img src={Img} alt="img" />
        </div>
      </div>
    </>
  );
};

export default Home;
