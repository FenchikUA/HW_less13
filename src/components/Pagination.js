import React from 'react'
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 30px;
  border: 1px solid gray;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? '#3298e7' : 'transparent')};
  color: ${(props) => (props.isActive ? 'white' : 'var(--color-text)')};
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <PaginationWrapper>
      {pageNumbers.map((pageNumber) => (
        <PaginationButton
          key={pageNumber}
          isActive={pageNumber === currentPage}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </PaginationButton>
      ))}
    </PaginationWrapper>
  )
}

export default Pagination

