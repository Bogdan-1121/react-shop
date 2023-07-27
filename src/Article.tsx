type Props = {
    title: string
    description: string
    autor: string
}

const Article = ({ title, description, autor }: Props) => {
    return (
        <div className="div">
            <h2>{title}</h2>
            <p>{description}</p>
            <div>Author: {autor}</div>
        </div>
    )
}

export default Article
