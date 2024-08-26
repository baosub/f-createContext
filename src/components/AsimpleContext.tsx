import { createContext, useContext } from "react"


// Creamos el contexto
const NameContext = createContext<string>('');




const AsimpleContext = () => {
    //const [name, setName] = useState('Juan');
    const name = "Ana";


    return (

        <NameContext.Provider value={name}>
            <Grandparent />
        </NameContext.Provider>


    )
}



// Componente abuelo
function Grandparent() {
    return (
        <div>
            <Parent />
        </div>
    );
}

// Componente padre
function Parent() {
    return (
        <div>
            <Child />
        </div>
    );
}

// Componente nieto
function Child() {
    const name = useContext(NameContext);

    return (
        <><h2>Hola, mi nombre es {name}!</h2>



        </>

    );
}

export default AsimpleContext
