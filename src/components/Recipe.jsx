import ReactMarkdown from "react-markdown"

export default function Recipe(props) {
    return (
        <section className="full-recipe" aria-live="polite">
            <ReactMarkdown children={props.fullRecipe} />
        </section>
    )
}