import axios from 'axios'
import React, { useEffect, useState } from 'react'

axios.defaults.baseURL = 'https://dummyjson.com'
const useAxios = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true)

    const fetchApi = () => {
        axios.get(url)
            .then((res) => setData(res.data))
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }
    useEffect(() => {
        fetchApi()
    }, [url])
    return ({ data, error, loading })
}

export default useAxios



















// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'

// const useAxios = (url) => {
//     const [response, setResponse] = useState([])
//     const [error, setError] = useState("")
//     const [loading, setLoading] = useState(true)

//     const fetchApi = () => {
//         axios.get(url)
//             .then((res) => setResponse(res.data))
//             .catch((err) => setError(err))
//             .finally(() => setLoading(false))
//     }

//     useEffect(() => {
//         fetchApi()
//     }, [url])

//     return { response, error, loading }
// }

// export default useAxios
