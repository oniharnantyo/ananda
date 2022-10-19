import { FormSection } from '@components/organisms/Form';
import { CreateArticleForm } from '@components/organisms/Form/Article';

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
