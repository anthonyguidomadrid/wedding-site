import { OptionalWrapperProps } from './OptionalWrapper.types';

export const OptionalWrapper = <T,>({
  Wrapper,
  condition,
  children,
  props,
}: OptionalWrapperProps<T>) => {
  if (!condition) return <>{children}</>;
  return <Wrapper {...props}>{children}</Wrapper>;
};
