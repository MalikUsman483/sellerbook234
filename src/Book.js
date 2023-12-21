const Book = (props) => {
  const { img, title, author, number, bookId } = props
console.log('idgfhfhfhg', bookId)
  return (
    
      <article className="book">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{author} </h4>
        <h3 className="number">{`# ${number + 1}`}</h3>
        {/* console.log("first",{`# ${number + 1}`}) */}
      </article>
    
  )
}

export default Book
