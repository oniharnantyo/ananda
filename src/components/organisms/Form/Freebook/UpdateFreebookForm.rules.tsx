export const getUpdateFreebookFormRules = () => {
  return {
    title: [{ required: true }],
    author: [{ required: true }],
    description: [{ required: true }],
    imageDescription: [{ required: true }],
    url: [{ required: true }, { type: 'url' }],
  };
};
