import IconBase, { IconBaseProps } from 'components/IconBase';

export type IconType = Pick<IconBaseProps, 'color'>;

export const DollarIcon = ({ color }: IconType) => (
  <IconBase color={color}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="24"
      width="24"
      role="img"
      fill="currentColor"
      data-testid="dollar-icon"
    >
      <rect width="24" height="24" fill="none"></rect>
      <path d="M13.06 10.92c-1.62-.54-3.16-.98-3.16-2.29 0-1.23 1.34-1.67 2.17-1.67.97 0 1.57.46 1.91.9.29.38.79.53 1.23.35.62-.26.83-1.04.41-1.58-.48-.64-1.3-1.33-2.62-1.55V4c0-.55-.45-1-1-1s-1 .45-1 1v1.11c-1.37.27-3.19 1.39-3.19 3.56 0 2.57 2.31 3.36 4.02 3.97 1.89.67 2.73 1.29 2.73 2.44 0 1.36-1.25 1.92-2.37 1.92-1.41 0-2.17-.93-2.56-1.66-.24-.47-.82-.65-1.3-.45l-.06.03c-.56.23-.81.88-.54 1.42.49.95 1.43 2.11 3.27 2.53V20c0 .55.45 1 1 1s1-.45 1-1v-1.08c.06-.01 3.67-.41 3.67-3.87.02-2.23-1.45-3.38-3.61-4.13z"></path>
    </svg>
  </IconBase>
);
