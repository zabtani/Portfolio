import { Tooltip } from '@material-ui/core';

export const svgListItems = (
  svgs: Record<string, { svg: () => JSX.Element; link: string }>
) => {
  const svgsComponents = Object.values(svgs);
  return svgsComponents.map(
    (Svg: { svg: () => JSX.Element; link: string }, idx: number) => {
      const title = Object.keys(svgs).find(
        (key) => svgs[key]['svg'] === Svg.svg
      );

      return (
        <Tooltip
          title={
            <div
              style={{
                fontSize: 20,
                margin: 10,
                width: '100%',
              }}
            >
              {title ?? ''}
            </div>
          }
        >
          <li key={idx}>
            <a href={Svg.link}>
              <Svg.svg />
            </a>
          </li>
        </Tooltip>
      );
    }
  );
};
