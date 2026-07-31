import { useAuth } from "../../contexts/AuthContext";

function Painel(){
    const {usuario} = useAuth()

    return (
        <main className="container" style={{padding: '32px 16px'}}>
            <h1>Área do assinante</h1>
            <p>Bem-vindo de volta, {usuario.nome}</p>
            <p>SUa ediçaõ do Lamilne chega hoje as 18:: horas</p>
        </main>
    )
}

export default Painel