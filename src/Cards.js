function Cards(props) {
    return (
        <section className="section">
            <div className="section__left">
            <img src={props.item.image} alt="" />
            </div>
            <div className="section__right">
            <div className="section__location">
                <p className="country"><i class="fas fa-map-marker-alt"></i>{props.item.country}</p>
                <a className="maps" href={props.item.maps}>View on Google Maps</a>
            </div>
            <p className="location">{props.item.location}</p>
            <p className="date">{props.item.date}</p>
            <p className="description">{props.item.description}</p>
            </div>
        </section>
    );
}
  
export default Cards;