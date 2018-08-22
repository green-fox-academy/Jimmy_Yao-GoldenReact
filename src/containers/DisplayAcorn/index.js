import { connect } from 'react-redux';
import Display from '../../component/Display';

const mapStateToProps = state => ({ text: state.count });

const DisplayAcorn = connect(
  mapStateToProps,
)(Display);

export default DisplayAcorn;
