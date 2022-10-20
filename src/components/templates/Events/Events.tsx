import { EventTable } from '@components/organisms/Table';
import { StyledLayout } from '@components/templates/Layout';

import { EventsProps } from './Events.types';

const Events: EventsProps = ({ accessToken }) => {
  return (
    <>
      <StyledLayout>
        <EventTable accessToken={accessToken} />
      </StyledLayout>
    </>
  );
};

export default Events;
