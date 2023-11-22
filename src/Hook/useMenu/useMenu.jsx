import useAxiosPublic from '../useAxiosPublic/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useMenu = () => {
    const axiosPublic = useAxiosPublic()
    const {refetch , data : menu = []} = useQuery({
        queryKey :['menu'],
        queryFn : async()=>{
            const res = await axiosPublic.get('/foodMenu')
              return  res.data
        }
    })
    return  [refetch,menu]
};

export default useMenu;