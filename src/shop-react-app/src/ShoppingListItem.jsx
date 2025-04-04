import PropTypes from 'prop-types'

function ShoppingListItem({item, quantity, completed}) {
    const styles = {
        color: completed? 'green' : 'red'
        , textDecoration: completed ? 'line-through' : 'none' };
    return (
        <li style={styles}>{item} - {quantity}</li>
    )
}

ShoppingListItem.propTypes = {
    items: PropTypes.string,
    quantity: PropTypes.string,
    completed: PropTypes.bool
}

export default ShoppingListItem;