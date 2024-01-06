import { useState } from 'react'

const Main = () => {
    const [name, setName] = useState()
    const [nameSent, setNameSent] = useState()

    const frutas = ['banana', 'laranja', 'maçã', 'melão']

    const escreveu = (evento) => {
        setName(evento.target.value)
        return console.log(`${name}`) 
    }

    const enviou = (evento) => {
        evento.preventDefault()
        return setNameSent(name)
    }

    return (
        <main>
            <p>Clique no botão</p>
            <form>
                <input type="text" placeholder="Digite seu nome" onChange={escreveu}></input>
                <button type="submit" onClick={enviou}>
                    Enviar
                </button>
                {nameSent && (
                    <>
                        <div>O seu nome é {nameSent}.</div>
                        <button>Limpar</button>
                    </>
                )}
            </form>
            <section>
                <ul>
                    {frutas.length > 0 ?
                        frutas.map((fruta) => {
                            return <li>{ fruta }</li>
                        }) : (
                            <p>Não existe nenhuma fruta</p>
                        )
                    }
                </ul>
            </section>
        </main>
    )
}

export default Main