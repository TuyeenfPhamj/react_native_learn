import { useEffect, useState } from "react";

// Custom hook useFetch nhận vào một hàm fetchFunction (trả về Promise) và một biến autoFetch (mặc định true)
const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
    // Khai báo state cho data, loading, error
    const [data,setData] = useState<T | null>(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState<Error | null>(null);

    // Hàm fetchData thực hiện gọi fetchFunction, cập nhật state tương ứng
    const fetchData = async() => {
        try{
            setLoading(true);
            setError(null);
            
            const result = await fetchFunction();

            setData(result);
        }
        catch(err){
            setError(err instanceof Error ? err : new Error("An Error occurred"))
        } finally {
            setLoading(false);
        }
    }

      // Hàm reset để reset lại các state về giá trị ban đầu
    const reset = () => {
        setData(null)
        setLoading(false);
        setError(null);
    }

    // useEffect sẽ tự động gọi fetchData khi component mount nếu autoFetch = true
    useEffect(() => {
        if(autoFetch){
            fetchData();
        }
    },[])

     // Trả về các state và hàm refetch, reset để component sử dụng
    return {data, loading, error, refetch: fetchData, reset};
}

export default useFetch;