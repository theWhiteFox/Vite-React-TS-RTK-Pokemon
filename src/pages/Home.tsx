import { useGetPokemonByNameQuery } from '../services/pokemon'
import {
  Typography,
} from "@mui/material";

function Home() {

  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  return (
    <>
      <Typography color="primary.dark" variant="h1">
        Home
      </Typography>
      <div className="App">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data.species.name}</h3>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
          </>
        ) : null}
      </div>
      <div className="card">
      </div>
    </>
  )
}
export default Home;
