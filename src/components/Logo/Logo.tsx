import logo from 'assets/logo.svg'

type Props = {}

const Logo = (props: Props) => {
    return (
        <div className="logo">
            <img src={logo} alt="fake-shop" />
        </div>
    )
}

export default Logo
