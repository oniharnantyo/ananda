import { CreateArticleForm, FormSection } from '@components/organisms/Form';

import { StyledLayout } from '../Layout';
import { CreateArticleProps } from './CreateArticle.types';

const CreateArticle: CreateArticleProps = ({ title, accessToken }) => {
  return (
    <StyledLayout>
      <FormSection
        title={title}
        form={<CreateArticleForm accessToken={accessToken} />}
      ></FormSection>
    </StyledLayout>
  );
};

export default CreateArticle;
