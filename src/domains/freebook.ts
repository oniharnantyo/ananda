import { IEntity } from './entity';

export interface IFreebook extends IEntity {
  title: string;
  slug: string;
  author: string;
  imageURL: string;
  imageDescription: string;
  description: string;
  url: string;
}
