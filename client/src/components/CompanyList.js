import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { COMPANY_LIST } from '../queries/queries'
import { Card, CardBody, Table } from 'reactstrap'

function CompanyList() {
  const { loading, error, data } = useQuery(COMPANY_LIST)
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
                  <th>会社ID</th>
                  <th>会社グループ</th>
                  <th>会社名</th>
                  <th>会社コード</th>
                </tr>
              </thead>
              <tbody>{
                  data.companies.map(({id,comid, comgroup, name, comcode}) => (
                    <tr key={id}>
                      <td>{comid}</td>
                      <td>{comgroup}</td>
                      <td>{name}</td>
                      <td>{comcode}</td>
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

export default CompanyList
