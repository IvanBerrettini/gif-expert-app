import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category, onDeleteCategory}) => {
  
  const {images, isLoading} = useFetchGifs(category);
  
  const onDelete = () => {
    onDeleteCategory(category)
  }

  return (
    <>
      <h3>{category}</h3>
      <button onClick={onDelete}>Eliminar</button>

      {isLoading && (<h2>Cargando...</h2>)}
      
      <div className="card-grid">
        {images.map(img => <GifItem key={img.id} {...img}/>)}
      </div>
    </>
  )
}
