import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from './imagens/foto perfil.JPG';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem = {foto}
          nome="João Gabriel" 
          descricao="Oi, eu sou o João Gabriel. Sou aluno da Labenu e estudo desenvolvimento web - full stack e estou amando essa experiência e cada dia mais feliz com meus resultados. Já vejo minha vaga de emprego cada vez mais perto!!"
          alt = "foto de perfil"
          />
        
        <ImagemButton 
          imagem="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAADs7Oynp6fW1tZsbGx/f39VVVXMzMzZ2dnDw8Pw8PDBwcElJSXr6+vy8vIbGxsgICAnJycYGBg1NTW5ubn4+Pg4ODgmJiYwMDA8PDyhoaFHR0fj4+N6enpgYGCGhoaOjo5QUFBoaGh0dHReXl4RqiZFAAAEzUlEQVR4nO2djXabMAxGIf0PbWjTlXVLsnVr+v6vuOa4XuITZCxsI5nz3QeA3KJPgpTYVQUAmAlds0hL00krOdxePdapWf+6k9b6T/c7uZ5hL232RZP++lm2Okr1ZzbBur6SljuwyShY10tpvc8QPmQ13Er7fbbRrIJ13UgLZi7Sur6XFqzeMhteSAtW1zCEIQylBWEIQxiqNNzejOd7EYYxj+YXRRheRhwNhhLAkAcMJYAhDxhKAEMeMJQAhjxgKAEMecBQAhjygKEEMOQBQwlgyAOGEsCQBwwlgCEPGEoAQx4wlACGPGAoAQx5wFACGPKAoQQw5AFDCWDIA4YSwJAHDCWAIQ8YSgBDHjCUAIY8YCgBDHnAUAIY8oChBDDkAUMJYMgDhhLAkAcMJYAhDxhKAEMeMJQAhjxgKMH5Cq0lGLbLzf4qjP23zIbbwA9yYLMMW3W4jVw4N60hk+sAx7vYk4gaBpz+Mv8p8hrWtwPnOM9VaYbP2U8hbVj/8Z4iwRry4oa17wxNguPLG/rWF02xSr68oW+l+hSGaVdoHYNvy4j4WVHXuwjDlwTn9xt28YdfRwhWu/jz1wN/4/fow1/HGFbrBIL+XT/ig7iKMkxRpgNbYsTuV+Eft8P8jRYc3H0nbuuf90jB+L2VHgZ3UOpiFGOv4IGbKMF1O3yGbuzN93ofMyiO3H+MF3wKEPxUPF/7/Yu33R3JbpVug63F7tbHJdksHgK3FqIVX5JJxLCkPt5r8N5JdBY1KJITJSSDFjqL8or31EcLy6BFryItyNzeS2sWScE1e/8ynVeRFHxglahBoyItOGoHuu6HNsVkGbRoyyKdwRElatB1FRONCZdWURYTZ9Cip91kEtSjmCGDFh1ZTN5FT2kVKNKCixSHly/UhLdq/UgXapYx4SJbqNm66CmSipkzaJHLYsYx4SKVRVLwMbGgr1BzbixNfumUtkQNElmcpMkcmb5QJxacvlDpEs22p3xL/nsvhyIp+Jghg5YpC5Us0fBvtsfQkVcxtWLWpwkfU2Vx0jHhMo2ioOA0WZx8TLjk76h0F51EML+iaIka8mZRuEQNORXFxoRLvkJVUKKG9jWPositWj/00IhRVJFBS0u+MT1eUXxMuDTJs0hnMO59wNGkbjdqmsyRtEODFJTIoIXuqL43kftRlkFLQ7YbriItKJRBS6osqixRQxpFgS+dwqGHRnihKuyip8RnUW0GLbGFqjiDlvYp5iqSgs9qBOMKVX2JGsa3G+VN5sjYLKoeEy7jClXRA+8wzYh2QzcZVRm00IVKKRZUogbu0FD6NOGDl8VCxoQLJ4tFCnKyWFwGLaFXke6iCseEyyJIsdASNYS0m2Ju1foZVixc0FeoZu0Y8gfjJZSoYUH+XPmgSArqvFXrx1eoxY4JF/pH5xvyChYlWFUrMosE5WTQQrebmQj6sthDKWPChe6oZ+i/VetnFapY0phwCcximSVqoJ80TtD4pVM4AYVaYhc9ZfU82wxaBgq15AxaGt9VLHVMuHiyWH6JGsh71NKbzBFiLpY9Jlx6O+pcStTQozgvwZ5CncOYcFm4V3EeY8LFGRrz6aKnNMc3GX8U9p1MKN3+S3CfbvE6bSwPCwZ+8N/MLIl2kfw32AAA9fwDmJ5awp+z1mwAAAAASUVORK5CYII=" 
          texto="Ver mais"
          alt = "foto seta apontando para baixo"
          link = 'App.js'
        />
      </div>
      <div className="page-section-container">
        <CardPequeno
        imagem = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRvLjarpvWQAwN6gSDb09ah_4MTsXlLAtteg&usqp=CAU"
        titulo = "Email: " 
        texto = " joaozinlabenu@gmail.com"
        alt = "foto de um icone de envelope"
        />
        <CardPequeno
        imagem = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqIHK6VNDumcvHL-FuLEhRHbcLGECdomla4A&usqp=CAU"
        titulo = "Endereço: "
        texto = " Setor de mansões Park Way - Brasília"
        alt = "foto representando endereço"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAzFBMVEX////+fgGpu8dFUlv6sk7+ewD9dAD+0rX+nmL+eAD/9vH9sUSlvMn/qXVGUVv7sE7+/Pj5tlL8mTPZ3N81RE8vPko+S1UmN0Pv8fKGjZJ2hI79lUpwfoidsb2jt8bttGrntXOlq65QXWSWm518g4rO0dNdaHG5vcGdo6j8rnX9bAD8mVX+tou4xM2ts7jDztX85M1qcXb96938y6f+fhr/3ccjPU39iibgfy/qmk39v5Xmvob7yZz6ul770aL7yYb74cD6wHD8qjH+y5OTtsBEAAADQklEQVRoge2Z+XqTQBTFw9oQIqGyGI3SNK4NxjS1Wtcs+P7v5AyEALOlf9wZPj/nvMDv3HvubDAYaGlpaWlpaWlpaf0zip73i0+SPg1EcRDE1/3h0yCwrCTqC28humUFi57wSVDyrfh1T3jrqLSHBKLUavhv+sC3pLwBaOG1+aonAI9ex8Aztfhu9UjJW5X4NCD5qcIAEN6i9E4dPqGqxwMwVYen6YivaAUysq9W4HtFeBYcD+AHJfiYXT3iq7iGUNuOWv70Rczpfpcf3oRS8Kb5khd/mx8Ol09k8E1TYKDZAMPcNdyP8PhVhg3wIog/1fiZaxiGewGNj0o8MsDafZsDKJx5BpYzAuYf8bwIjvtvOHRLvOENYfFr0xQaCCp8fsQbxvIWEj/NGj6KgB6/8gZYZV/JmUHyW+UzDZTbf519JfcLHH5qdkVFgONvNb9sAOAERKbYQLqp8E7bgHEHxl+RfMIAaj9RPQ7gMxSebD81Awsie+AJpNpPbESofBpvGPdQe9CaxW8iSDdhzsAbHtQKYOKxgaoDX6MhmT3sALziGKgOo+SaWT2q/0YyvxzCdJM7xMKrBzCHwXc2X2oGFqzRq/gP0vnIwDdO9VjS+dn4OxeOGiCdP77ynwoMyOYjvG1zDUDlz5//uW9P7EueAbATkFP/GOGxeAY8qFswffydml+JbcCDugQz9/8GjyNg7QEO1BWQef7NT9XzIriHeoYxzv9xOXp2qwOUAajtd8AYgFb23BkAfANF2Vk83YEHuCcQEcB4TuOpDoCdvlidBrDx5Ay4cNffQecKxKmeiMCD/QbQLEFW9k0EJ/4S+AH8KHzTAfcHLP54CGb85tcGqrUPdfQ1WmfC7LtD6IEOX20gEze/iQD+8wvWKnsEHndgCfby62j6sziLx/J/ScGjJ/bv8/XbdrGVhEfanTfg7+XhB4O9LXbgHyRMflujg8CAP5HY+1p7zhRMfH8nufjawaGgLfjFH+hvnnyNtge78GsTvl9c7vZSProLLNxud4dSu+3+Tl3phELFZWv91wovzgj0sz+tkSuWnF9fLb7ga0t58dN8zdd8eXzPEQr42Uvz86FY0O9OLS0tLS0tLS0tLUj9BSLTTknfytwMAAAAAElFTkSuQmCC" 
          nome="Labenu" 
          descricao="Estudo desenvolvimento Web na Labenu, uma empresa que é focada em formar alunos prontos para o mercado de trabalho." 
          alt = "foto da logo da Labenu"
        />
        
        <CardGrande 
          imagem="https://pbs.twimg.com/profile_images/1509948818934145030/Na3h9qJ4_400x400.png" 
          nome="UnB" 
          descricao="Já estudei Engenharia de Software na UnB há alguns anos atrás." 
          alt = "Foto logo da UnB"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
          alt = "foto logo do facebook"
          link = 'https://facebook.com.br'
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
          alt = "foto logo do twitter"
          link = 'https://twitter.com.br'
        />        
      </div>
    </div>
  );
}

export default App;
