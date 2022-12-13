import { gql } from "@apollo/client"
export const getMyCreatures = gql`
query {
    myCreatures {
      pokemonName
      description { document },
      avatar {url}
    }
  }
`