import Item from './components/Item'
import './App.css'
import { useItems } from './hooks/useItems'
import { useSEO } from './hooks/useSEO'

// const INITIAL_ITEMS = [
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: 'Videojuegos',
//   },
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: 'Libros',
//   },

// ]

function App() {
  
  const {items, addItem, removeItem} = useItems()

  useSEO({
    title: `[${items.length}]Prueba tecnica de React`,
    description: 'Agregar y eliminar elementos de una lista'
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(e);
    const {elements} = e.currentTarget;
    const input = elements.namedItem('item');
    const isInput = input instanceof HTMLInputElement;
    if(!isInput|| input === null) return;

    addItem(input.value)

    input.value = '';
  }

  const createHandleRemoveItem = (id) => ()=>{
    removeItem(id)
  }

  return (
    <main>
      <aside>
        <h1>Prueba tecnica React</h1>
        <h2>Añadir y eliminar elementos de una lista</h2>
        <form 
          onSubmit={handleSubmit}
          aria-label='add an element'
        >
          <label>
            Elemento a introducir
            <input
              name='item'
              required
              placeholder='Tipea tu tarea aqui...'
            />
          </label>
          <button>Añadir tarea</button>
        </form>
      </aside>
      <section>
        <h2>Lista de elementos</h2>
        {
          items.length===0?
          (
            <p>
              <strong>No hay elementos en la lista</strong>
            </p>
          ):(
            <ul>
              { 
                items.map(e=>{
                 return <Item 
                   {...e} 
                   handleClick ={createHandleRemoveItem(e.id)} 
                   key={e.id} 
                 />
                })
              }
            </ul>

          )
        }

      </section>
    </main>
  )
}

export default App;