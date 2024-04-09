import { ChatHeader } from '@lobehub/ui';
import { memo } from 'react';

// import HeaderAction from './HeaderAction';
import Main from './Main';

// const Header = memo(() => <ChatHeader left={<Main />} right={<HeaderAction />} />);
const Header = memo(() => <ChatHeader left={<Main />} />);

export default Header;
