import React, { Component } from 'react'
import { getItemsList } from '../data'
import { ListComponent } from './listComponent'

export default class ItemsList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             list:getItemsList()
        }
    }
    
    render() {
        return (
            <div className='menu-wrapper'>
                { this.state.list.map(({name, number, amount})=>{
                    return <ListComponent key={number} name={name} amount={amount} />
                }) }
            </div>
        )
    }
}
