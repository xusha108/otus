import React, {FC} from 'react';
import ReactDOM from 'react-dom';

const App: FC = () => {    
  return(
   <div>
      <h1>Hello World</h1>     
  </div>  
  )
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'))