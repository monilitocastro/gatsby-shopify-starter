const path = require("path")

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions

    const results = await graphql(`
    query MyProductsQuery2 {
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
      
    
    `)
      results.data.allShopifyProduct.edges.map(({node})=>{
        createPage({
            path: `/products/${node.handle}`,
            component: path.resolve(`./src/templates/product.js`),
            context: {
                product: node
            }
        })
      })

}