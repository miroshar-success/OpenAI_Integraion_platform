import { createStyles } from 'antd-style';
import Image from 'next/image';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import SyncStatusTag from '@/features/SyncStatusInspector';

import SessionSearchBar from '../../features/SessionSearchBar';

export const useStyles = createStyles(({ css, token }) => ({
  logo: css`
    fill: ${token.colorText};
  `,
  top: css`
    position: sticky;
    top: 0;
  `,
}));
const Header = memo(() => {
  const { styles } = useStyles();

  return (
    <Flexbox className={styles.top} gap={16} padding={16}>
      <Flexbox distribution={'space-between'} horizontal>
        <Flexbox align={'center'} gap={4} horizontal>
          <Image alt={'logo'} height={36} src={'/images/name.png'} width={75} />
          <SyncStatusTag />
        </Flexbox>
      </Flexbox>
      <SessionSearchBar />
    </Flexbox>
  );
});

export default Header;
