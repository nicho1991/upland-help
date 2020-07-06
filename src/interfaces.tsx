import React from 'react'

export interface IDashboard {
    netWorth: string,
    property: string,
    upx: string,
    earning: string,
    collection: string,
  }

  export interface ICity{
    id: number,
    name: string,
  }
  export interface IState{
    id: number,
    name: string,
  }
  
  export interface IStreet{
    id: number,
    name: string,
  }
  
  export interface IProp{
    city: ICity,
    collection_boost: number,
    full_address: string,
    hours_since_last_yield: number,
    hours_till_next_yield: number,
    initial_price: number,
    last_yield_time: string,
    next_yield_tick_time: string,
    prop_id: number,
    state: IState
    status: string,
    street: IStreet,
    sum: number,
    teleport_fees: any,
    yield: number,
    yield_per_hour: number,
    price: number,
    sale_price: number
  }

  export interface ICollection {
    amount: number,
    category: number,
    description: string,
    name: string,
    requirements: string,
    id: number,
    yield_bosst: number
  }