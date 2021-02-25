import React from 'react'
import {CollectionTile} from '../CollectionTile'
import {RemainingCollections} from './styles'
export function HomepageCollectionGrid({collections}){
  const saleCollection = collections.find(collection => collection.title === '一押しの品種')
  const remainingCollections = collections.filter(
    collection => collection.title !== '一押しの品種'
  )
  return(
    <div>
      {!!saleCollection &&
         <CollectionTile 
         sale
         title={saleCollection.title}
         description={saleCollection.description}
         backgroundImage={saleCollection.image.localFile.childImageSharp.fluid}
         key={saleCollection.shopifyId}
         />       
      }
      <RemainingCollections>
      {remainingCollections.map(collection =>  (
        <CollectionTile 
        title={collection.title}
        description={collection.description}
        backgroundImage={collection.image.localFile.childImageSharp.fluid}
        key={collection.shopifyId}
        />
      ))}
     </RemainingCollections>
    </div>
  )
}