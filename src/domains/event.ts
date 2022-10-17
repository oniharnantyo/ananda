import { IEntity } from './entity';

export interface IEvent extends IEntity {
  title: string;
  slug: string;
  location: string;
  startAt: Date;
  imageURL: string;
  imageDescription: string;
  content: string;
}
