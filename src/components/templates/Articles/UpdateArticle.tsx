import { FormSection } from '@components/organisms/Form';
import { UpdateArticleForm } from '@components/organisms/Form/Article';

import { StyledLayout } from '../Layout';
import { UpdateArticleProps } from './UpdateArticle.types';

const UpdateArticle: UpdateArticleProps = ({ id, title, accessToken }) => {
  return (
    <StyledLayout>
      <FormSection
        title={title}
        form={<UpdateArticleForm id={id} accessToken={accessToken} />}
      ></FormSection>
    </StyledLayout>
  );
};

export default UpdateArticle;
