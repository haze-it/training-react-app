import * as React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';

export * from './ChannelList';

// Ver. Functional Component
const channels = ['general', 'random'];

export const ChannelList = () => {
  return (
    <Menu inverted vertical fixed= {'left'}>
      <Menu.Item as={Link} to={'/'}>
        Home
        <Icon name='home' />
      </Menu.Item>
      <Menu.Item>
        Channels
        <Icon name='list' />
        <Menu.Menu>
          {channels.map(channel => 
            <Menu.Item
              key={channel}
              as={NavLink}
              to={{ pathname: `/channels/${channel}` }}
            >
              {channel}
            </Menu.Item>
          )}
        </Menu.Menu>
      </Menu.Item>
    </Menu>
  );
};

// // Ver. React Component
// export class ChannelList extends React.Component<{}, {}> {
//   public render() {
//     // 本来channelsはServer sideから取得すべき
//     const channels = ['general', 'random'];
  
//     return (
//       <Menu inverted vertical fixed={'left'}>
//         <Menu.Item>
//         Channels
//         <Menu.Menu>
//           {channels.map(channel => 
//             <Menu.Item
//               key={channel}
//               as={NavLink}
//               to={{ pathname: `/channels/${channel}` }}
//             >
//             {channel}
//             </Menu.Item>
//           )}
//         </Menu.Menu>
//         </Menu.Item>
//       </Menu>
//     );
//   }
// }