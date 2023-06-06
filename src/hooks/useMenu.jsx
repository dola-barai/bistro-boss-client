import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  //  const [menu, setMenu] = useState([])
  //  const [loading, setLOading] = useState(true)
//
  //  useEffect(() => {
  //      fetch('https://bistro-boss-server-dibanishi81-gmailcom.vercel.app/menu')
  //      .then(res => res.json())
  //      .then(data => {
//
  //          setMenu(data)
  //          setLOading(false)
  //      })
  //  }, [])
    const {data: menu = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await fetch('https://bistro-boss-server-dibanishi81-gmailcom.vercel.app/menu')
            return res.json()
        }
    });
    

    return [menu, loading, refetch]
}

export default useMenu;