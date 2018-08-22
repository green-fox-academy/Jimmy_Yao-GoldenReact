import { connect } from 'react-redux';
import { increaseAmount } from '../../action/actions';
import Button from '../../component/Button';

const mapStateToProps = () => ({ text: 'Buy one' });

const mapDispatchToProps = dispatch => ({ func: () => dispatch(increaseAmount()) });

const BuyAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default BuyAcorn;
