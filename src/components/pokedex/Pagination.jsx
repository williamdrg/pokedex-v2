import './style/pagination.css'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    } else {
      onPageChange(1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    } else {
      onPageChange(totalPages);
    }
  };

  return (
    <div className="page_container">
    <ul onClick={handlePreviousPage}>
      <li className="icon page_pokedex">
        <span className="tooltip">Anterior</span>
      </li>
    </ul>
    <span className="pagItems">Página {currentPage} de {totalPages}</span>
    <ul onClick={handleNextPage}>
      <li className="icon page_pokedex">
        <span className="tooltip">Siguiente</span>
      </li>
    </ul>
  </div>
  );
};

export default Pagination;