import React from 'react'
import useAxios from '../hooks/useAxios'
import Components from './Components'

const Skincare = () => {
    const { data, loading } = useAxios('/products/category/skincare')
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

export default Skincare