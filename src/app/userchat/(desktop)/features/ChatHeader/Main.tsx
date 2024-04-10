import { Avatar, ChatHeaderTitle } from '@lobehub/ui';
import { Skeleton } from 'antd';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { useSessionStore } from '@/store/session';
import { agentSelectors, sessionSelectors } from '@/store/session/selectors';

import Tags from './Tags';

const Main = memo(() => {
  const { t } = useTranslation('chat');

  const [init, isInbox, title, description] = useSessionStore((s) => [
    sessionSelectors.isSomeSessionActive(s),
    sessionSelectors.isInboxSession(s),
    agentSelectors.currentAgentTitle(s),
    agentSelectors.currentAgentDescription(s),
  ]);

  const displayTitle = isInbox ? t('inbox.title') : title;
  const displayDesc = isInbox ? t('inbox.desc') : description;

  return !init ? (
    <Flexbox horizontal>
      <Skeleton
        active
        avatar={{ shape: 'circle', size: 'default' }}
        paragraph={false}
        title={{ style: { margin: 0, marginTop: 8 }, width: 200 }}
      />
    </Flexbox>
  ) : (
    <Flexbox align={'flex-start'} gap={12} horizontal>
      <Avatar
        background={'transparent'}
        shape={'circle'}
        size={40}
        src={'/images/icone.png'}
        title={'chat avatar'}
      />
      <ChatHeaderTitle desc={displayDesc} tag={<Tags />} title={displayTitle} />
    </Flexbox>
  );
});

export default Main;
