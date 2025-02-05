import { createContext, useState, useEffect, useContext } from "react";

const PostContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:8080/cities`);
        const data = await response.json();
        // console.log(data, 'glgasdf');
        setCities(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);
  return (
    <PostContext.Provider value={{ cities, isLoading }}>
      {children}
    </PostContext.Provider>
  );
}

function useCities() {
  const context = useContext(PostContext);
  return context;
}

export { CitiesProvider, useCities };
