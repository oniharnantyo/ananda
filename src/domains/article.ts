import { IEntity } from './entity';

export interface IArticle extends IEntity {
  title: string;
  slug: string;
  author: string;
  thumbnailURL?: string;
  imageURL?: string;
  imageDescription: string;
  description: string;
  content: string;
}
