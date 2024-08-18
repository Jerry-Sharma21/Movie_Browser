import React, { ReactNode } from 'react';

interface QueryStateWrapperProps {
  isLoading: boolean;
  isError: boolean;
  isEmpty: boolean;
  loading?: ReactNode;
  error?: ReactNode;
  empty?: ReactNode;
  children: ReactNode;
}

const QueryStateWrapper: React.FC<QueryStateWrapperProps> = props => {
  const { isLoading, isError, isEmpty, loading, error, empty, children } = props;

  if (isLoading) return <div role="status">{loading}</div>;
  if (isError) return <div role="alert">{error}</div>;
  if (isEmpty) return <div role="status">{empty}</div>;

  return <>{children}</>;
};

export default QueryStateWrapper;
