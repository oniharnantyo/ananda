import { FormSection } from '@components/organisms/Form';
import { UpdateEventForm } from '@components/organisms/Form/Event';

import { StyledLayout } from '../Layout';
import { UpdateEventProps } from './UpdateEvent.types';

const UpdateEvent: UpdateEventProps = ({ id, title, accessToken }) => {
  return (
    <StyledLayout>
      <FormSection
        title={title}
        form={<UpdateEventForm id={id} accessToken={accessToken} />}
      ></FormSection>
    </StyledLayout>
  );
};

export default UpdateEvent;
