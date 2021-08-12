import React from "react";

const CreateProduct = ({pageContext:{product}}) => {
    return (
        <>
            <h1>{product.title}</h1>
            <div dangerouslySetInnerHTML={{__html:product.descriptionHtml}}></div>
            <div>
                {
                    product.images.map(image=>{
                        const src = image.originalSrc;
                        return (
                            <>
                                <img key={src} src={src} />
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default CreateProduct;