// https://beta.reactjs.org/apis/react/createElement#creating-an-element-without-jsx
'use strict';

function App() {
  const [count, setCount] = React.useState(0);

  return React.createElement(
    'button',
    {
      onClick: () => setCount((prev) => prev + 1),
      className: 'button'
    },
    `count: ${count}`
  );
}

// ===============================================

const rootNode = document.querySelector('#app');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

