export const getUpdateArticleFormRules = (content: string) => {
  return {
    title: [{ required: true }],
    author: [{ required: true }],
    description: [{ required: true }],
    imageDescription: [{ required: true }],
    content: [
      {
        required: true,
        validator: () => {
          if (content) {
            return Promise.resolve();
          }
          return Promise.reject();
        },
        message: `'content' is required`,
      },
    ],
  };
};
