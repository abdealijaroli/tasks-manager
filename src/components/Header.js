import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log("clicked");
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='#90EE90' text= 'Add' onClick = {onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Tasks Manager'
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
