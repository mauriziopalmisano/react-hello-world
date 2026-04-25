import { useState, useEffect } from 'react';



function App() {
  const apiPosts = 'https://lanciweb.github.io/demo/api/pictures/';
  const [selectedPost, setSelectedPost] = useState(null);
  const [posts, setPosts] = useState([]);

  const openOverlay = (post) => {
    setSelectedPost(post);
  };
  
  const closeOverlay = () => {
    setSelectedPost(null);
  };


  useEffect(() => {
    fetch(apiPosts)
      .then(response => {
      return response.json();
      }).then(post => {
        setPosts(post);
      });
  }, []);

  useEffect(() => {
    if (selectedPost !== null) {
      document.body.classList.add('overflow-hidden');
    }else{
      document.body.classList.remove('overflow-hidden');
    }
  }, [selectedPost]);

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
          {posts.map(post => (
            <div key={post.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="polaroid">
                <img src="./src/assets/pin.svg" alt="" className="pin-polaroid " />
                <img src={post.url} alt={post.title} className="img-fluid pointer" onClick= {() => openOverlay(post)}/>
                <p className="m-0 mt-2">{post.title}</p>
                <p className="m-0 date-font">{post.date}</p>
              </div>
            </div>
          ))}
        </main>
      </div>
      {selectedPost && (
        <div className='custom-overlay'>
          <img className='overlay-img' src={selectedPost.url} alt={selectedPost.title} />
          <button className='close-btn' onClick={closeOverlay}>
            <i className="bi bi-x-circle text-white"></i>
          </button>
        </div>
      )}
    </>
  )

}

export default App
