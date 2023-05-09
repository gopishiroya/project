import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Typography } from 'antd'
import './Category.scss'

const Category = () => {
  return (
    <div className='category'>
        <div>
            <Header />
        </div>
        <div className="foodcategory">
            <div className="foodtitle">
                <Typography.Title className='ctitle'>FOOD CATEGORY</Typography.Title>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Category
