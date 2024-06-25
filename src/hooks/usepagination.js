import { useMemo } from 'react';

const usePagination = (data, currentPage, itemsPerPage) => {
  const totalPages = useMemo(() => Math.ceil(data?.length / itemsPerPage), [data, itemsPerPage]);
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data?.slice(startIndex, endIndex);
  }, [data, currentPage, itemsPerPage]);

  return [ paginatedData, totalPages ];
};

export default usePagination;