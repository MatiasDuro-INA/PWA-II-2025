import React, { useEffect, useState } from 'react'
import './Styles.css'

export default function Productos() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [productos, setProductos] = useState([])
    const [contador, setContador] = useState(0)

        async function cargarProductos() {
            try {
              const respuesta = await fetch("https://fakestoreapi.com/products");                            
              const datos = await respuesta.json();
              setProductos(datos)
            } catch (error) {
              console.log("Hubo un error:", error);
            }
          }
          useEffect(() => {
            console.log("productos: ", productos);
          }, [productos])

          useEffect(() => {
            // console.log("ejecuta una vez");
            
            cargarProductos()
          }, []) 


          
          
          //  <- el array vacio, se lo conoce como array de dependencias
                // si lo dejo vacio, el useEffect, se ejecuta una sola vez
                // cuando el componente se monta

        //   useEffect(() => {
           
        //   }, [])
          
          

          
          
          
    
  
    const itemsPerPage = 3
    const maxIndex = Math.ceil(productos.length / itemsPerPage) - 1
  
    const nextProducts = () => {
        // SetCurrentIndex, setea el index del producto correcto
        // prev = el valor anterior
                              // si prev es < maxIndex, entonces hace prev + 1. 
                            //   si prev no es < maxindex, entonces se convierte en 0
      setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0))
    }
  
    const prevProducts = () => {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex))
    }
  
                                        // currentIndex = 2 * 3 = 6, currentIndex = 2 + 1 = 3 * 3 = 9
    const visibleProducts = productos.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)
  
    
    
    return (
      <section className="destacados" id="productos">
        <div className="destacados-container">
          <h2>Productos Destacados</h2>
  
          <div className="productos-carousel">
            <button className="productos-button prev" onClick={prevProducts}>
              ❮
            </button>
  
            <div className="productos-grid">
              {visibleProducts.map((producto) => (
                <div key={producto.id} className="producto-card">
                  <img src={producto.image || "/placeholder.svg"} alt={producto.title} />
                  <h3>{producto.title}</h3>
                  <p className="precio">${producto.price}</p>
                  <button className="btn-agregar">
                    Agregar al Carrito
                  </button>
                </div>
              ))}
            </div>
  
            <button className="productos-button next" onClick={nextProducts}>
              ❯
            </button>
          </div>
  
          <div className="productos-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>
    )
  }
  