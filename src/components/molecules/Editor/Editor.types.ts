import { FC } from 'react';

interface IEditorProps {
  name: string;
  initialValue?: string;
  onChange: (value: string) => void;
}

export type EditorProps = FC<IEditorProps>;
