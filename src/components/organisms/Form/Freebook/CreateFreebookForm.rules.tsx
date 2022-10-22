export const getCreateFreebookFormRules = (image: File) => {
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

          return Promise.reject();
        },
        message: `'image' is required`,
      },
    ],
    imageDescription: [{ required: true }],
    url: [{ required: true }, { type: 'url' }],
  };
};
