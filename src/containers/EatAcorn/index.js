import { connect } from 'react-redux';
import { decreaseAmount } from '../../action/actions';
import Button from '../../component/Button';

const mapStateToProps = () => ({ text: 'Eat one' });

const mapDispatchToProps = dispatch => ({ func: () => dispatch(decreaseAmount()) });

const EatAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default EatAcorn;
