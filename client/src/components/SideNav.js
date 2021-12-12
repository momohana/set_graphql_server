import React from 'react'
import { Card, CardBody, CardHeader, Form, FormGroup, Button } from 'reactstrap'
import { useMutation } from '@apollo/react-hooks'
import { useForm } from 'react-hook-form'
import { ADD_COMPANY } from '../queries/queries'

function SideNav() {
  const {
    register,
    handleSubmit,
  } = useForm();
  const [addCompany] = useMutation(ADD_COMPANY)
  const onSubmit = ({comId, comName, comGroup, comCode}) => {
    addCompany({ variables: {comid: comId, name: comName, comgroup: comGroup, comcode: comCode}})
  }
  return (
    <div>
      <Card>
        <CardHeader>
          所属会社登録
        </CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <input placeholder="会社ID" {...register('comId', { required: true } )} /> {/* register an input */}
            </FormGroup>
            <FormGroup>
              <input placeholder="会社名" {...register('comName', { required: true })} />
            </FormGroup>
            <FormGroup>
              <select type="select" {...register('comGroup')}>
                <option>honda-proper</option>
                <option>honda-partner</option>
                <option>micware-proper</option>
                <option>micware-partner</option>
                <option>alpine-proper</option>
                <option>alpine-partner</option>
              </select>
            </FormGroup>
            <FormGroup>
              <input placeholder="会社コード" {...register('comCode', { required: true })} />
            </FormGroup>
            <Button coloer="primary" type="submit">追加</Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}

export default SideNav
