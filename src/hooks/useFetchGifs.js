import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  }

  //useEffect dispara un efecto
  //el segundo parametro son las dependencias
  //si los [] estan vacios, se ejecuta solo cuando se crea el componente
  useEffect(() => {
    getImages();
  }, []);
  
  return {
    images,
    isLoading
  }
}
