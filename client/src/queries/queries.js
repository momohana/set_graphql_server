import { gql } from 'apollo-boost'

export const MOVIE_LIST = gql`
{
  movies {
    id
    name
    genre
    director {
      name
    }
  }
}`

export const DIRECTOR_LIST = gql`
{
  directors {
    id
    name
  }
}`

export const COMPANY_LIST = gql`
{
  companies {
    id
    comid
    name
    comgroup
    comcode
  }
}`

export const ADD_COMPANY = gql`
mutation($comid: String!, $name: String!, $comgroup: String!, $comcode: String!) {
  addCompany(comid: $comid, name: $name, comgroup: $comgroup, comcode: $comcode) {
    comid
    name
    comgroup
    comcode
  }
}`

export const ADD_MOVIE = gql`
mutation($name: String!, $genre: String!, $directorId: ID!) {
  addMovie(name: $name, genre: $genre, directorId: $directorId) {
    name
    genre
  }
}`
