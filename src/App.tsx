import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

interface User {
  id: number
  nome: string
  idade: number
}

export default function App() {
  const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get('https://is-back.onrender.com/pessoas')
      console.log(response)
      setUsers(response.data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Usuários</h1>
      </header>
      <main>
        {users.length > 0 ? (
          <ul>
            {users.map((user: User) => (
              <li key={user.id}>
                {user.nome} — {user.idade} anos
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum usuário encontrado.</p>
        )}
      </main>
    </div>
  )
}
