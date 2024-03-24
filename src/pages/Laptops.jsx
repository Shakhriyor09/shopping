import React from 'react'
import useAxios from '../hooks/useAxios'
import Components from './Components'

const Laptops = () => {
    const { data, loading } = useAxios('/products/category/laptops')
    return (
        loading ? (<span class="loader" ></span>) : (
            <div className='container row mx-auto'>
                {
                    data?.products?.map(item => <Components data={item} />)
                }
            </div >
        )
    )
}

export default Laptops