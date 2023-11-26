import '../../styles/layout/PortadaPrincipal.css';


const PortadaPrincipal=(props)=>{
    return(
        <section>

            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src="../../images/portada003.jpg" className="d-block w-100 portadaPrincipal2" alt="portada1"/>
                    </div>

                    <div className="carousel-item">
                        <img src="../../images/portada002.jpg" className="d-block w-100 portadaPrincipal2" alt="..."/>
                    </div>

                    {/* <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..."/>
                    </div> */}

                </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>

                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
            </div>

        </section>
  );
}
export default PortadaPrincipal;