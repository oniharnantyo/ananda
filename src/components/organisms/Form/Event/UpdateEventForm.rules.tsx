export const getUpdateEventFormRules = (content: string) => {
  return {
    title: [{ required: true }],
    location: [{ required: true }],
    startAt: [{ required: true }],
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
