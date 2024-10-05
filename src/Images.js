export default function Images(props) {
  console.log(props.images);
  if (!props.images) {
    return null;
  } else {
    return (
      <div className="Images">
        <div className="row">
          {props.images.map(function (image, index) {
            return (
              <div key={index} className="col-md-4">
                <a
                  href={image.photographer_url}
                  target="_blank"
                  rel="noreferrer">
                  <img
                    src={image.src.landscape}
                    alt={image.photographer}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
