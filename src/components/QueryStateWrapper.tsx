import React from 'react';

interface QueryStateWrapperProps {
  isLoading: boolean;
  isError: boolean;
  isEmpty: boolean;
  loading?: React.ReactNode;
  error?: React.ReactNode;
  empty?: React.ReactNode;
  children: React.ReactNode;
}

const QueryStateWrapper: React.FC<QueryStateWrapperProps> = ({
  isLoading,
  isError,
  isEmpty,
  loading,
  error,
  empty,
  children,
}) => {
  if (isLoading) return <div role="status">{loading}</div>;
  if (isError) return <div role="alert">{error}</div>;
  if (isEmpty) return <div role="status">{empty}</div>;

  return <>{children}</>;
};

export default QueryStateWrapper;
