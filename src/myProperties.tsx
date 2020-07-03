import React, { useEffect, useState, useMemo } from 'react'
import { IProp } from './interfaces';

import { getMyPropertiesFunction } from './functions'
import * as store from 'store'
import {columns} from './models'
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import { useHistory } from "react-router-dom";





export function MyProperties() {
    const [token] = useState<string>(store.get('token'))
    const [properties, setProperties] = useState<IProp[]>(store.get('my_properties'))

    const [isRefreshDisabled, setRefresh] = useState<number>(0)
    let history = useHistory();

    useEffect(() => {
        if(token && ((!properties) || properties.length === 0)) {
            getMyPropertiesFunction(token).then(res => setProperties(res)).catch(e => {
              history.push('/connect/badToken')})
            
        } else if (!token) {
            history.push('/connect?badToken')
        }
    },[token, properties])

    const refreshProps = () => {
      // store.remove('my_properties')
      setProperties([])
      let x = 25;
      setRefresh(x)
      const timer = setInterval((e) => {
        x = x - 1
        setRefresh(x)
        if (x === 0)
          clearInterval(timer) 
      }, 1000)
    }


  const renderTable = useMemo(() => {
    const data = properties !== undefined ? properties.map(d => {
      return {
        id: d.prop_id , 
        street: d.full_address, 
        initial_price: d.initial_price,
        boost: d.collection_boost,
        yield: d.yield_per_hour,
        purchace_price: d.price,
        status: d.status,
        sale_price: d.sale_price,
      }
    }) : [];



    return (
      <div>

      <DataTableExtensions exportHeaders {...{columns , data}}>
      <DataTable
       columns={columns}
       noHeader
       defaultSortField="id"
       defaultSortAsc={false}
       pagination
       highlightOnHover
       
       data={data}
     />
      </DataTableExtensions>
      <div style={{textAlign: 'center'}}>
      <button disabled={isRefreshDisabled !== 0} onClick={() => refreshProps()}>refresh properties {isRefreshDisabled === 0 ? '' : isRefreshDisabled.toString()}</button>
      </div>

      </div>


    )
  },[properties, isRefreshDisabled])


    return (
        <div>{renderTable}</div>
    )
}