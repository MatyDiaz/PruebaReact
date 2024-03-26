
export default function Item({id, text, handleClick}) {
    return (
        <li key={id}>
          {text}
          <button onClick={handleClick}>
            Eliminar elemento
          </button>
        </li>
      )
}