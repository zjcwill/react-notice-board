import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import NoticeBoard from '../.';

const App = () => {
  return (
    <div>
      <NoticeBoard
        width={600}
        stepDuration={1500}
        dataSource={[
          '1. 我们不加班，重要的事情说三遍',
          '2. 我们加班发工资加鸡腿',
          '3. 今天中午吃点啥',
          '4.你中暑了',
        ]}
        extra={
          <a style={{ color: '#BFBFBF', fontSize: 12, marginRight: '16px' }}>
            更多
          </a>
        }
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
