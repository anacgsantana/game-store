import axios from "axios";
const Api = {
  fetchGetAll: async (setState) => {
        try {
          const response = await axios.get("https://nintendo-shop.herokuapp.com/game/findMany");
          setState([...response.data])
        } catch(err){
          console.error(err)
        }
    }

  }

export default Api;