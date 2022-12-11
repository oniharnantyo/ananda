import { Editor as TinyMCE } from '@tinymce/tinymce-react';

import { EditorProps } from './Editor.types';

const plugins = [
  'advlist',
  'autolink',
  'lists',
  'link',
  'image',
  'charmap',
  'preview',
  'anchor',
  'searchreplace',
  'visualblocks',
  'code',
  'fullscreen',
  'insertdatetime',
  'media',
  'table',
  'code',
  'help',
  'wordcount',
];

const toolbar =
  'undo redo | blocks | ' +
  'bold italic backcolor | alignleft aligncenter ' +
  'alignright alignjustify | bullist numlist outdent indent | ' +
  'removeformat | help';

const Editor: EditorProps = ({ name, initialValue, onChange }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleUploadImage = (blobInfo: any, progress: any) =>
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    new Promise<string>((resolve, reject) => {
      // TODO:: Add upload function
      return '';
    });

  return (
    <>
      <TinyMCE
        apiKey="i8myikrtg842t5t5sf0vs7iozejlfa96ua5d6578bzri82hu"
        textareaName={name}
        onEditorChange={onChange}
        initialValue={initialValue}
        init={{
          height: 500,
          plugins: plugins,
          toolbar: toolbar,
          file_picker_types: 'image',
          images_file_types: 'jpg,png,svg,webp',
          file_picker_callback: function () {
            return;
          },
          images_upload_handler: handleUploadImage,
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:12px }',
        }}
      />
    </>
  );
};

export default Editor;
