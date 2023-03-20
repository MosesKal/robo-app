

function Card ({name, adresse}){
 
    return (
        <div className="card">
                <div className="card-image">
                    <img src={`https://robohash.org/${name}.png`} alt={name}/>
                </div>
                <h1 className="card-title">{name}</h1>
                <h5 className="card-text">{adresse}</h5>  
        </div>
    )
}
export default Card;