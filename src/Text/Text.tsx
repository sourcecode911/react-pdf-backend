import cn from 'classnames';
import React from 'react';

interface Props {
  className?: string;
}

export const Text: React.FC<Props> = ({ className, children }) => (
  <span className={cn(className)}>{children}</span>
);
