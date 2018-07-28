import * as React from 'react';
import { match } from 'react-router-dom';
import { MessageForm, MessageFeed } from '../components';


interface ChannelMatch {
  channelName: string;
}
interface ChannelProps {
  match: match<ChannelMatch>;
}

interface ChannelState {
  shouldReload: boolean;
}

// match<P>... ChannelPropsのプロパティ。react-routerから渡されるprops.matchを使うため
// export interface match<P> {
//   params:  P;
//   isExact: boolean;
//   path:    string;
//   url:     string;
// }

export class Channel extends React.Component<ChannelProps, ChannelState> {
  constructor(props: ChannelProps) {
    super(props);
    this.state = {
      shouldReload: false
    }
  }

  public render() {
    const { channelName } = this.props.match.params;
    return (
      [
        <MessageFeed key='message-feed'
          channelName={channelName}
          shouldReload={this.state.shouldReload}
          setShouldReload={this.setShouldReload}
        />,
        <MessageForm key='message-form'
          channelName={channelName}
          setShouldReload={this.setShouldReload}
        />
      ]
    );
  }

  private setShouldReload = (shouldReload: boolean) => {
    this.setState({ shouldReload });
  }
}
