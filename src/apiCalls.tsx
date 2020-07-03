import React from 'react';

const getDashBoard = (token: string) => {
    return fetch('https://api.upland.me/dashboard', {
      method: 'get',
      headers: {'Authorization': "Bearer "+ token}
    })
  }

const getPropertyPrice = (token: string, prop_id: number) => {
  return fetch('https://api.upland.me/properties/' + prop_id.toString(), {
    method: 'get',
    headers: {'Authorization': "Bearer "+token}
  })
}

  const login = (email: string, password: string) => {
    return fetch('https://api.upland.me/authentication', {
      method: 'post',
      body: JSON.stringify({"email": email, "password": password, "strategy": "local"})
    })
  }

  const getMyProperties = (token: string) => {
    return fetch('https://api.upland.me/yield/mine', {
      method: 'get',
      headers: {'Authorization': "Bearer "+token}
    })
  }

  const getMyPropertiesDetailed = (token: string) => {
    return fetch('https://api.upland.me/properties/mine/detailed', {
        method: 'get',
        headers: {'Authorization': "Bearer "+token}
      })
  }

  const myCollections = (token: string) => {
    return fetch('https://api.upland.me/coll-prop', {
      method: 'get',
      headers: {'Authorization': "Bearer "+token}
    })
  }
  const collectionList = (token: string) => {
    return fetch('https://api.upland.me/collections', {
      method: 'get',
      headers: {'Authorization': "Bearer "+token}
    })
  }

  export {getDashBoard, login, getMyProperties, getMyPropertiesDetailed, getPropertyPrice}