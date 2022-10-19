export const CreateArticleFormRules = (image: File, content: string) => {
  return {
    title: [{ required: true }],
    author: [{ required: true }],
    description: [{ required: true }],
    image: [
      {
        required: true,
        validator: () => {
          if (image) {
            return Promise.resolve();
          }
          console.log('asdfasdf');

          return Promise.reject();
        },
        message: `'image' is required`,
      },
    ],
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
