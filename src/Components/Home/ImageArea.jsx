import ProfilePic from "/img/IMG20231003122856.jpg";

export default function ImageArea() {
  return (
    <div className="pt-20 md:pt-0 md:min-w-[40%] flex justify-center items-center">
      <div className="relative flex items-center justify-center after:bg-gradient-to-b after:from-primary dark:after:from-dark_primary after:to-secondary dark:after:to-dark_secondary after:absolute after:rounded-full after:w-[60px] after:h-[360px] after:top-[-33%] after:left-[50%] after:rotate-45 md:after:h-[400px] before:bg-gradient-to-t before:from-primary dark:before:from-dark_primary before:to-secondary dark:before:to-dark_secondary before:absolute before:rounded-full before:w-[60px] before:h-[360px] before:top-[-30%] before:right-[55%] before:rotate-45 md:before:h-[400px]">
        <div className="w-[220px] md:w-[260px] h-[220px] md:h-[260px] flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-tr from-primary dark:from-dark_primary to-secondary dark:to-dark_secondary z-10">
          <div className="max-w-[210px] md:max-w-[248px] max-h-[210px] md:max-h-[248px] mx-auto overflow-hidden rounded-full object-center">
            <img src={ProfilePic} alt="MD. Mehedi Hasan Talha" />
          </div>
        </div>
      </div>
    </div>
  );
}
