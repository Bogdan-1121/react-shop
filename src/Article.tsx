import './Article.css'

type Props = {
    title: string
    description: string
    autor: string
}

const Article = ({ title, description, autor }: Props) => {
    return (
        <div className="div">
            <h2
                className="article-title"
                // style={{
                //     backgroundColor: title === 'News 1' ? 'purple' : 'green',
                //     color: 'white',
                //     padding: '15px',
                // }}
            >
                {title}
            </h2>
            <p>{description}</p>
            <div>Author: {autor}</div>
        </div>
    )
}

export default Article
