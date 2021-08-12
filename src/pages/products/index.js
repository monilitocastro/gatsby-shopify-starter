import React from "react"
import { graphql, Link} from "gatsby"

const ComponentName = ({ data }) => {

    const edges = data.allShopifyProduct.edges
    const results = edges.map(({node})=>{
        return (
            <>
                <li key={node.shopifyId}>
                    <h3>
                        <Link to={`/products/${node.handle}`}>{node.title}</Link>
                        {" - "}${node.priceRangeV2.minVariantPrice.amount}
                    </h3>
                    <p>
                        {node.description}
                    </p>
                </li>
            </>
        )
    })
    return (
        <>
            <div>
                <h1>Products</h1>
                <ul>
                    {results}
                </ul>
            </div>
        </>
    )
}

export const query = graphql`
  {
    allShopifyProduct {
      edges {
        node {
          images {
            originalSrc
            productId
          }
          descriptionHtml
          title
          priceRangeV2 {
            maxVariantPrice {
              amount
            }
            minVariantPrice {
              amount
            }
          }
          handle
          shopifyId
        }
      }
    }
  }
`

export default ComponentName
