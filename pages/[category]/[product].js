import React from 'react'
import ProductHero from '../../components/singleProductPage/ProductHero'
import ProductHow from '../../components/singleProductPage/ProductHow'
import ProductWhy from '../../components/singleProductPage/ProductWhy'
import ProductHighlight from '../../components/singleProductPage/ProductHighlight'
import ProductGet from '../../components/singleProductPage/ProductGet'

export default function Product() {
  return (
    <div>
      <ProductHero />
      <ProductWhy />
      <ProductHow />
      <ProductHighlight />
      <ProductGet />
    </div>
  )
}
