import './Home.css'

function Home() {
  return (
    <div className="Home">
    <section className='Homesection'>
     <div className='Homeinfo'>
      <h3>Olá, meu nome é</h3>
      <h1>Luis Henrique</h1>
      <div className='Homespecial'>
      <h3>E eu sou um</h3> <h3 className='Homeinfospecial'> Desenvolvedor Web</h3></div>
      <h6 className='Homedesc'>A expressão Lorem ipsum em design gráfico|testar e ajustar aspectos visuais (layout, tipografia, formatação, etc.) antes d</h6>
       <div className='Homesocialmedias'>
        <img src='https://i.imgur.com/Ky2mBQh.png' className='Homesmicon'/>
        <img src='https://i.imgur.com/9gAYMtU.png' className='Homesmicon'/>
        <img src='https://i.imgur.com/tRZLAKQ.png' className='Homesmicon'/>
        <img src='https://i.imgur.com/Ky2mBQh.png' className='Homesmicon'/> 
       </div>
      <button className='Homeespecialbutton'><h1 className='Homecontacttext'>Fale comigo!</h1></button>
     </div>   
     <img src='https://i.imgur.com/KBzIIzp.jpg' className='Homepic'/>
    </section> 

    <section className='Aboutsection'>
     <img src='https://i.imgur.com/KBzIIzp.jpg' className='Homepic'/> 
     <div className='Aboutinfos'>
      <div className='Homespecial'>
      <h1>Sobre</h1> <h1 className='Homeinfospecial'> mim</h1></div>
      <h6 className='Homedesc'>
        A expressão Lorem ipsum em design gráfico|testar e ajustar aspectos visuais (layout, tipografia, formatação, etc.) antes d
        A expressão Lorem ipsum em design gráfico|testar e ajustar aspectos visuais (layout, tipografia, formatação, etc.) antes d
        A expressão Lorem ipsum em design gráfico|testar e ajustar aspectos visuais (layout, tipografia, formatação, etc.) antes d
        A expressão Lorem ipsum em design gráfico|testar e ajustar aspectos visuais (layout, tipografia, formatação, etc.) antes d
        A expressão Lorem ipsum em design gráfico|testar e ajustar aspectos visuais (layout, tipografia, formatação, etc.) antes d
      </h6>
      <button className='Homeespecialbutton'><h1 className='Homecontacttext'>Saiba mais</h1></button>
      </div>
    </section>

    <section className='Skillssection'>
    <div className='Homespecial'>
      <h1 className='Hometitles'>Nossos</h1> <h1 className='Homeinfospecial'>serviços</h1>
    </div>
      <div className='Skillcards'>

       <div className='Skillcard'>
        <img src='https://i.imgur.com/SwGSoB3.png' className='Skillicon'/>
        <h1 className='Skillcardtitle'>Desenvolvimento Web</h1>
        <h1 className='Skillcarddesc'>A expressão Lorem ipsum em design gráfico|testar e ajustar aspectos visuais (layout, tipografia, formatação, </h1>
        <button className='Skillreadbutton'><h1 className='Skillreadtext'>Saiba mais</h1></button>
       </div>

       <div className='Skillcard'>
        <img src='https://i.imgur.com/WFDv6IU.png' className='Skillicon'/>
        <h1 className='Skillcardtitle'>Design gráfico</h1>
        <h1 className='Skillcarddesc'>A expressão Lorem ipsum em design gráfico|testar e ajustar aspectos visuais (layout, tipografia, formatação, </h1>
        <button className='Skillreadbutton'><h1 className='Skillreadtext'>Saiba mais</h1></button>
       </div>

       <div className='Skillcard'>
        <img src='https://i.imgur.com/WN6VP6R.png' className='Skillicon'/>
        <h1 className='Skillcardtitle'>Edição de vídeo</h1>
        <h1 className='Skillcarddesc'>A expressão Lorem ipsum em design gráfico|testar e ajustar aspectos visuais (layout, tipografia, formatação, </h1>
        <button className='Skillreadbutton'><h1 className='Skillreadtext'>Saiba mais</h1></button>
       </div>
       
      </div>
    </section>

    <section className='Projectssection'>
      <div className='Projecttitle'>
       <h1>Últimos</h1> <h1 className='Homeinfospecial'>Projetos</h1>
      </div>
       <div className='Projects'>
       <div className='ProjectsLayer1'>
        <button className='Project'></button>
        <button className='Project'></button>
        <button className='Project'></button>
       </div>

       <div className='ProjectsLayer2'>
        <button className='Project'></button>
        <button className='Project'></button>
        <button className='Project'></button>
       </div>
       </div>
    </section>
    </div>
  );
}

export default Home;
