import { ArticleTable } from '@components/organisms/Table';
import { StyledLayout } from '@components/templates/Layout';

import { ArticlesProps } from './Articles.types';

const Articles: ArticlesProps = ({ accessToken }) => {
  return (
    <>
      <StyledLayout>
        <ArticleTable accessToken={accessToken} />
      </StyledLayout>
    </>
  );
};

export default Articles;
