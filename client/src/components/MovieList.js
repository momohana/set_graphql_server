import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { MOVIE_LIST } from '../queries/queries'
import { Card, CardBody, Table } from 'reactstrap'

function MovieList() {
  const { loading, error, data } = useQuery(MOVIE_LIST)
  if (loading) {
    return <p>Loading...</p>
  } else if (error) {
    return <p>Error</p>
  } else {
    return (
      <Card>
        <CardBody>
          <Table hover>
            <thead>
              <tr>
                <th>タイトル</th>
                <th>ジャンル</th>
                <th>映画監督</th>
              </tr>
            </thead>
            <tbody>
              {
                data.movies.map(({id, name, genre, director}) => (
                  <tr key={id}>
                  <td>{name}</td>
                  <td>{genre}</td>
                  <td>{director.name}</td>
                </tr>
                ))
              }
            </tbody>
          </Table>
        </CardBody>
      </Card>
    )

  }
}

export default MovieList
