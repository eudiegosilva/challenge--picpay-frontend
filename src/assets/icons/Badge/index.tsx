import IconBase, { IconBaseProps } from 'components/IconBase';

export type IconType = Pick<IconBaseProps, 'color'>;

export const BadgeIcon = ({ color }: IconType) => (
  <IconBase color={color}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="24"
      width="24"
      focusable="false"
      role="img"
      fill="currentColor"
      data-testid="badge-icon"
    >
      <path d="M11 15a3 3 0 0 1 .17-1H4.25C3.01 14 2 15 2 16.25v.58c0 .89.32 1.75.9 2.43C4.47 21.1 6.85 22 10 22c.4 0 .78-.01 1.16-.04A3 3 0 0 1 11 21v-.53c-.32.02-.65.03-1 .03-2.74 0-4.7-.74-5.96-2.21-.35-.41-.54-.93-.54-1.46v-.58c0-.41.34-.75.75-.75H11V15zM10 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM12 15c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-6zm2.5 1a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6z"></path>
    </svg>
  </IconBase>
);
