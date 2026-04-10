import { useEffect, useState } from "react";

function useRupeeInfo(rupay) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${rupay}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[rupay]))
        console.table(data)
        
    }, [rupay])
    console.log(data);
    return data
}

export default useRupeeInfo;