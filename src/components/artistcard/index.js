import React from 'react'
import {
    Handle,  
    Title,
    ArtistName,
    Price,
    AvatarImage
} from './styles/artistcard'

export default function ArtistCard({ avatarImage, handle, image, alt, artistName, title, price, children, ...restProps }) {
    return (
        <>
            <AvatarImage {...restProps} src={avatarImage} />
            <Handle {...restProps}>{handle}</Handle>
            <ArtistName {...restProps}>{artistName}</ArtistName>
            <Title {...restProps}>{title}</Title>
            <Price {...restProps}>{price}</Price>
        </>
    )
}

// ArtistCard.Title = function ArtistCardTitle({ title, children, ...restProps }) {
//     return <Title {...restProps}>{title}</Title>
// }

// SingleArtistCard.Title = function SingleArtistCardTitle({ children, ...restProps }) {
//     return <Title {...restProps}>{children}</Title>;
// }

// const SingleArtist = ({
//     id,
//     title,
// }) => {}

// export default function SingleArtistCard({ children, ...restProps }) {
//     return <Container {...restProps}>{children}</Container>
// }

// key={artist.id}
// title={artist.title}
// avatarImage={artist.avatar}
// handle={artist.handle}
// image={artist.image}
// alt={artist.alt}
// artistName={artist.artistName}
// price={artist.price}