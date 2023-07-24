import { ActionIcon, DraggablePanelBody, EditableMessage, SearchBar } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { ChevronRight } from 'lucide-react';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';
import { shallow } from 'zustand/shallow';

import { agentSelectors, useSessionStore } from '@/store/session';

import Header from './Header';

const useStyles = createStyles(({ css, token }) => ({
  desc: css`
    color: ${token.colorText};
  `,
  model: css`
    color: ${token.colorTextTertiary};
  `,
  prompt: css`
    overflow-x: hidden;
    overflow-y: auto;

    height: 200px;
    padding: 0 16px 16px;

    opacity: 0.75;
    border-bottom: 1px solid ${token.colorBorder};

    transition: 200ms ${token.motionEaseOut};

    &:hover {
      opacity: 1;
    }
  `,
  title: css`
    font-size: ${token.fontSizeHeading4}px;
    font-weight: bold;
  `,
}));

const SideBar = memo(() => {
  const [openModal, setOpenModal] = useState(false);
  const { styles } = useStyles();
  const [updateAgentConfig] = useSessionStore((s) => [s.updateAgentConfig], shallow);
  const systemRole = useSessionStore(agentSelectors.currentAgentSystemRole, shallow);

  const { t } = useTranslation('common');
  return (
    <DraggablePanelBody style={{ padding: 0 }}>
      <Header
        actions={
          <ActionIcon
            icon={ChevronRight}
            onClick={() => setOpenModal(true)}
            size="small"
            title={t('edit')}
          />
        }
        title={t('settingAgent.prompt.title', { ns: 'setting' })}
      />
      <EditableMessage
        classNames={{ markdown: styles.prompt }}
        onChange={(e) => {
          updateAgentConfig({ systemRole: e });
        }}
        onOpenChange={setOpenModal}
        openModal={openModal}
        placeholder={`${t('settingAgent.prompt.placeholder', { ns: 'setting' })}...`}
        styles={{ markdown: systemRole ? {} : { opacity: 0.5 } }}
        text={{
          cancel: t('cancel'),
          confirm: t('ok'),
          edit: t('edit'),
          title: t('settingAgent.prompt.title', { ns: 'setting' }),
        }}
        value={systemRole}
      />
      <Flexbox style={{ padding: 16 }}>
        <SearchBar placeholder={t('archiveSearchPlaceholder')} />
      </Flexbox>
    </DraggablePanelBody>
  );
});

export default SideBar;
