import '../styles/App.css'
const Header = ({ nome, idade, sexo }) => {
    return (
        <>
            <header className='header'>
                <div>
                    <h1>Testando</h1>
                    <p>Olá, {nome}</p>
                    <p>Sua idade é {idade}</p>
                    <p>Seu sexo é { sexo }</p>
                </div>
            </header> 
        </>

    )
}

export default Header