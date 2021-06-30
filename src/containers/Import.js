// fill out this container
import { connect } from 'react-redux'
import Import from '../components/Import'
import { fetchMakes, removeMake } from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    makes: state.makes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMakes: () => dispatch(fetchMakes()),
    removeMake: (index) => dispatch(removeMake(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Import)