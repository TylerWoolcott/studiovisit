import React from 'react'
import { Header } from '../components'

export default function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Container>
                <Header.Logo
                src="/images/misc/studiovisit.svg"
                alt="StudioVisit"
                />
                {/* <Header.About>About</Header.About> */}
                <Header.ButtonLink>Connect Wallet</Header.ButtonLink> 
            </Header.Container>
            {children}
        </Header>    
    )
}