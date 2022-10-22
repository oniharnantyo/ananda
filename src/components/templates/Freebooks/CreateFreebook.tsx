import { FormSection } from '@components/organisms/Form';
import { CreateFreebookForm } from '@components/organisms/Form/Freebook';

import { StyledLayout } from '../Layout';
import { CreateFreebookProps } from './CreateFreebook.types';

const CreateFreebook: CreateFreebookProps = ({ title, accessToken }) => {
  return (
    <StyledLayout>
      <FormSection
        title={title}
        form={<CreateFreebookForm accessToken={accessToken} />}
      ></FormSection>
    </StyledLayout>
  );
};

export default CreateFreebook;
