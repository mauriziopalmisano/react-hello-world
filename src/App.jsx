const apiPosts = 'https://lanciweb.github.io/demo/api/pictures/';
function polaroidAssembler(card, index) {
  const polaroidEl =
    <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
      <div className="polaroid">
        <img src="./img/pin.svg" alt="" className="pin-polaroid " />
        <img src={card.url} alt={card.title} className="img-fluid" />
        <p className="m-0 mt-2">{card.title}</p>
        <p p className="m-0 date-font">{card.date}</p>
      </div>
    </div>;
  return polaroidEl
}



function App() {
  fetch(apiPosts)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      json.forEach((post, index) => {
        const polaroid = polaroidAssembler(post, index);
        return (
          <>
            <div className="container-fluid bg-img-head bg-set">

              <header className="row">
                <div className="col-12 ">
                  <h1 className="text-center header-title m-0 py-3">ESTATE '24</h1>
                </div>
              </header>
            </div>
            <div className="container-fluid bg-img-main bg-set">
              <main className="row justify-content-center  padding" id="polaroid-wall">
                {polaroid}
              </main>
            </div>
          </>
        )
      })
    })


}

export default App
