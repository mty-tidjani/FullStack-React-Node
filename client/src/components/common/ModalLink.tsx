import React from 'react';
import { Link, LinkProps, useLocation } from 'react-router-dom';
/**
 * @description Link use to triger modal navigation.
 * @param props
 */
export const MLink: React.FC<
  LinkProps & React.RefAttributes<HTMLAnchorElement>
> = (props) => {
  const { ref, to, ...prp } = props;
  const location = useLocation();
  return (
    <Link
      ref={ref}
      to={{
        pathname: to as string,
        state: { background: location },
      }}
      {...prp}
    />
  );
};
