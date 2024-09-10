import { Document } from '@contentful/rich-text-types';

export type HoneymoonProps = Partial<{
  title: string;
  description: Document;
  backgroundImageUrl: string;
}>;
