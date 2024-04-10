import { memo } from 'react';

import SettingButton from '@/app/chat/features/SettingButton';

const HeaderAction = memo(() => {
  return (
    <>
      {/* <ShareButton /> */}
      {/* <ActionIcon
        icon={showAgentSettings ? PanelRightClose : PanelRightOpen}
        onClick={() => toggleConfig()}
        size={DESKTOP_HEADER_ICON_SIZE}
        title={t('roleAndArchive')}
      /> */}
      <SettingButton />
    </>
  );
});

export default HeaderAction;
