import React from 'react'

import { Card } from "./Card"

export const CategoryContainer = (props) => {
    return (
        <div className="category-container">
            {props.data.map((item) =>
                < Card
                    key={item.external_urls.spotify}
                    title={item.name}
                    titleURL={item.external_urls.spotify}
                    artist={item.artists}
                    artistURL={item.artists[0].external_urls.spotify}
                    image={item.images[0].url} />
            )}
        </div>
    )
}