import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './estilos.css';

export const MultipleCustomHooks = ()=>{

    const { state, increment } = useCounter(1);

     const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);

     const { author, quote } = !!data && data[0];
     console.log(author, quote);
    return (

        <div>
            <h2>Braking Bads Frases</h2>
            <hr />

            {
                loading
                ?
                (
                    <div className="alert alert-danger text-center">
                        Loading...
                    </div>
                )
                :
                
                (
                    <blockquote className="blockquote">
                        <p className="mb-0">{quote}</p>
                        <footer className="blokquote-footer">{ author }</footer>
                    </blockquote>
                )

            }

            
            <button onClick = {increment}
                    className="btn btn-primary"
                    >
                    Siguiente Frase</button>
           
        </div>

    )

}