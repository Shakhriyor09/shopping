import React from 'react'
import useAxios from '../hooks/useAxios'
import Components from './Components'

const Groceries = () => {
    const { data, loading } = useAxios('/products/category/groceries')
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

export default Groceries