import { FormSection } from '@components/organisms/Form';
import { CreateEventForm } from '@components/organisms/Form/Event';

import { StyledLayout } from '../Layout';
import { CreateEventProps } from './CreateEvent.types';

const CreateEvent: CreateEventProps = ({ title, accessToken }) => {
  return (
    <StyledLayout>
      <FormSection title={title} form={<CreateEventForm accessToken={accessToken} />}></FormSection>
    </StyledLayout>
  );
};

export default CreateEvent;
