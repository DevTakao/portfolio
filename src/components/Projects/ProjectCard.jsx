const ProjectCard = ({ image, title, description, imageFirst = true }) => {
  return (
    <div className="Project_Container grid grid-cols-1 md:grid-cols-2 mb-24">
      <div className={`Project_Graphic max-w-md h-48 mx-auto px-5 ${imageFirst ? "md:order-1" : "md:order-2"}`}>
        <img src={image} className="w-full h-full object-contain" alt={title} />
      </div>
      <div className={`Project_Content px-5 ${imageFirst ? "md:order-2" : "md:order-1"}`}>
        <h3 className="text-center md:text-left text-2xl font-normal mb-5 md:mb-10 mt-5 md:mt-0">{title}</h3>
        <p className="text-justify md:text-left">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
