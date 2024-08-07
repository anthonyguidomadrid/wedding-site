export type OptionalWrapperProps<T> = {
  Wrapper: React.ElementType;
  condition: boolean;
  children: React.ReactNode;
  props?: T;
};
