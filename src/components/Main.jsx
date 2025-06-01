import { useState, useRef, useEffect } from "react"
import Recipe from "./Recipe"
import IngredientsList from "./IngredientsList"
import Loader from "./Loader"
import { getRecipeFromMistral } from "../huggingFaceAI"

export default function Main() {

    const [ingredients, setIngredients] = useState([]);
    const [recipeFromResponse, setRecipeFromResponse] = useState("");
    const recipeSection = useRef(null);
    const [loader, setLoader] = useState(false);

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients((prevIngredients) => {
            if (newIngredient === "") {
                return [...prevIngredients];
            } else {
                return [...prevIngredients, newIngredient];
            }
        });
    }

    async function getRecipe() {

        toggleLoader();

        const response = await getRecipeFromMistral(ingredients);

        setRecipeFromResponse( () => {

            toggleLoader();
            return response;
        });
    }

    function toggleLoader() {
        setLoader( prevLoader => {
            return !prevLoader;
        });
    }

    useEffect( () => {
        if (recipeFromResponse !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView( {behavior: "smooth"} );
        }
    }, [recipeFromResponse]);

    return (
        <main>
            <div className="container">
                <div className="main-content">
                    <p className="help-text"><em><small>Give Chef Dan at least three ingredients.</small></em></p>
                    <form className="ingredient-form" action={addIngredient}>
                        <input aria-label="Add ingredient" type="text" placeholder="e.g. Ground Beef" name="ingredient" />
                        <button className="add-ingredient">+ Add ingredient</button>
                    </form>

                    {
                        ingredients.length > 0 ? 
                            <IngredientsList 
                                allIngredients={ingredients} 
                                handleGetRecipe={getRecipe}
                                ref={recipeSection}
                            /> 
                        : null
                    }

                    { loader ? <Loader /> : null }

                    { recipeFromResponse ? <Recipe fullRecipe={recipeFromResponse} /> : null }

                </div>
            </div>
        </main>
    )
}
