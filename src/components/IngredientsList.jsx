export default function IngredientsList(props) {

    const ingredientsList = props.allIngredients.map(ingredient => {
        return (
            <li key={ingredient}>{ingredient}</li>
        )
    });

    return (
        <section className="ingredients-display">
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsList}</ul>
            {
                props.allIngredients.length >= 3 ?
                    <div className="get-recipe-container" ref={props.ref}>
                        <div>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button onClick={props.handleGetRecipe}>Get a recipe</button>
                    </div>
                    : null
            }
        </section>
    )
}