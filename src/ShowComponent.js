function ShowComponent({label, image, ingredient, calories, url}) {

    return(
    <div>
        <div className="everyrecipe">
            <h2>{label}</h2>
            <img src={image} width='350px' className="icons"/>
            <p className="calories">{calories.toFixed()} calories</p>

        <ul> 
        <h3 className="ingredient">Ingridients:</h3>
        {ingredient.map((item, i) => (
        <li key={i} className="list">
            <img src='https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/2x/external-check-banking-and-finance-kiranshastry-gradient-kiranshastry.png' className="icon" />
            {item}</li>))}
        </ul>
        <a href={url}>
        <button className="btnRecipe">Recipe</button>
       </a>
        </div>

    </div>
    )
    
}

export default ShowComponent;