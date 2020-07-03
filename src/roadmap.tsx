import React from 'react';

import styled from 'styled-components'

const Done = styled.li`
text-decoration: line-through;
`

export function Roadmap() {

    return <div>
        <ul>
        <Done>Release to the public!</Done>
        <li>My properties get's collections into the list</li>
        <li>Better UI</li>        
        <li>Get a detailed list of completed and uncompleted collections</li>
        <li>suggestions for adresses available for a given collection</li>
        <li>integrate with Upland.me open API once released</li>
    </ul>

    <p>Got any suggestions? write to noxx @ discord</p>
    </div>
}