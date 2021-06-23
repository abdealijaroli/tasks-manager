import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onShowAdd, showAdd}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? '#ff5349' : '#0BDA51'} text= {showAdd ? 'Close' : 'Add'} onClick = {onShowAdd} />
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
