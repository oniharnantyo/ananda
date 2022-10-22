export const getCreateEventFormRules = (image: File, content: string) => {
  return {
    title: [{ required: true }],
    location: [{ required: true }],
    startAt: [{ required: true }],
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
