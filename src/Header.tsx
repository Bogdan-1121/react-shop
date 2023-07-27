type Props = {
    title: string
    year: number
}

// деструкція обьекту
const Header = ({ title, year }: Props) => {
    return (
        <h1>
            Hello {title}, Year = {year}
        </h1>
    )
}

export default Header

// именной експорт
// export const Header = () => {
//     return <h1>Hello</h1>
// }
