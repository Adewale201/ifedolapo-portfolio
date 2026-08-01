import profile from "../../assets/images/profile.jpg";

const HeroImage = () => {
  return (
    <div className="overflow-hidden">

      <img
        src={profile}
        alt="Ifedolapo Egberongbe"
        className="h-[470px] w-full object-cover object-top transition duration-500 hover:scale-105"
      />

    </div>
  );
};

export default HeroImage;