import { connect } from 'react-redux';
import {selectAllPokemon} from '../reducers/selectors';
import PokemonIndex from "./pokemon/pokemon_index";
import { receiveAllPokemon, requestAllPokemon } from "../actions/pokemon_actions";


const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon()),
  receiveAllPokemon: pokemon => dispatch(receiveAllPokemon(pokemon))
});

export default connect(
  mapStateToProps
)(PokemonIndex);
