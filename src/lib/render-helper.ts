type RenderFunction = () => JSX.Element | JSX.Element[] | null;

export const conditionalRender = (
  condition: boolean,
  renderTrue: RenderFunction,
  renderFalse?: RenderFunction
): JSX.Element | JSX.Element[] | null => {
  return condition ? renderTrue() : renderFalse ? renderFalse() : null;
};
