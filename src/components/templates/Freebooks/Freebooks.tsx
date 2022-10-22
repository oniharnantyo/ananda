import { FreebookTable } from '@components/organisms/Table';
import { StyledLayout } from '@components/templates/Layout';

import { FreebooksProps } from './Freebooks.types';

const Freebooks: FreebooksProps = ({ accessToken }) => {
  return (
    <>
      <StyledLayout>
        <FreebookTable accessToken={accessToken} />
      </StyledLayout>
    </>
  );
};

export default Freebooks;
