import React from 'react'
import { IProp } from './interfaces';
import * as Parallel from 'async-parallel'
import { getPropertyPrice, getMyPropertiesDetailed } from './apiCalls';
import * as store from 'store'
import { MyProperties } from './myProperties';


export const getMyPropertiesFunction = (token) => {
 
    return new Promise<any>((resolve, reject) => {
        getMyPropertiesDetailed(token)
            .then(res => res.json())
            .then(async (data) => {
            if (data.code === 401) {
                store.clearAll()
                // setError(data.message)
                reject(401)
                return;
            }else {
                const tempData = data as IProp [];
                // setError(null)
                if (tempData) {
        
                await Parallel.each(tempData, async property => {
                    const x = await (await getPropertyPrice(token, property.prop_id)).json()
                    const price = parseFloat(x.on_market?.token);
                    if (price)
                        property.sale_price = price
                })

                store.set('my_properties', tempData)
                resolve(tempData)
                }
            }
            })
            .catch(e => reject(401))
        })}