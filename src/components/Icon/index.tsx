import {
  /* PLOP_INJECT_ICON_IMPORT */
  BinIcon as bin,
  PencilIcon as pencil,
  LogoutIcon as logout,
  LockIcon as lock,
  MailIcon as mail,
  ArrowDownIcon as arrowDown
} from 'assets/icons';

import { ColorStyleProps } from 'core/types/styles/globals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const icons: any = {
  /* PLOP_INJECT_ICON_OBJECT */
  bin,
  pencil,
  logout,
  lock,
  mail,
  arrowDown
};

export type IconNameTypes =
  /* PLOP_INJECT_ICON_TYPES */
  'bin' | 'pencil' | 'logout' | 'lock' | 'mail' | 'arrowDown';
export type IconProps = { name: IconNameTypes; color: ColorStyleProps };
const Icon = ({ name, color }: IconProps) => {
  const Element = icons[name];
  return <Element color={color} area-label="Icon component" />;
};
export default Icon;
