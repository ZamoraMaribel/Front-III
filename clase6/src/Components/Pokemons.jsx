import { useState } from 'react'

const Pokemons = () => {

    const [usuario, setUsuario] = useState({
        name: '',
        edad: '',
        pokemonFavorito: ''
    })

    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(usuario.name.length > 3 && usuario.pokemonFavorito.length > 0){
            setShow(true)
            setError(false)
        } else {
            setError(true)
            setShow(false)
        }
    }

    console.log(usuario) // haciendo un cambio para mostrar un commit

return (
    <form onSubmit={handleSubmit}>
        <label >Nombre:</label>
        <input type="text" onChange={(event) => setUsuario({...usuario, name: event.target.value})}/>
        <label >Edad:</label>
        <input type="text" onBlur={(event) => setUsuario({...usuario, edad: event.target.value})}/>
        <label >Pokemon favorito:</label>
        <input type="text" onBlur={(event) => setUsuario({...usuario, pokemonFavorito: event.target.value})}/>
        <button>Registrar</button>

        {error && <h6>Corrobore bien la info</h6>}

        {show ? <>
            <h4>Gracias {usuario.name}!</h4>
            <h4>tu Pokemon favorito es {usuario.pokemonFavorito}</h4>
        </>
        : null
        }
        </form>
)
}

export default Pokemons