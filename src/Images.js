import "./Images.css";

export default function Images(props) {
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
                  href={image.src.original}
                  target="_blank"
                  rel="noreferrer">
                  <img
                    src={image.src.landscape}
                    alt={image.photographer}
                    className="img-fluid img-thumbnail image"
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
