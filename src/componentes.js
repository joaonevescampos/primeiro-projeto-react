import { useState } from 'react'

const ArCondicionado = () => {
    const [graus, setGraus] = useState(18)

    const esfriar = (e) => {
        e.preventDefault()
        if (graus <= 0) {
            return setGraus(graus)
        }
        return setGraus(graus - 1)
    }

    const esquentar = (e) => {
        e.preventDefault()
        if (graus >= 30) {
            return setGraus(graus)
        }
        return setGraus(graus + 1)
    }
    return (
        <div>
            <h1>Ar Condicionado</h1>
            <form>
                <h2>Temperatura</h2>
                <h3>{graus}°C</h3>
                <button onClick={esfriar}>Esfriar</button>
                <button onClick={esquentar}>Esquentar</button>
            </form>
        </div>
    )
}

export default ArCondicionado

