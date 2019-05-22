import { connect } from 'react-redux';
import { logout } from '../../actions/userActions';

function index({ logout }) {
    logout();
    return null;
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(
    null,
    mapDispatchToProps
)(index);
