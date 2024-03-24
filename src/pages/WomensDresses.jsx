import React from 'react'
import useAxios from '../hooks/useAxios'
import Components from './Components'

const WomensDresses = () => {
    const { data, loading } = useAxios('/products/category/furniture')
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

export default WomensDresses