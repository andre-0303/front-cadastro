import React, { useEffect, useState, useRef } from "react";
import "./Cadastro.css";
import Delete from "../../../assets/delete.png";
import api from "../../../services/api"; 
const Cadastro = () => {
  const [users, setUsers] = useState([]);

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const getUsers = async () => {
    try {
      const usersFromApi = await api.get("/users");
      setUsers(usersFromApi.data); 
    } catch (error) {
      console.error("Erro ao buscar os usuários:", error);
    }
  };

  async function createUsers() {
    await api.post('/users', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })

    usersFromApi()
  }

  async function deleteUsers(email) {
    if (!email) {
      alert("Erro: E-mail não fornecido!");
      return;
    }
  
    try {
      await api.delete(`/users/${email}`);
      alert("Usuário deletado com sucesso!");
      getUsers(); // Atualiza a lista após deletar
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
      alert("Erro ao deletar o usuário. Verifique se o e-mail está correto!");
    }
  }
  

   
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="containerForm">
      <form>
        <h1>Cadastro de Usuários</h1>
        <label htmlFor="nome">Nome:</label>
        <input name="nome" type="text" placeholder="Digite seu nome" required ref={inputName}/>
        <label htmlFor="idade">Idade:</label>
        <input name="idade" type="number" placeholder="Digite sua idade" required ref={inputAge}/>
        <label htmlFor="email">Email:</label>
        <input name="email" type="email" placeholder="Digite seu email" required ref={inputEmail}/>
        <button type="submit" onClick={createUsers}>Enviar</button>
      </form>

      {/* Renderiza a lista de usuários */}
      {users.map((user) => (
        <div key={user.email} className="card">
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button onClick={() => deleteUsers(user.email)}>
            <img src={Delete} alt="Deletar usuário" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cadastro;
