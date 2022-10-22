import { FormSection } from '@components/organisms/Form';
import { UpdateFreebookForm } from '@components/organisms/Form/Freebook';

import { StyledLayout } from '../Layout';
import { UpdateFreebookProps } from './UpdateFreebook.types';

const UpdateFreebook: UpdateFreebookProps = ({ id, title, accessToken }) => {
  return (
    <StyledLayout>
      <FormSection
        title={title}
        form={<UpdateFreebookForm id={id} accessToken={accessToken} />}
      ></FormSection>
    </StyledLayout>
  );
};

export default UpdateFreebook;
