import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Questions</h1>
      <div className='containerCards'>
        <Card title={"How to open bank account?"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio possimus autem, totam ab amet inventore laboriosam, fuga quia hic incidunt consectetur! Nam nihil ipsam non magnam debitis ea at quis."} />
        <Card title={"Can I open an account for minors?"} content={"Yes, Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis exercitationem itaque quidem fugiat est veniam nobis, culpa sequi quod aperiam deserunt harum iusto eos vel pariatur blanditiis obcaecati perspiciatis officia!"} />
        <Card title={"Can I receive my salary directly into the account?"} content={"Yes, Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nemo beatae aspernatur recusandae distinctio repudiandae cum odio officiis officia, quibusdam esse repellendus aliquam in. Eum ea nostrum iure officiis velit?"} />
        <Card title={"How long does it take for my account to be approved?"} content={"Very safe, Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nemo beatae aspernatur recusandae distinctio repudiandae cum odio officiis officia, quibusdam esse repellendus aliquam in. Eum ea nostrum iure officiis velit?"} />
        <Card title={"Does the bank offer credit card?"} content={"Very safe, Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nemo beatae aspernatur recusandae distinctio repudiandae cum odio officiis officia, quibusdam esse repellendus aliquam in. Eum ea nostrum iure officiis velit?"} />
        <p>Developed by <a target="_blank" href="https://github.com/FelipeGPellegrini" rel="noreferrer">Felipe Pellegrini</a></p>


      </div>

    </div>
  );
}

export default App;
