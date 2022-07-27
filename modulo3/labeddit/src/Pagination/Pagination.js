const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props
    return (
        <div>
            <button onClick={onLeftClick}>voltar</button>
            <div>{page}</div>
            <button onClick={onRightClick}>próxima</button>
        </div>
    )
}
export default Pagination