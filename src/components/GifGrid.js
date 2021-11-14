import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

   // const [images, setImages] = useState([])

   // // Ejecuta getGifs cuando el componente es renderizado por 1ra vez
   // useEffect( () => {
   //    getGifs(category)
   //       .then( setImages );
   // }, [category] );


   const { data:images, loading } = useFetchGifs( category );


   return (
      <>
         <h3>{ category }</h3>
         {
            loading && <p>Loading...</p>
         }
         <div className="card-grid">
            {
               images.map((img) => (
                  <GifGridItem
                     key={ img.id }
                     { ...img }
                  />
               ))
            }
         </div>
      </>
   )
}
